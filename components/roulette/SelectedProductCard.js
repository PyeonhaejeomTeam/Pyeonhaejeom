import Image from "next/image";

export default function SelectedProductCard({ product }) {
  return (
    <div className="mt-16 w-full max-w-md bg-white rounded-3xl shadow-lg p-8 relative z-10">
      <h2 className="text-2xl font-bold text-center text-[#6366F1] mb-6">
        선택된 메뉴
      </h2>
      <div className="flex flex-col items-center">
        <div className="relative w-80 h-80 mb-6 bg-white overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src={product.이미지URL}
              alt={product.상품명}
              fill
              className="object-contain"
              sizes="(max-width: 320px) 100vw, 320px"
              priority
              unoptimized
            />
          </div>
        </div>
        <h3 className="text-xl font-bold mb-3 text-center px-4 w-full">
          {product.상품명}
        </h3>
        <p className="text-[#6366F1] text-2xl font-bold">{product.가격}</p>
      </div>
    </div>
  );
}
