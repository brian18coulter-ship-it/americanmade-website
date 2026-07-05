import Image from "next/image";
import Link from "next/link";

const featuredProjects = [
  "/images/projects/deck4.png",
  "/images/projects/deck5.jpeg",
  "/images/projects/roof1.jpeg",
  "/images/projects/deck7.jpeg",
  "/images/projects/deck17.jpeg",
];

export default function ProjectPreview() {
  return (
    <section className="bg-black px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-14 text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-red-500">
            Portfolio
          </p>

          <h2 className="font-display mt-4 text-4xl md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            Take a look at a few of our favorite completed projects. Browse our
            full portfolio to see more of the craftsmanship and attention to
            detail that goes into every build.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
          {featuredProjects.map((image) => (
            <Link
              key={image}
              href="/our-work"
              className="group overflow-hidden rounded-3xl border border-white/10"
            >
              <div className="relative h-96 overflow-hidden">
                <Image
                  src={image}
                  alt="American Made Construction project"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 20vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            href="/our-work"
            className="inline-block rounded-full bg-red-600 px-10 py-5 text-lg font-semibold text-white transition duration-300 hover:bg-red-700"
          >
            Browse All Projects
          </Link>
        </div>
      </div>
    </section>
  );
}