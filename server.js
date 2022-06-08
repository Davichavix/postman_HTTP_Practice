const express = require('express');
const path = require('path');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false}))

app.get('/', (req, res) => {
  res.send('Hello From Express')
})

app.listen(8080, () => console.log(`Server started on 8080`))