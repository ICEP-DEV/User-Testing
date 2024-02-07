const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const connection = require('./config/config')

const app = express();

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

const port = process.envPORT || 3001
const person = 
app.use('/', require('./routes/person'))

app.use((req, res)=>{
    console.log("Endpoint")
    res.send("Endpoint")
})

app.listen(port,() =>{
    console.log(`Server started at port ${port}`)
})