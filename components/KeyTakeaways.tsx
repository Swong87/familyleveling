interface KeyTakeawaysProps {
  points: string[]
}

export default function KeyTakeaways({ points }: KeyTakeawaysProps) {
  return (
    <aside
      className="my-8 bg-purple-50 dark:bg-purple-900/20 border-2 border-purple-300 dark:border-purple-700 rounded-lg p-6"
      aria-label="Key takeaways"
    >
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
        <span className="mr-2">🔑</span>
        Key Takeaways
      </h2>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li
            key={index}
            className="flex items-start text-gray-700 dark:text-gray-300"
          >
            <span className="text-purple-600 dark:text-purple-400 font-bold mr-3 mt-1">
              •
            </span>
            <span className="leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
    </aside>
  )
}
