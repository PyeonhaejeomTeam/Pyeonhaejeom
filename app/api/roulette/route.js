import { rouletteItems } from "@/data/roulette";

export async function GET() {
  return Response.json({ items: rouletteItems });
}
