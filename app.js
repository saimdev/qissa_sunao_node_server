const express = require('express')
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
app.use(cookieParser());
app.use(bodyParser.json({ limit: '1000mb' }));
const dotenv = require('dotenv')
app.use(express.static(path.join(__dirname, 'images')));
app.use(express.json({ limit: '1000mb' }));
app.use(express.urlencoded({ limit: '1000mb', extended: true }));
dotenv.config({path:"./config.env"})
app.use(require('./router/auth'));

const DB = process.env.DB
const PORT = process.env.PORT
const User = require('./model/userSchema');
const Story = require('./model/storySchema');

require("./db/conn")

app.get('/ayesha',(req,res)=>{
    console.log("Server")
    res.send("Server started")
})


app.listen(PORT,()=>{
    console.log("Server is running on port",PORT)
})