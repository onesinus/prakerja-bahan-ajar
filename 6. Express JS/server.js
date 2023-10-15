const express = require('express')

const port = 3000
const app = express()

app.get('/', (req, res) => {
	res.send('OK')
})

app.get('/abc', (req, res) => {
	res.send('mantafff')
})

app.use(express.static('assets'))

app.listen(port, () => console.log(`Your server is running on port ${port}`))