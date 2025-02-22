"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { db, storage } from "@/lib/firebase";
import {
  collection,
  addDoc,
  getDocs,
  orderBy,
  query,
  doc,
  updateDoc,
  increment,
  arrayUnion,
  onSnapshot,
  getDoc,
} from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";

const ConvenienceFoodCommunity = () => {
  const [posts, setPosts] = useState([]);
  const [nickname, setNickname] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("nickname") || "";
    }
    return "";
  });
  const [newPost, setNewPost] = useState({
    content: "",
    image: null,
    imagePreview: null,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [likedPosts, setLikedPosts] = useState(() => {
    if (typeof window !== "undefined") {
      return new Set(JSON.parse(localStorage.getItem("likedPosts") || "[]"));
    }
    return new Set();
  });

  // Firebase에서 게시글 불러오기
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postsList = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postsList);
    });

    return () => unsubscribe();
  }, []);

  // 게시글 작성 처리
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!newPost.content.trim()) return;
    if (!nickname.trim()) {
      alert("닉네임을 입력해주세요!");
      return;
    }

    setIsLoading(true);
    try {
      let imageUrl = null;
      if (newPost.image) {
        imageUrl = await uploadImage(newPost.image);
      }

      const postData = {
        content: newPost.content,
        author: nickname,
        createdAt: new Date().toISOString(),
        likes: 0,
        comments: [],
        image: imageUrl,
      };

      const docRef = await addDoc(collection(db, "posts"), postData);
      setPosts([{ id: docRef.id, ...postData }, ...posts]);
      setNewPost({ content: "", image: null, imagePreview: null });
    } catch (error) {
      console.error("게시글 작성 실패:", error);
      alert("게시글 작성에 실패했습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  // 좋아요 처리
  const handleLike = async (postId) => {
    if (likedPosts.has(postId)) return;

    try {
      const postRef = doc(db, "posts", postId);
      await updateDoc(postRef, {
        likes: increment(1),
      });

      const newLikedPosts = new Set(likedPosts);
      newLikedPosts.add(postId);
      setLikedPosts(newLikedPosts);
      localStorage.setItem("likedPosts", JSON.stringify([...newLikedPosts]));

      setPosts(
        posts.map((post) =>
          post.id === postId ? { ...post, likes: post.likes + 1 } : post
        )
      );
    } catch (error) {
      console.error("좋아요 처리 실패:", error);
    }
  };

  // 댓글 작성 처리
  const handleComment = async (postId, comment) => {
    if (!comment.trim() || !nickname.trim()) {
      if (!nickname.trim()) alert("닉네임을 입력해주세요!");
      return;
    }

    try {
      const postRef = doc(db, "posts", postId);
      const newComment = {
        id: Date.now(),
        content: comment,
        author: nickname,
        createdAt: new Date().toISOString(),
      };

      // 기존 댓글 가져오기
      const postDoc = await getDoc(postRef);
      const currentComments = postDoc.data().comments || [];

      // 새 댓글 추가
      await updateDoc(postRef, {
        comments: [...currentComments, newComment],
      });

      // 로컬 상태 업데이트
      setPosts(
        posts.map((post) =>
          post.id === postId
            ? { ...post, comments: [...post.comments, newComment] }
            : post
        )
      );
    } catch (error) {
      console.error("댓글 작성 실패:", error);
      alert("댓글 작성에 실패했습니다.");
    }
  };

  const uploadImage = async (file) => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("upload_preset", "pyeonhaejeom_image");
      formData.append("folder", "posts");
      formData.append("quality", "auto");
      formData.append("fetch_format", "auto");

      const response = await fetch(
        "https://api.cloudinary.com/v1_1/pyeonhaejeom/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error("이미지 업로드에 실패했습니다");
      }

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.error("이미지 업로드 실패:", error);
      return null;
    }
  };

  return (
    <div className="community-container max-w-4xl mx-auto p-4">
      <h2 className="text-4xl font-extrabold mb-8 text-center bg-gradient-to-r from-[#7c3aed] to-[#10b981] text-transparent bg-clip-text">
        편의점 음식 이야기 ✨
      </h2>

      {/* 게시글 작성 폼 */}
      <form
        onSubmit={handleSubmit}
        className="mb-8 bg-white rounded-lg p-6 shadow-md"
      >
        <div className="mb-4">
          <input
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
            placeholder="닉네임을 입력해주세요"
            className="w-full p-3 border rounded-lg mb-4"
            maxLength={10}
          />
          <p className="text-sm text-gray-500 mb-4">
            * 닉네임은 게시글과 댓글에 표시됩니다
          </p>
        </div>

        <textarea
          value={newPost.content}
          onChange={(e) => setNewPost({ ...newPost, content: e.target.value })}
          placeholder="편의점 음식에 대한 의견을 공유해주세요!"
          className="w-full p-4 border rounded-lg mb-4 min-h-[120px]"
        />

        {/* 이미지 업로드 */}
        <div className="mb-4">
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const file = e.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                  setNewPost({
                    ...newPost,
                    image: file,
                    imagePreview: reader.result,
                  });
                };
                reader.readAsDataURL(file);
              }
            }}
            className="hidden"
            id="image-upload"
          />
          <label
            htmlFor="image-upload"
            className="cursor-pointer inline-block px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200"
          >
            📸 사진 추가
          </label>
          {/* 이미지 미리보기 추가 */}
          {newPost.imagePreview && (
            <div className="mt-4 relative">
              <Image
                src={newPost.imagePreview}
                alt="미리보기"
                width={200}
                height={200}
                className="rounded-lg"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setNewPost({ ...newPost, image: null, imagePreview: null });
                }}
                className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6"
              >
                ×
              </button>
            </div>
          )}
        </div>

        <button
          type="submit"
          disabled={isLoading || (!newPost.content.trim() && !newPost.image)}
          className={`w-full py-3 rounded-lg text-white transition-colors
            ${
              isLoading || (!newPost.content.trim() && !newPost.image)
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[var(--primary-color)] hover:bg-[var(--primary-light)] cursor-pointer"
            }
          `}
        >
          {isLoading ? "게시 중..." : "게시하기"}
        </button>
      </form>

      {/* 게시글 목록 */}
      <div className="space-y-6">
        {posts.map((post) => (
          <div key={post.id} className="bg-white rounded-lg p-6 shadow-md">
            {/* 작성자 정보 */}
            <div className="flex items-center mb-4">
              <div>
                <div className="font-semibold">{post.author}</div>
                <div className="text-sm text-gray-500">
                  {new Date(post.createdAt).toLocaleDateString()}
                </div>
              </div>
            </div>

            {/* 게시글 내용 */}
            <p className="mb-4">{post.content}</p>

            {/* 게시글 이미지 */}
            {post.image && (
              <div className="mb-4">
                <Image
                  src={post.image}
                  alt="게시글 이미지"
                  width={500}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            )}

            {/* 좋아요 & 댓글 버튼 */}
            <div className="flex items-center gap-4 mb-4">
              <button
                onClick={() => handleLike(post.id)}
                disabled={likedPosts.has(post.id)}
                className={`flex items-center gap-2 ${
                  likedPosts.has(post.id)
                    ? "text-red-500 cursor-not-allowed"
                    : "text-gray-500 hover:text-primary-color"
                }`}
              >
                {likedPosts.has(post.id) ? "❤️" : "🤍"} {post.likes}
              </button>
              <button className="flex items-center gap-2 text-gray-500">
                💬 {post.comments.length}
              </button>
            </div>

            {/* 댓글 섹션 */}
            <div className="border-t pt-4">
              {post.comments.map((comment) => (
                <div
                  key={comment.id}
                  className="mb-3 bg-gray-50 p-3 rounded-lg"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-semibold">{comment.author}</span>
                    <span className="text-sm text-gray-500">
                      {new Date(comment.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="text-sm">{comment.content}</p>
                </div>
              ))}

              {/* 댓글 입력 폼 */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const comment = e.target.comment.value;
                  handleComment(post.id, comment);
                  e.target.comment.value = "";
                }}
                className="mt-4 flex gap-2"
              >
                <input
                  type="text"
                  name="comment"
                  placeholder="댓글을 입력하세요"
                  className="flex-1 px-4 py-2 border rounded-lg"
                />
                <button
                  type="submit"
                  className="px-4 py-2 text-white rounded-lg bg-[var(--primary-color)] hover:bg-[var(--primary-light)]"
                >
                  댓글 작성
                </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConvenienceFoodCommunity;
