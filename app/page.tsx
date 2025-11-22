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
      {/* Header */}
      <header className="sticky top-0 z-50 bg-purple-50 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <div className="text-2xl font-bold text-purple-500">
                Family Leveling
              </div>
            </Link>
            <Link
              href="https://www.etsy.com/shop/FamilyLeveling"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
            >
              Shop on Etsy →
            </Link>
          </div>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="relative w-full bg-gradient-to-br from-yellow-50 via-orange-50 to-purple-50 py-12 md:py-20 px-4 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Side - Text and CTA (stacks below image on mobile) */}
            <div className="order-2 lg:order-1 text-center lg:text-left animate-fade-in-up w-full">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
                Funny Family Shirts for Gamers
              </h1>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8">
                Welcome to Family Leveling, where family life meets player life! We create cute and funny
                family tees that celebrate progress, teamwork, and laughter. Every design brings smiles,
                sparks conversations, and makes every day feel like a new quest.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  href="https://www.etsy.com/shop/FamilyLeveling"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-10 bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-full transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl text-center"
                >
                  Shop Now on Etsy
                </Link>
              </div>
            </div>

            {/* Right Side - Circular Image (stacks on top on mobile) */}
            <div className="order-1 lg:order-2 flex justify-center lg:justify-end animate-fade-in-up w-full" style={{ animationDelay: '0.2s' }}>
              <div className="relative w-80 h-80 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] rounded-full overflow-hidden shadow-2xl border-8 border-white">
                <Image
                  src="/images/hero/3lifestyle.jpg"
                  alt="Family Leveling lifestyle"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 232px, (max-width: 768px) 320px, (max-width: 1024px) 384px, 500px"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider to white section */}
        <div className="absolute bottom-0 left-0 right-0">
          <WaveDivider fillColor="#ffffff" position="bottom" />
        </div>
      </section>

      {/* Trust Badges Section */}
      <section className="py-12 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center animate-fade-in-up">
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-orange-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                </svg>
              </div>
              <div className="font-semibold text-gray-900">Free Shipping</div>
              <div className="text-sm text-gray-600">On all orders</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-purple-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div className="font-semibold text-gray-900">Quality Guaranteed</div>
              <div className="text-sm text-gray-600">Premium materials</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-pink-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
              </div>
              <div className="font-semibold text-gray-900">Family Owned</div>
              <div className="text-sm text-gray-600">Made with love</div>
            </div>
            <div className="text-center animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-blue-100 flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
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
            <div className="flex justify-center mb-4">
              <Image src="/images/about/logo-hor.png" alt="FamilyLeveling" width={200} height={200} />
            </div>
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

