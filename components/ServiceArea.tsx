export default function ServiceArea() {
  return (
    <section className="bg-zinc-950 px-6 py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="font-semibold uppercase tracking-[0.35em] text-red-500">
            Service Area
          </p>

          <h2 className="font-display mt-4 text-5xl md:text-6xl">
            Proudly Serving Southeast Missouri
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            American Made Construction serves homeowners within approximately
            40 miles of Festus, Missouri, including Farmington and surrounding
            Southeast Missouri communities.
          </p>

          <div className="mt-8 grid gap-3 text-gray-300 sm:grid-cols-2">
            <p>• Festus</p>
            <p>• Herculaneum</p>
             <p>• Pevely</p>
              <p>• Imperial</p>
               <p>• Barnhart</p>
                <p>• Arnold</p>
                 <p>• St. Louis County</p>
            <p>• Hillsboro</p>
            <p>• Farmington</p>
            <p>• Park Hills</p>
            <p>• Bonne Terre</p>
            <p>• De Soto</p>
            <p>• Ste. Genevieve</p>
          </div>

          <p className="mt-8 rounded-2xl border border-red-600/40 bg-red-600/10 p-5 text-gray-300">
            Don&apos;t see your town? Reach out — we&apos;re happy to travel for
            the right project.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black p-6 shadow-2xl">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-zinc-900">
            <iframe
              title="40 Mile Service Area from Festus Missouri"
              src="https://www.google.com/maps?q=Festus,+MO&z=9&output=embed"
              width="100%"
              height="100%"
              loading="lazy"
              className="absolute inset-0 h-full w-full border-0 opacity-70"
              allowFullScreen
            />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-[72%] w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-red-600/80 bg-red-600/10 shadow-[0_0_60px_rgba(220,38,38,0.45)]" />

            <div className="pointer-events-none absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600 shadow-[0_0_25px_rgba(220,38,38,0.9)]" />

            <div className="pointer-events-none absolute left-1/2 top-[52%] -translate-x-1/2 rounded-full bg-black/80 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
              Festus, MO
            </div>

            <div className="absolute bottom-5 left-5 rounded-2xl border border-white/10 bg-black/80 p-4 text-sm text-white backdrop-blur">
              <p className="font-semibold text-red-500">Primary Service Area</p>
              <p className="mt-1 text-gray-300">40-mile radius from Festus, MO</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}