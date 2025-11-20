import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import CollectionCard from '@/components/CollectionCard'

export default function Home() {
  // Featured products - replace with your actual Etsy product URLs and images
  const featuredProducts = [
    {
      title: 'Cuteness Level MAX Gamer Girl Hoodie',
      price: '$38.50',
      imageUrl: '/api/placeholder/400/400',
      etsyUrl: 'https://www.etsy.com/your-shop/product-url-1',
    },
    {
      title: 'Cozy Galaxy Astronaut Hoodie for Kids',
      price: '$36.00',
      imageUrl: '/api/placeholder/400/400',
      etsyUrl: 'https://www.etsy.com/your-shop/product-url-2',
    },
    {
      title: 'Merry Controller Christmas Tree Game Hoodie',
      price: '$36.50',
      imageUrl: '/api/placeholder/400/400',
      etsyUrl: 'https://www.etsy.com/your-shop/product-url-3',
    },
    {
      title: 'Reindeer Feast Mode Activated Christmas Sweatshirt',
      price: '$35.50',
      imageUrl: '/api/placeholder/400/400',
      etsyUrl: 'https://www.etsy.com/your-shop/product-url-4',
    },
  ]

  // Collections - replace with your actual Etsy collection URLs
  const collections = [
    {
      title: 'Gamer Shirts',
      description: 'Level up your style with gaming-themed family tees',
      imageUrl: '/api/placeholder/600/450',
      etsyUrl: 'https://www.etsy.com/your-shop/section/gamer-shirts',
    },
    {
      title: 'Theme Park Shirts',
      description: 'Adventure-ready designs for your next family trip',
      imageUrl: '/api/placeholder/600/450',
      etsyUrl: 'https://www.etsy.com/your-shop/section/theme-park-shirts',
    },
    {
      title: 'Movie Shirts',
      description: 'Celebrate your favorite films together',
      imageUrl: '/api/placeholder/600/450',
      etsyUrl: 'https://www.etsy.com/your-shop/section/movie-shirts',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-yellow-50 to-purple-50 py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Funny Family Shirts for Gamers & Movie Lovers
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Welcome to Family Leveling, where family life meets player life! We create cute and funny 
              family tees that celebrate progress, teamwork, and laughter. Every design brings smiles, 
              sparks conversations, and makes every day feel like a new quest.
            </p>
          </div>
          <div className="flex justify-center gap-4">
            <Link
              href="https://www.etsy.com/shop/FamilyLeveling"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Shop Now on Etsy
            </Link>
          </div>
        </div>
      </section>

      {/* Short Intro Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Leveling Up Family Time – One Matching Tee at a Time!
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            As a family of gamers, we loved the thrill of leveling up together, whether that meant 
            beating a boss battle or just surviving a chaotic school morning. We wanted shirts that 
            captured those inside jokes, those shared victories, and the playful "we're in this together" 
            energy that comes with being a family.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            So we created Family Leveling, a cozy corner of the internet for geeky families, gamer 
            parents, and little adventurers who love to match in style. From "Player One" to "Next Gen," 
            our tees and gifts are made to bring smiles and spark conversations.
          </p>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Featured Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="https://www.etsy.com/shop/FamilyLeveling"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All Products →
            </Link>
          </div>
        </div>
      </section>

      {/* Collections Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Shop by Collection
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <CollectionCard key={index} {...collection} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-yellow-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            About Family Leveling
          </h2>
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              It all started with a simple idea — what if family shirts could be as fun as game night? 
              As a family of gamers, we loved the thrill of leveling up together, whether that meant 
              beating a boss battle or just surviving a chaotic school morning.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-4">
              We wanted shirts that captured those inside jokes, those shared victories, and the playful 
              "we're in this together" energy that comes with being a family. So we created Family Leveling, 
              a cozy corner of the internet for geeky families, gamer parents, and little adventurers who 
              love to match in style.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Every design celebrates progress, teamwork, and laughter because family life is the ultimate 
              co-op game. From "Player One" to "Next Gen," our tees and gifts are made to bring smiles, 
              spark conversations, and make every day feel like a new quest.
            </p>
            <p className="text-lg font-semibold text-purple-600 text-center">
              Level up together, because every family deserves extra XP.
            </p>
          </div>
          <div className="text-center mt-8">
            <Link
              href="https://www.etsy.com/shop/FamilyLeveling"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-lg transition-colors"
            >
              Visit Our Etsy Shop
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <p className="mb-4">© 2025 Family Leveling. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <Link
              href="https://www.etsy.com/shop/FamilyLeveling"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors"
            >
              Etsy Shop
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

