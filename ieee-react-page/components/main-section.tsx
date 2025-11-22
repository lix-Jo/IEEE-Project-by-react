import Image from "next/image"

export function MainSection() {
  return (
    <section className="text-center space-y-8">
      <div className="flex justify-center mb-6">
        <div className="relative w-32 h-32">
          <Image src="/images/ieee-1.png" alt="IEEE Logo" fill className="object-contain" />
        </div>
      </div>

      <div className="space-y-4">
        <h1 className="text-5xl md:text-6xl font-bold text-ieee-blue dark:text-white text-balance">Welcome to IEEE</h1>
        <p className="text-xl md:text-2xl text-ieee-blue/80 dark:text-gray-300 max-w-3xl mx-auto text-pretty">
          Advancing Technology for Humanity
        </p>
        <p className="text-lg text-ieee-blue/70 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
          The Institute of Electrical and Electronics Engineers is a professional association for electronic engineering
          and electrical engineering. Join us in shaping the future of technology through innovation, education, and
          collaboration.
        </p>
      </div>
    </section>
  )
}
