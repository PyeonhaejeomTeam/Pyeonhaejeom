"use client";

import React, { useState, useEffect } from "react";

const ConvenienceFoodCommunity = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newPost.trim()) return;

    const post = {
      id: Date.now(),
      content: newPost,
      author: "사용자",
      date: new Date().toLocaleDateString(),
      likes: 0,
    };

    setPosts([post, ...posts]);
    setNewPost("");
  };

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) =>
        post.id === postId ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <div className="community-container">
      <h2>편의점 음식 이야기</h2>

      <form onSubmit={handleSubmit}>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="편의점 음식에 대한 의견을 공유해주세요!"
        />
        <button type="submit">게시하기</button>
      </form>

      <div className="posts-container">
        {posts.map((post) => (
          <div key={post.id} className="post">
            <p>{post.content}</p>
            <div className="post-info">
              <span>{post.author}</span>
              <span>{post.date}</span>
              <button onClick={() => handleLike(post.id)}>
                좋아요 {post.likes}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConvenienceFoodCommunity;
