import Image from 'next/image'
import Link from 'next/link'

interface ProductCardProps {
  title: string
  price: string
  imageUrl: string
  etsyUrl: string
  alt?: string
}

export default function ProductCard({ title, price, imageUrl, etsyUrl, alt }: ProductCardProps) {
  return (
    <Link href={etsyUrl} target="_blank" rel="noopener noreferrer" className="group block">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-gray-100 transition-all duration-300 group-hover:scale-105 group-hover:shadow-2xl shadow-lg">
        <Image
          src={imageUrl}
          alt={alt || title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 text-center">
            <span className="text-sm font-semibold text-gray-900">View on Etsy →</span>
          </div>
        </div>
      </div>
      <div className="mt-5">
        <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2">
          {title}
        </h3>
        <p className="mt-2 text-lg font-bold text-orange-600">{price}</p>
        <p className="mt-1 text-sm text-gray-500">Free Shipping</p>
      </div>
    </Link>
  )
}

