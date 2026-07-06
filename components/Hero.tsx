export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-black px-4 pt-16 text-center text-white md:pt-24"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-45"
        style={{
          backgroundImage: "url('/images/hero.jpeg')",
        }}
      />

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 mx-auto max-w-4xl pt-6 md:pt-16">
        <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-red-500 md:text-sm md:tracking-[0.35em]">
          Serving St. Francois County & Surrounding Counties
        </p>

        <h1 className="mb-4 font-black uppercase leading-[0.9] tracking-wide text-[3.2rem] md:text-7xl lg:text-8xl">
          <span className="block">Custom</span>
          <span className="block whitespace-nowrap">Outdoor&nbsp;Living</span>
        </h1>

        <h2 className="mb-6 text-2xl font-light text-zinc-200 md:text-4xl">
          Built for Your Family
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-zinc-200 md:text-xl">
          American Made Construction designs and builds beautiful decks, patio
          covers, home additions, and outdoor living spaces for homeowners
          throughout St. Francois County and surrounding counties.
        </p>

        <a
          href="#contact"
          className="inline-block rounded-full bg-red-600 px-8 py-4 text-base font-bold text-white shadow-lg transition hover:bg-red-700 md:px-10 md:text-lg"
        >
          Get a Free Estimate
        </a>
      </div>
    </section>
  );
}