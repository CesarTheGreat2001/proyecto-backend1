const express=require('express');
const mongoose=require('mongoose');
require("dotenv").config();
const cors=require('cors')
const herosRoutes =require('./routes/heros');
const app=express();
const port=process.env.PORT || 9000;
//middleware
app.use(express.json());
app.use('/api',herosRoutes);
app.use(cors({origin:"*"}));
//routes
//mongoose conection
mongoose.connect(process.env.MONGODB_URI)
.then(()=>console.log("connected to mongodb atlas"))
.catch((error)=>console.error(error))
app.listen(port,()=>console.log('listening to port 9000'));