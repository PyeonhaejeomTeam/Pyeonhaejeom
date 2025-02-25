import { initializeApp, getApps } from "firebase/app";
import { getFirestore, enableIndexedDbPersistence } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyBdWKjIP2ZTvrmQKg5JWG9CU7k68wVQRhY",
  authDomain: "pyeonhaejeomteam.firebaseapp.com",
  projectId: "pyeonhaejeomteam",
  storageBucket: "pyeonhaejeomteam.firebasestorage.app",
  messagingSenderId: "474568690879",
  appId: "1:474568690879:web:98d9e0ad2d16170b8bca0a",
  measurementId: "G-SD3LS69TYC",
};

// Firebase 앱이 이미 초기화되었는지 확인
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

const db = getFirestore(app);

// 오프라인 지원 활성화
if (typeof window !== "undefined") {
  enableIndexedDbPersistence(db).catch((err) => {
    console.error("Firebase persistence error:", err);
  });
}

export const storage = getStorage(app);
export { db };
