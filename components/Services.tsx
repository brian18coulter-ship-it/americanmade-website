export default function Services() {
  const services = [
    {
      title: "Custom Decks",
      description:
        "Beautiful composite and wood decks built for entertaining, relaxing, and enjoying the outdoors.",
    },
    {
      title: "Patio Covers",
      description:
        "Protect your outdoor space with custom patio covers designed for year-round comfort.",
    },
    {
      title: "Home Additions",
      description:
        "Expand your home with seamless additions that blend perfectly with your existing house.",
    },
    {
      title: "Screened Porches",
      description:
        "Enjoy fresh air without the bugs in a custom screened porch built to fit your home.",
    },
    {
      title: "Exterior Remodeling",
      description:
        "Update your home's exterior with quality craftsmanship and attention to every detail.",
    },
    {
      title: "Custom Carpentry",
      description:
        "From decorative finishes to one-of-a-kind projects, we build custom solutions that last.",
    },
  ];

  return (
    <section id="services" className="bg-black px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <p className="text-red-500 font-semibold uppercase tracking-[0.35em]">
            Our Services
          </p>

          <h2 className="font-display mt-4 text-5xl md:text-6xl">
            Built Around Your Home
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-400">
            Every project is designed around your family's needs using quality
            materials and craftsmanship you can count on.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-zinc-900 p-10 transition duration-300 hover:-translate-y-2 hover:border-red-600 hover:shadow-2xl"
            >
              <h3 className="font-display text-3xl text-white">
                {service.title}
              </h3>

              <div className="mt-4 h-1 w-16 rounded-full bg-red-600"></div>

              <p className="mt-6 leading-8 text-gray-400">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}