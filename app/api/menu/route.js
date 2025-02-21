import { menuItems } from "@/data/menuData";

export async function GET() {
  try {
    return Response.json({ menuItems });
  } catch (error) {
    return Response.json(
      { error: "메뉴 데이터를 불러오는데 실패했습니다." },
      { status: 500 }
    );
  }
} 