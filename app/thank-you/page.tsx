import Link from "next/link";

export default function ThankYouPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="max-w-2xl rounded-3xl border border-white/10 bg-zinc-950 p-12 text-center shadow-2xl">
        <div className="mb-6 text-6xl">✅</div>

        <h1 className="font-display text-5xl">Thank You!</h1>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          We've received your project request and truly appreciate the opportunity
          to work with you.
        </p>

        <p className="mt-4 text-lg leading-8 text-gray-300">
          Someone from American Made Construction will review your information and
          contact you as soon as possible.
        </p>

        <Link
          href="/"
          className="mt-10 inline-block rounded-full bg-red-600 px-10 py-4 font-semibold transition hover:bg-red-700"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
}