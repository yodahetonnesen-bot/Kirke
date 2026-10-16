import type { Metadata } from "next";
import { Sok } from "@/components/sok";

export const metadata: Metadata = { title: "Søk · ፍለጋ" };

export default function SokSide() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20">
      <h1 className="font-serif text-4xl sm:text-5xl">Søk</h1>
      <p lang="am" className="mt-1 text-2xl text-dempet">
        ፍለጋ
      </p>
      <div className="mt-10">
        <Sok />
      </div>
    </div>
  );
}
