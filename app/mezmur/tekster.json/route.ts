// Hele mezmurteksten til søket. Lastes først når noen søker.
import { MEZMURER } from "@/lib/mezmur";

export const dynamic = "force-static";

export function GET() {
  return Response.json(MEZMURER.map((m) => [m.nr, m.linjer.filter(Boolean).join(" ")]));
}
