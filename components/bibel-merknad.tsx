// Små tekster om kildene til bøkene utenfor de 66, brukt i bibelleseren.

export function Merknad({ tekst }: { tekst: string }) {
  return <p className="mt-6 max-w-3xl text-sm leading-relaxed text-dempet">{tekst}</p>;
}

export function BareAmharisk() {
  return (
    <p className="mt-6 rounded-2xl border border-linje bg-flate/60 px-4 py-3 text-sm leading-relaxed text-dempet">
      Denne boka finnes ikke i fri norsk eller engelsk oversettelse ennå, så den vises bare på amharisk ·{" "}
      <span lang="am">ይህ መጽሐፍ እስካሁን በነጻ የኖርዌይኛ ወይም የእንግሊዝኛ ትርጉም ስለማይገኝ በአማርኛ ብቻ ቀርቧል።</span>
    </p>
  );
}

export function AmhariskKilde() {
  return (
    <>
      Amharisk tekst: <span lang="am">መጽሐፍ ቅዱስ ሰማንያ አሐዱ</span>, 2000 E.C.-utgaven, © Den etiopisk-ortodokse
      Tewahedo-kirken og Bibelselskapet i Etiopia. Digitalisert av EOTCOpenSource, CC BY-NC-ND 4.0. Teksten er
      gjengitt uendret.
    </>
  );
}
