import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  FacebookIcon,
  TwitterIcon,
  LineIcon,
} from "react-share";

const ShareButtons = ({ testResult }) => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";
  const title = testResult?.title
    ? `편의점 음식 테스트 결과: ${testResult.title}`
    : "편의점 음식 테스트";

  return (
    <div className="share-container">
      <h3>친구에게 공유하기</h3>
      <div className="social-buttons">
        <FacebookShareButton url={shareUrl} quote={title}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton url={shareUrl} title={title}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <LineShareButton url={shareUrl} title={title}>
          <LineIcon size={32} round />
        </LineShareButton>
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

        .social-buttons > :global(button) {
          cursor: pointer;
          transition: transform 0.2s;
        }

        .social-buttons > :global(button:hover) {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default ShareButtons;
