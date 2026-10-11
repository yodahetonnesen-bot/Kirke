import Link from "next/link";

export default function IkkeFunnet() {
  return (
    <div className="mx-auto max-w-xl px-4 py-24 text-center sm:px-6">
      <h1 className="font-serif text-4xl">Fant ikke siden</h1>
      <p lang="am" className="mt-2 text-xl text-dempet">ገጹ አልተገኘም</p>
      <Link href="/" className="mt-10 inline-block text-rubrikk hover:underline">
        Til forsiden · <span lang="am">ወደ ዋናው ገጽ</span>
      </Link>
    </div>
  );
}
