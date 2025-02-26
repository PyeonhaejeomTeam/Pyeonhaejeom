import { personalities } from "@/assets/data/personalityData";

export async function GET() {
  return Response.json({ personalities });
}
