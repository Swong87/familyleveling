import Image from 'next/image'
import Link from 'next/link'

interface CollectionCardProps {
  title: string
  description: string
  imageUrl: string
  etsyUrl: string
}

export default function CollectionCard({ title, description, imageUrl, etsyUrl }: CollectionCardProps) {
  return (
    <Link href={etsyUrl} target="_blank" rel="noopener noreferrer" className="group">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-gray-100 transition-transform group-hover:scale-105">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h3 className="font-bold mb-2">{title}</h3>
          <p className="text-sm opacity-90">{description}</p>
        </div>
      </div>
    </Link>
  )
}

