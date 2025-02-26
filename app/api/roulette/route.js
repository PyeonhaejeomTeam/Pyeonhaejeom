import { rouletteItems } from "@/assets/data/rouletteData";

export async function GET() {
  return Response.json({ items: rouletteItems });
}
