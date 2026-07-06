import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen w-full">
      <Image
        src="/images/hero.jpg"
        alt="American Made Construction outdoor living project"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 pt-52 pb-20 text-center">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-red-500 md:text-lg">
          Serving St. Francois County & Surrounding Counties
        </p>

        <div className="space-y-4">
          <h1 className="font-display text-6xl leading-[0.9] md:text-9xl">
            Custom
            <br />
            Outdoor
            <br />
            Living
          </h1>

          <p className="text-3xl font-light tracking-wide text-white/90">
            Built for Your Family
          </p>
        </div>

        <p className="mt-8 max-w-4xl text-lg leading-8 text-gray-200 md:text-xl md:leading-9">
          American Made Construction designs and builds beautiful decks, patio
          covers, home additions, and outdoor living spaces for homeowners
          throughout St. Francois County and surrounding counties.
        </p>

        <div className="mt-12 flex justify-center">
          <a
            href="#contact"
            className="rounded-full bg-red-600 px-12 py-5 text-lg font-semibold shadow-xl transition duration-300 hover:-translate-y-1 hover:bg-red-700"
          >
            Get a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}