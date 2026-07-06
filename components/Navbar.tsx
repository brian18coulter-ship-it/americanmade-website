import Image from "next/image";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-black/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:h-24 md:px-8">
        <a href="#home" className="flex items-center gap-3">
          <Image
            src="/images/logo.png"
            alt="American Made Construction"
            width={220}
            height={90}
            priority
            className="h-auto w-32 md:w-56"
          />
        </a>

        <nav className="hidden items-center gap-8 text-sm font-bold uppercase tracking-widest text-white md:flex">
          <a href="#services" className="hover:text-red-500">Services</a>
          <a href="#projects" className="hover:text-red-500">Projects</a>
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#contact" className="hover:text-red-500">Contact</a>
        </nav>
      </div>
    </header>
  );
}