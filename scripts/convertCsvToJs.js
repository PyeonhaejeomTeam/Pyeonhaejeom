const fs = require("fs");
const Papa = require("papaparse");
const path = require("path");

const stores = ["cu"]; // 현재는 CU 데이터만 처리

stores.forEach((store) => {
  const csvFilePath = path.join(
    __dirname,
    `../assets/data/storeData/${store}Data.csv`
  );

  // CSV 파일이 존재하는지 확인
  if (!fs.existsSync(csvFilePath)) {
    console.error(`CSV 파일을 찾을 수 없습니다: ${csvFilePath}`);
    return;
  }

  try {
    const csvContent = fs.readFileSync(csvFilePath, "utf-8");
    const results = Papa.parse(csvContent, {
      header: true,
      skipEmptyLines: true,
    });

    // 카테고리별로 데이터 구조화
    const categorizedData = results.data.reduce((acc, item) => {
      const category = item.카테고리;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(item);
      return acc;
    }, {});

    // JavaScript 코드 생성
    const jsContent = `// ${store.toUpperCase()} 데이터
export const ${store}Data = ${JSON.stringify(categorizedData, null, 2)};

// 카테고리 목록
export const ${store}Categories = ${JSON.stringify(
      Object.keys(categorizedData),
      null,
      2
    )};

// 전체 상품 목록
export const ${store}Products = ${JSON.stringify(results.data, null, 2)};
`;

    const jsFilePath = path.join(
      __dirname,
      `../assets/data/storeData/${store}Data.js`
    );

    // storeData 디렉토리가 없으면 생성
    if (!fs.existsSync(path.dirname(jsFilePath))) {
      fs.mkdirSync(path.dirname(jsFilePath), { recursive: true });
    }

    fs.writeFileSync(jsFilePath, jsContent);
    console.log(`${store} 데이터가 성공적으로 변환되었습니다.`);
  } catch (error) {
    console.error(`${store} 데이터 변환 중 오류 발생:`, error);
  }
});

// CSV 파일 읽기
const csvFilePath = path.join(__dirname, "../assets/data/storeData/cuData.csv");

// 파일이 존재하는지 확인
if (!fs.existsSync(csvFilePath)) {
  console.error("CSV 파일을 찾을 수 없습니다:", csvFilePath);
  process.exit(1);
}

const csvContent = fs.readFileSync(csvFilePath, "utf-8");

// CSV를 JSON으로 변환
const results = Papa.parse(csvContent, {
  header: true,
  skipEmptyLines: true,
});

// JavaScript 코드 생성
const jsContent = `// CU 데이터
export const cuData = ${JSON.stringify(results.data, null, 2)};
`;

// JavaScript 파일 저장
const jsFilePath = path.join(__dirname, "../assets/data/storeData/cuData.js");

// storeData 디렉토리가 없으면 생성
if (!fs.existsSync(path.dirname(jsFilePath))) {
  fs.mkdirSync(path.dirname(jsFilePath), { recursive: true });
}

fs.writeFileSync(jsFilePath, jsContent);
console.log("CSV가 성공적으로 JavaScript 파일로 변환되었습니다.");
