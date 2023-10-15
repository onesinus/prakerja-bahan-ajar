require('dotenv').config()

const express = require('express')
const app = express()

const port = process.env.PORT || 8000

app.use(express.static('.'))

app.listen(port, () => console.log(`app is running on port ${port}`))