const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/', (req, res) => {
  incomeData = req.body;

  outcomeData = incomeData.sort((a, b) => a - b);

  res.json(outcomeData);

  res.end();
});

app.listen(port, () => {
  console.log(`Приложение запущено и слушает порт ${port}`);
});
