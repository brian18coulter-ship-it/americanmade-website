export default function Contact() {
  return (
    <section id="contact" className="bg-black px-6 py-28">
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <p className="font-semibold uppercase tracking-[0.35em] text-red-500">
            Project Inquiry
          </p>

          <h2 className="font-display mt-4 text-5xl md:text-6xl">
            Request a Free Estimate
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Tell us about your project and we’ll get back to you as soon as
            possible.
          </p>
        </div>

        <form
          action="https://formsubmit.co/americanmadeconstruct@gmail.com"
          method="POST"
          className="rounded-3xl border border-white/10 bg-zinc-950 p-8"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Project Inquiry - American Made Construction"
          />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_template" value="table" />
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/thank-you"
          />
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for contacting American Made Construction. We received your project request and will be in touch as soon as possible."
          />

          <div className="grid gap-6 md:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-red-600"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              required
              className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-red-600"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              required
              className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-red-600 md:col-span-2"
            />

            <input
              type="text"
              name="project_address"
              placeholder="Project Address / Town"
              className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-red-600 md:col-span-2"
            />

            <select
              name="project_type"
              required
              className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-red-600"
            >
              <option value="">Project Type</option>
              <option value="Deck">Deck</option>
              <option value="Patio">Patio</option>
              <option value="Pergola">Pergola</option>
              <option value="Outdoor Living Space">
                Outdoor Living Space
              </option>
              <option value="Remodel">Remodel</option>
              <option value="Other">Other</option>
            </select>

            <select
              name="timeline"
              required
              className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none focus:border-red-600"
            >
              <option value="">Desired Timeline</option>
              <option value="As soon as possible">As soon as possible</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3-6 months">3-6 months</option>
              <option value="Just planning ahead">Just planning ahead</option>
            </select>

            <textarea
              name="project_description"
              placeholder="Tell us about your project"
              required
              rows={6}
              className="rounded-xl border border-white/10 bg-black px-5 py-4 text-white outline-none placeholder:text-gray-500 focus:border-red-600 md:col-span-2"
            />
          </div>

          <button
            type="submit"
            className="mt-8 w-full rounded-full bg-red-600 px-10 py-4 font-semibold text-white transition hover:bg-red-700"
          >
            Request a Free Estimate
          </button>
        </form>
      </div>
    </section>
  );
}