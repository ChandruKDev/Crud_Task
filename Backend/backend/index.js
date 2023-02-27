const express = require('express')
const app = express();
const mongoose = require('mongoose')
const exampleRouter = require('./routes/example.routes')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(cors())
app.use(bodyParser.json())

app.use('/example',exampleRouter)

mongoose.set('strictQuery',true);
mongoose.connect('mongodb://127.0.0.1:27017/test',{useNewUrlParser: true})
.then((res)=>{console.log(`mongoDb connected SuccessFully to ${res.connection.host}`)})
.catch((err)=>{console.log(`mongodb connection failure ${err}`)})

const PORT = process.env.PORT || 2525;

app.listen(PORT,()=>{
    console.log(`Server is listening to ${PORT}`)
})