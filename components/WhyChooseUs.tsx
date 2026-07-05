const reasons = [
  {
    number: "01",
    title: "Quality Craftsmanship",
    text: "Every project is built with care, attention to detail, and materials chosen to last.",
  },
  {
    number: "02",
    title: "Honest Communication",
    text: "From the first estimate to the final walkthrough, you will always know what is happening.",
  },
  {
    number: "03",
    title: "Reliable Service",
    text: "We show up, respect your home, and keep the job moving the right way.",
  },
  {
    number: "04",
    title: "Built Around Your Family",
    text: "We create outdoor spaces designed for relaxing, entertaining, and making memories.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-zinc-950 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-red-500">
            Why Choose Us
          </p>

          <h2 className="font-display mt-4 text-5xl md:text-6xl">
            Built on Trust
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.number}
              className="rounded-3xl border border-white/10 bg-black p-8 transition duration-300 hover:-translate-y-2 hover:border-red-600"
            >
              <p className="font-display text-5xl text-red-500">
                {reason.number}
              </p>

              <h3 className="font-display mt-6 text-3xl">
                {reason.title}
              </h3>

              <p className="mt-5 leading-7 text-gray-400">
                {reason.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}