import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 px-6 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-display text-3xl">American Made Construction</h3>
          <p className="mt-4 text-gray-400">
            Custom decks, outdoor living spaces, home additions, and remodeling
            built with quality craftsmanship.
          </p>
        </div>

        <div>
          <h4 className="font-semibold text-red-500">Contact</h4>
          <p className="mt-4 text-gray-400">(314) 406-2341</p>
          <p className="mt-2 text-gray-400">americanmadeconstruct@gmail.com</p>
          <p className="mt-2 text-gray-400">Farmington, Missouri</p>
        </div>

        <div>
          <h4 className="font-semibold text-red-500">Quick Links</h4>
          <div className="mt-4 flex flex-col gap-2 text-gray-400">
            <Link href="/#home">Home</Link>
            <Link href="/our-work">Our Work</Link>
            <Link href="/#services">Services</Link>
            <Link href="/#contact">Get a Free Estimate</Link>
          </div>
        </div>

        <div>
          <h4 className="font-semibold text-red-500">Service Area</h4>
          <p className="mt-4 text-gray-400">
            Serving homeowners within approximately 40 miles of Festus, MO.
          </p>

          <a
            href="https://www.facebook.com/profile.php?id=100087112657249"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-block rounded-full border border-red-600 px-6 py-3 font-semibold transition hover:bg-red-600"
          >
            Facebook Reviews
          </a>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-gray-500">
        © 2026 American Made Construction. All rights reserved.
      </div>
    </footer>
  );
}