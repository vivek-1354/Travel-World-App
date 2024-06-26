const express = require('express');
const mongoose = require('mongoose')

const cors = require('cors')
const hotelRouter = require('./routes/hotel.router');
const connectDB = require('./config/dbconfig');


const app = express()
const port = 8000

app.use(express.json())

app.use(cors())

connectDB()

app.use('/api/hotels', hotelRouter)


mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
    app.listen(port, () => {
        console.log(`Travel app listening at http://localhost:${port}`)
    })
})

