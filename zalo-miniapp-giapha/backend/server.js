const express = require('express');
const cors = require('cors');
const data = require('./data.json');

const app = express();
app.use(cors());

app.get('/members', (req, res) => {
  res.json(data);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on port ${port}`));
