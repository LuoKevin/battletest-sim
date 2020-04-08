const express = require('express');

const PORT = 8000;
const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const data = { 'GOOG': 'google', 'MSFT': 'microsoft' }

app.get('/stockdata', (req, res) => {
    return res.status(200).json({ 'ticker': req.body.ticker })
})

const server = app.listen(PORT, () => { console.log(`server listening on port: ${PORT}`) });

module.exports = server;