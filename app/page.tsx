import Image from 'next/image'
import Link from 'next/link'
import ProductCard from '@/components/ProductCard'
import CollectionCard from '@/components/CollectionCard'
import WaveDivider from '@/components/WaveDivider'

export default function Home() {
  // Featured products - replace with your actual Etsy product URLs
  const featuredProducts = [
    {
      title: 'Cuteness Level MAX Gamer Girl Hoodie',
      price: '$38.50',
      imageUrl: '/images/products/product-1-cuteness-max.png',
      etsyUrl: 'https://www.etsy.com/listing/4407196396/cuteness-level-max-gamer-girl-hoodie',
    },
    {
      title: 'Cozy Galaxy Astronaut Hoodie for Kids',
      price: '$36.00',
      imageUrl: '/images/products/product-2-astronaut.png',
      etsyUrl: 'https://www.etsy.com/listing/4402382918/cozy-galaxy-astronaut-hoodie-for-kids',
    },
    {
      title: 'Merry Controller Christmas Tree Game Hoodie',
      price: '$36.50',
      imageUrl: '/images/products/product-3-christmas-tree.png',
      etsyUrl: 'https://www.etsy.com/listing/4402008133/merry-controller-christmas-tree-gamer',
    },
    {
      title: 'Reindeer Feast Mode Activated Christmas Sweatshirt',
      price: '$35.50',
      imageUrl: '/images/products/product-4-reindeer.png',
      etsyUrl: 'https://www.etsy.com/listing/4401996362/reindeer-feast-mode-activated-christmas',
    },
  ]

  // Collections - replace with your actual Etsy collection URLs
  const collections = [
    {
      title: 'Gamer Shirts',
      description: 'Level up your style with gaming-themed family tees',
      imageUrl: '/images/collections/collection-gamer.jpg',
      etsyUrl: 'https://www.etsy.com/your-shop/section/gamer-shirts',
    },
    {
      title: 'Theme Park Shirts',
      description: 'Adventure-ready designs for your next family trip',
      imageUrl: '/images/collections/collection-theme-park.jpg',
      etsyUrl: 'https://www.etsy.com/your-shop/section/theme-park-shirts',
    },
    {
      title: 'Movie Shirts',
      description: 'Celebrate your favorite films together',
      imageUrl: '/images/collections/collection-movie.jpg',
      etsyUrl: 'https://www.etsy.com/your-shop/section/movie-shirts',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section - Full Width */}
      <section className="relative w-full h-[60vh] overflow-hidden">
        {/* Hero Banner Image - Full Width */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/images/hero/hero-banner.jpg"
            alt="FamilyLeveling - Level up your family style"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            style={{ objectPosition: '80% center' }}
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Funny Family Shirts for Gamers & Movie Lovers
            </h1>
            <p className="text-lg md:text-xl text-white/95 max-w-3xl mx-auto leading-relaxed mb-8 drop-shadow-md">
              Welcome to FamilyLeveling, where family life meets player life! We create cute and funny 
              family tees that celebrate progress, teamwork, and laughter.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="https://www.etsy.com/shop/FamilyLeveling"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
              >
                Shop Now on Etsy
              </Link>
            </div>
          </div>
        </div>
        
        {/* Wave divider to white section */}
        <WaveDivider fillColor="#ffffff" position="bottom" />
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="text-3xl mb-2">🚚</div>
              <div className="font-semibold text-gray-900">Free Shipping</div>
              <div className="text-sm text-gray-600">On all orders</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl mb-2">✨</div>
              <div className="font-semibold text-gray-900">Quality Guaranteed</div>
              <div className="text-sm text-gray-600">Premium materials</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl mb-2">❤️</div>
              <div className="font-semibold text-gray-900">Family Owned</div>
              <div className="text-sm text-gray-600">Made with love</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl mb-2">⭐</div>
              <div className="font-semibold text-gray-900">Etsy Shop</div>
              <div className="text-sm text-gray-600">Secure checkout</div>
            </div>
          </div>
        </div>
      </section>

      {/* Short Intro Section with Curve */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-yellow-50 to-purple-50 relative overflow-hidden">
        {/* Wave divider from white section */}
        <WaveDivider fillColor="#ffffff" position="top" flip />
        
        {/* Decorative circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-200/30 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }} />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 animate-fade-in-up">
            Leveling Up Family Time – One Matching Tee at a Time!
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            As a family of gamers, we loved the thrill of leveling up together, whether that meant 
            beating a boss battle or just surviving a chaotic school morning. We wanted shirts that 
            captured those inside jokes, those shared victories, and the playful "we're in this together" 
            energy that comes with being a family.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            So we created FamilyLeveling, a cozy corner of the internet for geeky families, gamer 
            parents, and little adventurers who love to match in style. From "Player One" to "Next Gen," 
            our tees and gifts are made to bring smiles and spark conversations.
          </p>
        </div>
        
        {/* Wave divider to gray section */}
        <WaveDivider fillColor="#f9fafb" position="bottom" />
      </section>

      {/* Featured Products Section */}
      <section className="py-20 px-4 bg-gray-50 relative">
        {/* Wave divider from previous section */}
        <WaveDivider fillColor="#f9fafb" position="top" flip />
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              Discover our most popular designs that families love to wear together
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard {...product} />
              </div>
            ))}
          </div>
          <div className="text-center mt-16">
            <Link
              href="https://www.etsy.com/shop/FamilyLeveling"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View All Products →
            </Link>
          </div>
        </div>
        
        {/* Wave divider to gradient section */}
        <WaveDivider fillColor="#f9fafb" position="bottom" />
      </section>

      {/* Collections Section */}
      {/* <section className="py-16 px-4 bg-white">
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
      </section> */}

      {/* About Section with Curves */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-yellow-50 relative overflow-hidden">
        {/* Wave divider from previous section */}
        <WaveDivider fillColor="#f9fafb" position="top" flip />
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-20 w-24 h-24 bg-purple-200/20 rounded-full blur-xl" />
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-yellow-200/20 rounded-full blur-xl" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 animate-fade-in-up">
              About FamilyLeveling
            </h2>
          </div>
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-100/50 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              It all started with a simple idea — what if family shirts could be as fun as game night? 
              As a family of gamers, we loved the thrill of leveling up together, whether that meant 
              beating a boss battle or just surviving a chaotic school morning.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We wanted shirts that captured those inside jokes, those shared victories, and the playful 
              "we're in this together" energy that comes with being a family. So we created FamilyLeveling, 
              a cozy corner of the internet for geeky families, gamer parents, and little adventurers who 
              love to match in style.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Every design celebrates progress, teamwork, and laughter because family life is the ultimate 
              co-op game. From "Player One" to "Next Gen," our tees and gifts are made to bring smiles, 
              spark conversations, and make every day feel like a new quest.
            </p>
            <div className="bg-gradient-to-r from-purple-100 to-yellow-100 rounded-2xl p-6 text-center">
              <p className="text-xl font-bold text-purple-700">
                Level up together, because every family deserves extra XP.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="https://www.etsy.com/shop/FamilyLeveling"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold px-10 py-5 rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl"
            >
              Visit Our Etsy Shop
            </Link>
          </div>
        </div>
        
        {/* Wave divider to footer */}
        <WaveDivider fillColor="#111827" position="bottom" />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 relative">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2">FamilyLeveling</h3>
            <p className="text-gray-400">Level up your family style, one matching tee at a time</p>
          </div>
          <div className="flex justify-center gap-8 mb-8">
            <Link
              href="https://www.etsy.com/shop/FamilyLeveling"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-400 transition-colors font-semibold"
            >
              Shop on Etsy
            </Link>
          </div>
          <div className="border-t border-gray-800 pt-6">
            <p className="text-gray-400">© 2025 FamilyLeveling. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

