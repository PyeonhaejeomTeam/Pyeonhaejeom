import { rouletteItems } from "@/app/assets/data/roulette";

export async function GET() {
  return Response.json({ items: rouletteItems });
}
