import React from "react";

const ShareButtons = ({ testResult }) => {
  const shareUrl = "https://pyeonhaejeom.netlify.app";
  const title = `나의 편의점 성향은 ${testResult.title}! | 편해점`;

  const handleTwitterShare = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      title
    )}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, "_blank");
  };

  const handleFacebookShare = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      shareUrl
    )}&quote=${encodeURIComponent(title)}`;
    window.open(url, "_blank");
  };

  const handleLineShare = () => {
    const url = `https://social-plugins.line.me/lineit/share?url=${encodeURIComponent(
      shareUrl
    )}&text=${encodeURIComponent(title)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="share-container">
      <h3>결과 공유하기</h3>
      <div className="social-buttons">
        <button onClick={handleTwitterShare} aria-label="Twitter에 공유하기">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="#1DA1F2">
            <path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm11.952 19.2c.012.262.012.525.012.787 0 8.025-6.107 17.263-17.262 17.263-3.431 0-6.621-.994-9.302-2.714.487.056.962.075 1.462.075 2.831 0 5.438-.956 7.514-2.576-2.65-.05-4.882-1.794-5.651-4.188a6.116 6.116 0 0 0 2.754-.106c-2.769-.563-4.85-2.994-4.85-5.926v-.075c.806.45 1.738.725 2.726.756-1.626-1.088-2.695-2.938-2.695-5.038 0-1.113.3-2.15.825-3.038 2.994 3.675 7.482 6.088 12.52 6.338-.094-.45-.15-.919-.15-1.388 0-3.338 2.7-6.038 6.038-6.038 1.744 0 3.319.731 4.425 1.913 1.369-.262 2.682-.756 3.844-1.444-.45 1.406-1.406 2.588-2.663 3.338 1.219-.131 2.4-.45 3.488-.906-.825 1.2-1.857 2.269-3.038 3.131z" />
          </svg>
        </button>

        <button onClick={handleFacebookShare} aria-label="Facebook에 공유하기">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="#1877F2">
            <path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm6.675 24.775h-4.35V37.2h-5.4V24.775h-3.375v-4.5h3.375v-3.375c0-3.825 1.575-6.075 6.075-6.075h4.35v4.5h-2.7c-1.8 0-1.95.675-1.95 1.875v3.075h4.5l-.525 4.5z" />
          </svg>
        </button>

        <button onClick={handleLineShare} aria-label="Line에 공유하기">
          <svg width="48" height="48" viewBox="0 0 48 48" fill="#00B900">
            <path d="M24 0C10.745 0 0 10.745 0 24s10.745 24 24 24 24-10.745 24-24S37.255 0 24 0zm11.25 25.5h-3.75V33h-1.5v-7.5h-3.75V24h9v1.5zm-10.5 6h-1.5v-6l-4.5 6.075h-1.5V22.5h1.5v6l4.5-6.075h1.5V31.5zm-9-4.5h-3.75V33h-1.5V22.5h5.25V27z" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .share-container {
          margin: 2rem 0;
          text-align: center;
        }

        .social-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          margin-top: 1rem;
        }

        .social-buttons button {
          cursor: pointer;
          transition: transform 0.2s;
          background: none;
          border: none;
          padding: 0;
        }

        .social-buttons button:hover {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default ShareButtons;
