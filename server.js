const express = require('express');
const hotelRouter = require('./routes/hotel.router');
const app = express()
const port = 8000

app.use(express.json())

app.use('/api/hotels', hotelRouter)

app.listen(port, () => {
    console.log(`Travel app listening at http://localhost:${port}`)
})
