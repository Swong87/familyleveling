interface WaveDividerProps {
  fillColor: string
  position?: 'top' | 'bottom'
  flip?: boolean
}

export default function WaveDivider({ fillColor, position = 'bottom', flip = false }: WaveDividerProps) {
  // Simple sine wave - one up and one down across the page
  // Start at middle, go up to peak, back to middle, down to trough, back to middle
  const wavePath = flip
    ? "M0,60 Q360,20 720,60 T1440,60 L1440,80 L0,80 Z"
    : "M0,40 Q360,0 720,40 T1440,40 L1440,80 L0,80 Z"

  return (
    <div className={`absolute ${position === 'top' ? 'top-0' : 'bottom-0'} left-0 right-0 w-full h-20 overflow-hidden pointer-events-none`}>
      <svg
        viewBox="0 0 1440 80"
        className={`w-full h-full ${position === 'top' ? 'transform rotate-180' : ''}`}
        preserveAspectRatio="none"
        style={{ display: 'block' }}
      >
        <path
          d={wavePath}
          fill={fillColor}
        />
      </svg>
    </div>
  )
}

