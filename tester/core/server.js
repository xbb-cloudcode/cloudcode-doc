const express = require('express')
const fs = require('fs')
const cors = require('cors')
const app = express()
const port = 3366

app.use(cors())

app.get('/code', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`code file server is listening at http://localhost:${port}`)
})
