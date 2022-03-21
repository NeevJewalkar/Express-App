const express = require('express')
let app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/exclamation/:word', (req, res) => {
    res.send(req.params.word + '!')
})

app.listen(8080, () => {
    console.log('app running on port 8080')
})