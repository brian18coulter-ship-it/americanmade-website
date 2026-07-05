import Image from "next/image";

const projects = [
  "/images/projects/deck1.jpeg",
  "/images/projects/deck2.jpeg",
  "/images/projects/deck3.jpeg",
  "/images/projects/deck4.png",
  "/images/projects/deck5.jpeg",
];

export default function FeaturedProjects() {
  return (
    <section id="projects" className="bg-zinc-950 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[0.3em] text-red-500">
            Featured Projects
          </p>

          <h2 className="font-display mt-4 text-5xl md:text-6xl">
            Built with Pride
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-400">
            A look at recent custom decks, covered outdoor spaces, and outdoor
            living projects.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={project}
              className={`relative overflow-hidden rounded-3xl border border-white/10 bg-black ${
                index === 0 ? "aspect-[16/9] md:col-span-2" : "aspect-[4/3]"
              }`}
            >
              <Image
                src={project}
                alt={`American Made Construction project ${index + 1}`}
                fill
                sizes={
                  index === 0
                    ? "(max-width: 768px) 100vw, 100vw"
                    : "(max-width: 768px) 100vw, 50vw"
                }
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}