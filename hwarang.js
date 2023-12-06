//express
const express = require('express');
const app = express();
const port = 3000;

//cors
var cors = require('cors')
app.use(cors())

app.get('/', (req, res) => {
  res.send("Hello wodysl World");
})

//express
app.get('/sound/:name', (req, res) => {
  const {name} = req.params;
  console.log(name);

  if(name == "dog"){
    res.json({'sound' : '멍멍'});
  }
  else if(name == "pig"){
    res.json({'sound' : '꿀꿀'});
  }
  else{
    res.json({'sound' : '알 수 없음'});
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});