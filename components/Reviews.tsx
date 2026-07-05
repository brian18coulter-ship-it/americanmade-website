export default function Reviews() {
  const reviews = [
    {
      name: "Apel S.",
      text: "Brian was very informative from start to finish. He had great communication with us, was very professional, and provided quality work. Honest and hardworking.",
    },
    {
      name: "Alyssa B.",
      text: "We used Brian to redo our basement. He was super fast, full of knowledge, and the work was high quality. He went above and beyond for our remodel.",
    },
    {
      name: "Erin L.",
      text: "Highly recommend American Made Construction. Communication was great, very dependable and reliable. Great attention to detail. We already have plans for Brian to come back!",
    },
    {
      name: "Facebook Review",
      text: "Loved the quality of work and clear schedule of demo and remodeling. Reasonable estimates that did not go over budget. Will definitely have them back for future projects.",
    },
  ];

  return (
    <section id="reviews" className="bg-zinc-950 px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-red-500">
            Customer Reviews
          </p>

          <h2 className="font-display mt-4 text-5xl md:text-6xl">
            100% Recommended
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Real feedback from homeowners who trusted American Made Construction.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl border border-white/10 bg-black p-8 transition duration-300 hover:-translate-y-2 hover:border-red-600"
            >
              <p className="text-3xl text-red-500">★★★★★</p>

              <p className="mt-6 leading-8 text-gray-300">
                "{review.text}"
              </p>

              <p className="mt-6 font-display text-2xl text-white">
                - {review.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.facebook.com/profile.php?id=100087112657249"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-red-600 px-10 py-4 font-semibold transition hover:bg-red-700"
          >
            Read More Reviews on Facebook
          </a>
        </div>
      </div>
    </section>
  );
}