import express from 'npm:express@4.18.2';
import { load } from 'https://deno.land/std/dotenv/mod.ts';

const env = await load();
const app = express();

app.use(express.json());
app.use(express.static('frontend'));

// API cơ bản
app.get('/', (_req, res) => {
  res.json({ 
    message: 'API Gia Phả Family Tree',
    version: '1.0.0',
    endpoints: ['/api/tree', '/api/members', '/family.html']
  });
});

// API dữ liệu cây gia phả
app.get('/api/tree', (_req, res) => {
  const treeData = {
    "id": 1,
    "name": "Ông Tổ Nguyễn Văn A",
    "birthYear": "1950",
    "generation": 1,
    "children": [
      {
        "id": 2,
        "name": "Nguyễn Văn B",
        "birthYear": "1975", 
        "generation": 2,
        "children": [
          {
            "id": 3,
            "name": "Nguyễn Thị C",
            "birthYear": "2000",
            "generation": 3
          },
          {
            "id": 4, 
            "name": "Nguyễn Văn D",
            "birthYear": "2002",
            "generation": 3
          }
        ]
      },
      {
        "id": 5,
        "name": "Nguyễn Thị E",
        "birthYear": "1978",
        "generation": 2,
        "children": [
          {
            "id": 6,
            "name": "Nguyễn Văn F",
            "birthYear": "2005",
            "generation": 3
          }
        ]
      }
    ]
  };
  res.json(treeData);
});

// API danh sách thành viên
app.get('/api/members', (_req, res) => {
  const members = [
    { id: 1, name: 'Nguyễn Văn A', generation: 1, birthYear: 1950, position: 'Ông Tổ' },
    { id: 2, name: 'Nguyễn Văn B', generation: 2, birthYear: 1975, position: 'Con trưởng' },
    { id: 3, name: 'Nguyễn Thị C', generation: 3, birthYear: 2000, position: 'Cháu nội' },
    { id: 4, name: 'Nguyễn Văn D', generation: 3, birthYear: 2002, position: 'Cháu nội' },
    { id: 5, name: 'Nguyễn Thị E', generation: 2, birthYear: 1978, position: 'Con thứ' },
    { id: 6, name: 'Nguyễn Văn F', generation: 3, birthYear: 2005, position: 'Cháu nội' }
  ];
  res.json(members);
});

const port = env.PORT || Deno.env.get('PORT') || 3000;
app.listen(port, () => {
  console.log(`🌳 Server Gia Phả đang chạy: http://localhost:${port}`);
  console.log(`📊 Xem gia phả: http://localhost:${port}/family.html`);
});
