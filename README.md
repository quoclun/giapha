# Zalo Mini App - Gia phả dòng họ

## Hướng dẫn deploy

1. Cài Node.js (>=14) và npm.
2. Cài Vercel CLI:
```
npm i -g vercel
```
3. Deploy backend:
```
cd backend
vercel
```
- Lấy URL backend và thay vào `frontend/app.js`:
```js
fetch('https://<YOUR_BACKEND_URL>/members')
```

4. Deploy frontend (có thể tạo project Vercel riêng hoặc dùng same project):
```
cd frontend
vercel
```
5. Sau khi frontend và backend chạy, copy URL frontend để submit Zalo Mini App.
