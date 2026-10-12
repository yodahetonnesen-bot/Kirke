// Husker hvilke ordkort og spørsmål man kan, bare i nettleseren (localStorage), uten innlogging.
// Brukes med useSyncExternalStore: lesFremgang gir en streng som er stabil så lenge ingenting endres.

const NOKKEL = "fremgang-v1";
const lyttere = new Set<() => void>();

export function lesFremgang(): string {
  try {
    return localStorage.getItem(NOKKEL) ?? "[]";
  } catch {
    return "[]";
  }
}

export function abonnerFremgang(endret: () => void) {
  lyttere.add(endret);
  window.addEventListener("storage", endret);
  return () => {
    lyttere.delete(endret);
    window.removeEventListener("storage", endret);
  };
}

export function tolkFremgang(ra: string): Set<string> {
  try {
    const liste: unknown = JSON.parse(ra);
    return new Set(Array.isArray(liste) ? liste.filter((x): x is string => typeof x === "string") : []);
  } catch {
    return new Set();
  }
}

function lagre(kjente: Set<string>) {
  try {
    if (kjente.size === 0) localStorage.removeItem(NOKKEL);
    else localStorage.setItem(NOKKEL, JSON.stringify([...kjente]));
  } catch {}
  lyttere.forEach((f) => f());
}

export function settKjent(id: string, kjent: boolean) {
  const kjente = tolkFremgang(lesFremgang());
  if (kjent) kjente.add(id);
  else kjente.delete(id);
  lagre(kjente);
}

export function glemFremgang(ider: string[]) {
  const kjente = tolkFremgang(lesFremgang());
  ider.forEach((id) => kjente.delete(id));
  lagre(kjente);
}
