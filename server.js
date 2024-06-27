const express = require('express');
const mongoose = require('mongoose')

const cors = require('cors')
const hotelRouter = require('./routes/hotel.router');
const categoryRouter = require('./routes/category.router')
const singleHotelRouter = require('./routes/singlehotel.router')
const authRouter = require('./routes/auth.router')
const hotelDataAddedToDB = require('./routes/dataimport.router')
const categoryDataAddedToDB = require('./routes/categoryimport.router')
const connectDB = require('./config/dbconfig');


const app = express()
const port = 8000

app.use(express.json())

app.use(cors())

connectDB()

app.use('/api/hoteldata', hotelDataAddedToDB)
app.use('/api/categorydata', categoryDataAddedToDB)
app.use('/api/hotels', hotelRouter)
app.use('/api/singlehotel', singleHotelRouter)
app.use('/api/categories', categoryRouter)
app.use('/api/auth', authRouter)


mongoose.connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
    app.listen(port, () => {
        console.log(`Travel app listening at http://localhost:${port}`)
    })
})

