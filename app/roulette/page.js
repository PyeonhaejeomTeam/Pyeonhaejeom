"use client";

import { useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { menuItems } from "@/data/menuData";

// 클라이언트 사이드에서만 렌더링되도록 dynamic import 사용
const Roulette = dynamic(() => import("@/components/Roulette"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

const RoulettePage = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);

  const handleRouletteComplete = (item) => {
    setSelectedMenu(item);
  };

  return (
    <div className="roulette_page">
      <div className="roulette_header">
        <h1 className="roulette_title">오늘 뭐 먹지?</h1>
        <p className="roulette_description">결정장애 타파! 랜덤 메뉴 추천</p>
      </div>

      <div className="roulette_main">
        <Roulette items={menuItems} onComplete={handleRouletteComplete} />

        {selectedMenu && (
          <div className="selected_menu fade_in">
            <h2 className="selected_menu_title">추천 메뉴</h2>
            <div className="selected_menu_card">
              <h3 className="selected_menu_name">{selectedMenu.text}</h3>
              <div className="selected_menu_info">
                <span className="menu_category">{selectedMenu.category}</span>
                <span className="menu_price">{selectedMenu.price}</span>
                {selectedMenu.spicyLevel && (
                  <span className="menu_spicy">{selectedMenu.spicyLevel}</span>
                )}
              </div>
              <p className="selected_menu_description">
                {selectedMenu.description}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="roulette_actions">
        <Link href="/" className="button button_secondary">
          홈으로 가기
        </Link>
      </div>
    </div>
  );
};

export default RoulettePage;
