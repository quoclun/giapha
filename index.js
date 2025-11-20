const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.static('public'));

// API routes
app.get('/api', (req, res) => {
  res.json({ 
    message: 'API Gia Phả hoạt động tốt',
    version: '2.0.0',
    endpoints: ['/api/tree', '/api/members', '/']
  });
});

app.get('/api/tree', (req, res) => {
  const treeData = {
    "id": 1,
    "name": "Nguyễn Văn A (1950)",
    "title": "Thế hệ 1 - Ông Tổ",
    "generation": 1,
    "children": [
      {
        "id": 2,
        "name": "Nguyễn Văn B (1975)",
        "title": "Thế hệ 2 - Con trưởng",
        "generation": 2,
        "children": [
          {
            "id": 3,
            "name": "Nguyễn Thị C (2000)",
            "title": "Thế hệ 3 - Cháu nội",
            "generation": 3
          },
          {
            "id": 4,
            "name": "Nguyễn Văn D (2002)",
            "title": "Thế hệ 3 - Cháu nội", 
            "generation": 3
          }
        ]
      },
      {
        "id": 5,
        "name": "Nguyễn Thị E (1978)",
        "title": "Thế hệ 2 - Con thứ",
        "generation": 2,
        "children": [
          {
            "id": 6,
            "name": "Nguyễn Văn F (2005)",
            "title": "Thế hệ 3 - Cháu nội",
            "generation": 3
          }
        ]
      }
    ]
  };
  res.json(treeData);
});

app.get('/api/members', (req, res) => {
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

// Serve frontend
app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

module.exports = app;
