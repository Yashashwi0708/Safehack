require('dotenv').config()
const express = require('express')
const app = express()
const PORT = 5001
const webrequest = require('./routes/req')
const connectDB = require('./db/connect')

app.use(express.json())

app.use('/api/v1/result', webrequest)
// app.use('/',(req,res)=>{res.send('HEeloo')})

const start = async()=>{
    try {
        console.log(process.env.mongo_uri);
        await connectDB(process.env.mongo_uri)
        app.listen(PORT, console.log(`Server is listening to ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}
start()