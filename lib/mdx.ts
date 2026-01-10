import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'

const postsDirectory = path.join(process.cwd(), 'content', 'blog')

export interface BlogPost {
  slug: string
  title: string
  description: string
  date: string
  author: string
  category: string
  tags: string[]
  readingTime: string
  content: string
  excerpt?: string
  featured?: boolean
  image?: string
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return []
  }
  return fs.readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.mdx'))
    .map((file) => file.replace(/\.mdx$/, ''))
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.mdx`)
  
  if (!fs.existsSync(fullPath)) {
    return null
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)
  const readingTimeResult = readingTime(content)

  return {
    slug,
    title: data.title || '',
    description: data.description || '',
    date: data.date || '',
    author: data.author || 'Family Leveling',
    category: data.category || 'Productivity',
    tags: data.tags || [],
    readingTime: readingTimeResult.text,
    content,
    excerpt: data.excerpt || content.substring(0, 200) + '...',
    featured: data.featured || false,
    image: data.image || undefined,
  }
}

export function getAllPosts(): BlogPost[] {
  const slugs = getPostSlugs()
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  
  return posts
}

export function getFeaturedPosts(): BlogPost[] {
  return getAllPosts()
    .filter((post) => post.featured)
    .slice(0, 3)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return getAllPosts()
    .filter((post) => post.category.toLowerCase() === category.toLowerCase())
}

export function getPostsByTag(tag: string): BlogPost[] {
  return getAllPosts()
    .filter((post) => post.tags.some((t) => t.toLowerCase() === tag.toLowerCase()))
}

export function getAllCategories(): string[] {
  const posts = getAllPosts()
  return Array.from(new Set(posts.map((post) => post.category)))
}

export function getCategoryFromSlug(slug: string): string | null {
  const categories = getAllCategories()
  const category = categories.find(
    (cat) => cat.toLowerCase().replace(/\s+/g, '-') === slug.toLowerCase()
  )
  return category || null
}
