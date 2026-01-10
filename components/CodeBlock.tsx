'use client'

import { useState } from 'react'

interface CodeBlockProps {
  children: React.ReactNode
  className?: string
  [key: string]: any
}

export default function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    const code = children?.toString() || ''
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const language = className?.replace('language-', '') || 'text'

  return (
    <div className="relative group my-4">
      <div className="absolute right-2 top-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={handleCopy}
          className="bg-gray-700 hover:bg-gray-600 text-white px-3 py-1 rounded text-xs font-medium transition-colors"
          aria-label="Copy code to clipboard"
        >
          {copied ? '✓ Copied!' : 'Copy'}
        </button>
      </div>
      <div className="absolute left-2 top-2">
        <span className="bg-gray-700 text-gray-300 px-2 py-1 rounded text-xs font-mono">
          {language}
        </span>
      </div>
      <pre className="bg-gray-900 dark:bg-black text-gray-100 p-4 pt-12 rounded-lg overflow-x-auto" {...props}>
        <code className={className}>{children}</code>
      </pre>
    </div>
  )
}
