import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-md">
      <div className="mx-auto flex h-32 max-w-7xl items-center justify-between px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-5">
          <Image
            src="/images/logo.png"
            alt="American Made Construction Logo"
            width={160}
            height={160}
            priority
            className="object-contain"
          />

          <div>
            <h1 className="font-display text-4xl tracking-wide text-white lg:text-5xl">
              American Made Construction
            </h1>

            <p className="mt-2 text-sm uppercase tracking-[0.35em] text-red-500">
              Custom Outdoor Living
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-12 lg:flex">
          <Link
            href="/our-work"
            className="font-display text-2xl tracking-wide text-red-500 transition duration-300 hover:text-white"
          >
            Projects
          </Link>

          <Link
            href="/#services"
            className="font-display text-2xl tracking-wide text-red-500 transition duration-300 hover:text-white"
          >
            Services
          </Link>

          <Link
            href="/#about"
            className="font-display text-2xl tracking-wide text-red-500 transition duration-300 hover:text-white"
          >
            About
          </Link>

          <Link
            href="/#contact"
            className="font-display text-2xl tracking-wide text-red-500 transition duration-300 hover:text-white"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}