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
    <Link href={etsyUrl} target="_blank" rel="noopener noreferrer" className="group">
      <div className="relative aspect-square overflow-hidden rounded-lg bg-gray-100 transition-transform group-hover:scale-105">
        <Image
          src={imageUrl}
          alt={alt || title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="mt-4">
        <h3 className="font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <p className="mt-1 text-gray-600">{price}</p>
      </div>
    </Link>
  )
}

