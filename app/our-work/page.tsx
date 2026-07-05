import Link from "next/link";

const projects = [
  "addition1.jpeg",
  "basement.jpeg",
  "basement1.jpeg",
  "deck1.jpeg",
  "deck2.jpeg",
  "deck3.jpeg",
  "deck4.png",
  "deck5.jpeg",
  "deck6.jpeg",
  "deck7.jpeg",
  "deck8.jpeg",
  "deck9.jpeg",
  "deck10.jpeg",
  "deck11.jpeg",
  "deck12.jpeg",
  "deck13.jpeg",
  "deck14.jpeg",
  "deck15.jpeg",
  "deck16.jpeg",
  "deck17.jpeg",
  "deck19.jpeg",
  "deck20.jpeg",
  "deck21.jpeg",
  "deck22.jpeg",
  "deck23.jpeg",
  "deck24.jpeg",
  "deck25.jpeg",
  "deck26.jpeg",
  "deck27.jpeg",
  "deck28.jpeg",
  "deck29.jpeg",
  "deck30.jpeg",
  "deck31.jpeg",
  "deck32.jpeg",
  "deck33.jpeg",
  "kitchen1.jpeg",
  "roof1.jpeg",
  "roof2.jpeg",
  "siding1.jpeg",
];

export default function OurWorkPage() {
  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <div className="mx-auto max-w-7xl">
        <Link href="/" className="text-sm font-semibold text-red-500">
          ← Back to Home
        </Link>

        <div className="mb-14 mt-10 text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-red-500">
            Our Work
          </p>

          <h1 className="font-display mt-4 text-5xl md:text-7xl">
            Project Gallery
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            Browse completed decks, additions, remodels, roofing, siding, and
            outdoor living projects from American Made Construction.
          </p>
        </div>

        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {projects.map((image) => (
            <div
              key={image}
              className="mb-6 break-inside-avoid overflow-hidden rounded-3xl border border-white/10 bg-zinc-950"
            >
              <img
                src={`/images/projects/${image}`}
                alt="American Made Construction project"
                className="h-auto w-full transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}