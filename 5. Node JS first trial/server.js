const http = require('http')
const fs = require('fs')
const isOdd = require('is-odd') // Cara menggunakan external package

const host = "localhost"
const port = 3000

const app = http.createServer((req, res) => {
	const url = req.url

	switch(url) {
		case "/":
			fs.readFile('form.html', (err, html) => {
				if (err) throw err;
				res.writeHeader(200, {"Content-Type": "text/html"})
				res.write(html)
				res.end()
			})
			break;
		case "/abc":
			res.end(`Youw brow... ${url}, 1 adalah bilang ganjil? ${isOdd(0)}`)
			break;
		case "/now":
			res.statusCode = 204
			res.end(new Date().toString())
			break;
		default:
			res.setHeader('Content-Type', 'text/plain')
			res.statusCode = 404
			res.end('salah alamat bwang...')
	}
})

app.listen(port, host, () => console.log(`The server is running on port ${port}`))