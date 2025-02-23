import { cuData } from '@/assets/data/storeData/cuData';
import { storeInfo } from '@/assets/data/storeData/storeInfo';
// import { gsData } from '@/assets/data/storeData/gsData';
// import { sevenData } from '@/assets/data/storeData/sevenData';
// import { miniData } from '@/assets/data/storeData/miniData';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const store = searchParams.get('store') || 'cu';

  try {
    const storeDataMap = {
      cu: cuData,
      // gs25: gsData,
      // seven: sevenData,
      // mini: miniData
    };

    const data = storeDataMap[store];
    
    if (!data) {
      return Response.json({ error: '해당 편의점 데이터를 찾을 수 없습니다.' }, { status: 404 });
    }

    return Response.json(data);
  } catch (error) {
    console.error('데이터를 불러오는데 실패했습니다:', error);
    return Response.json({ error: '데이터를 불러오는데 실패했습니다' }, { status: 500 });
  }
} 