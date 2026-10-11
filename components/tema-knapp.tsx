"use client";

// Bytter mellom lys og mørk visning. Valget huskes i nettleseren.
export function TemaKnapp() {
  function bytt() {
    const mork = document.documentElement.classList.toggle("dark");
    try {
      localStorage.setItem("tema", mork ? "mork" : "lys");
    } catch {}
  }
  return (
    <button
      type="button"
      onClick={bytt}
      className="grid size-9 place-items-center rounded-full text-dempet transition-colors hover:bg-linje/60 hover:text-blekk"
      aria-label="Bytt mellom lys og mørk visning"
      title="Lys / mørk"
    >
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="size-[18px]" aria-hidden="true">
        <path d="M12 3a9 9 0 1 0 9 9 7 7 0 0 1-9-9Z" />
      </svg>
    </button>
  );
}
