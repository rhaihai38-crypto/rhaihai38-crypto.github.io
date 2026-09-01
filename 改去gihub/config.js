/**
 * 設定。index.html 和 firebase-messaging-sw.js 都會讀這一個檔案。
 */

/* Apps Script 的部署網址，結尾是 /exec */
var API_URL = "https://script.google.com/macros/s/AKfycby9PsrdXMTZYuLJoQ-FRjvUZH-Gkx97qxf8w9PQV4iQuf-jjx850ZbaWKhTMAlKMckO/exec";


/* ── 推播 ──
   前五個在 Firebase 主控台：設定 → 一般 → 你的應用程式
   VAPID_KEY 在：設定 → 雲端通訊 → 網頁推送憑證           ── */

var FIREBASE_CONFIG = {
  apiKey: "AIzaSyCRonepwy8oMNwboA6TH-GhIZX-RdJO_qE",
  authDomain: "ojliferecord.firebaseapp.com",
  projectId: "ojliferecord",
  messagingSenderId: "25154061980",
  appId: "1:25154061980:web:cd02d0a0fb515cef954f59"
};

var VAPID_KEY = "BOVrTPFwFcwdTWW5BwVwViWEn7JUfxuC2Lp8iE5p0aS4zNa1eBT4m3vxGGGfemndFbHKg4Vb2g7ahKuRcIE2qhU";
