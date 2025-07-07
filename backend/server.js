import express from 'express';
const app = express();
const PORT = 5000;

app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from Express backend!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
