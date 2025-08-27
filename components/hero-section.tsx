interface HeroSectionProps {
  title: string
  subtitle: string
  backgroundImage: string
  overlay?: boolean
}

export function HeroSection({ title, subtitle, backgroundImage, overlay = true }: HeroSectionProps) {
  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      {overlay && <div className="absolute inset-0 bg-black/40" />}
      <div className="relative h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white/90 mb-4 drop-shadow-lg">{title}</h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/70 drop-shadow-md">{subtitle}</p>
        </div>
      </div>
    </div>
  )
}
