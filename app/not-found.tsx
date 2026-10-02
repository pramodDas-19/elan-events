import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-noir-950 text-white flex flex-col items-center justify-center p-6 text-center">
      <span className="font-sans text-xs uppercase tracking-[0.25em] text-gold-300 mb-3">
        404 · ATELIER DIRECTORY
      </span>
      <h1 className="font-serif text-5xl md:text-6xl text-white mb-4">
        Page Not Found
      </h1>
      <p className="font-sans text-stone-300 text-sm max-w-md mb-8">
        The celebration or chapter you are looking for does not exist or has been relocated within the atelier.
      </p>
      <Link
        href="/"
        className="px-8 py-3.5 rounded-full bg-burgundy-600 hover:bg-burgundy-700 text-white font-sans text-xs uppercase tracking-widest font-semibold transition-colors"
      >
        Return to Atelier
      </Link>
    </div>
  );
}
