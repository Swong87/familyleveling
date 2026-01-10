import Link from 'next/link'
import Image from 'next/image'

interface AuthorBoxProps {
  author: string
  bio?: string
  avatar?: string
  social?: {
    twitter?: string
    linkedin?: string
    github?: string
  }
}

export default function AuthorBox({ author, bio, avatar, social }: AuthorBoxProps) {
  const defaultBio = 'A work-from-home parent in tech, sharing practical tips on productivity, tools, and balancing career growth with family time.'

  return (
    <aside
      className="my-8 bg-gradient-to-r from-purple-50 to-orange-50 dark:from-purple-900/20 dark:to-orange-900/20 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
      aria-label="About the author"
    >
      <div className="flex items-start gap-4">
        {avatar ? (
          <Image
            src={avatar}
            alt={author}
            width={80}
            height={80}
            className="rounded-full"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-purple-600 dark:bg-purple-700 flex items-center justify-center flex-shrink-0">
            <span className="text-white text-2xl font-bold">
              {author.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        
        <div className="flex-1">
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            Written by {author}
          </h3>
          <p className="text-gray-700 dark:text-gray-300 mb-3 leading-relaxed">
            {bio || defaultBio}
          </p>
          
          {social && (
            <div className="flex gap-4">
              {social.twitter && (
                <a
                  href={social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                  aria-label="Twitter profile"
                >
                  Twitter
                </a>
              )}
              {social.linkedin && (
                <a
                  href={social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                  aria-label="LinkedIn profile"
                >
                  LinkedIn
                </a>
              )}
              {social.github && (
                <a
                  href={social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 font-medium"
                  aria-label="GitHub profile"
                >
                  GitHub
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </aside>
  )
}
