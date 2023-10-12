//express
const express = require('express');
const app = express();
const port = 3000;

//body-parser
const bodyParser = require('body-parser');

//cors
var cors = require('cors')
app.use(cors())

// body-parser 설정
app.use(bodyParser.json()); // JSON 형식의 body 파싱
app.use(bodyParser.urlencoded({ extended: true })); // URL-encoded 형식의 body 파싱

app.get('/', (req, res) => {
  res.send("Hello wodysl World");
})

//express
app.post('/jeonghun', (req, res) => {
  const text = req.body;
  console.log("정훈이가 나한테 보낸 메시지 : ",text.message);
  res.json({'data':'hello'})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});