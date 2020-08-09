var expresss = require('express')
var app = expresss()
var port = 3000
app.get('/health', (req, res) => {
    res.send('Welcome to sharecard backend APIs')
})

app.listen(port)
