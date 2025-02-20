'use client'

import { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { menuItems } from '@/data/menuData'

// 클라이언트 사이드에서만 렌더링되도록 dynamic import 사용
const Roulette = dynamic(() => import('@/components/Roulette'), {
  ssr: false,
  loading: () => <p>Loading...</p>
})

const RoulettePage = () => {
  const [selectedMenu, setSelectedMenu] = useState(null)

  const handleRouletteComplete = (item) => {
    setSelectedMenu(item)
  }

  return (
    <div className="roulette-page">
      <div className="roulette-header">
        <h1 className="roulette-title">오늘 뭐 먹지?</h1>
        <p className="roulette-description">
          결정장애 타파! 랜덤 메뉴 추천
        </p>
      </div>

      <div className="roulette-main">
        <Roulette 
          items={menuItems}
          onComplete={handleRouletteComplete}
        />

        {selectedMenu && (
          <div className="selected-menu fade-in">
            <h2 className="selected-menu-title">
              추천 메뉴
            </h2>
            <div className="selected-menu-card">
              <h3 className="selected-menu-name">
                {selectedMenu.text}
              </h3>
              <div className="selected-menu-info">
                <span className="menu-category">{selectedMenu.category}</span>
                <span className="menu-price">{selectedMenu.price}</span>
                {selectedMenu.spicyLevel && (
                  <span className="menu-spicy">{selectedMenu.spicyLevel}</span>
                )}
              </div>
              <p className="selected-menu-description">
                {selectedMenu.description}
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="roulette-actions">
        <Link href="/" className="button button-secondary">
          홈으로 가기
        </Link>
      </div>
    </div>
  )
}

export default RoulettePage 