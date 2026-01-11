require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoutes = require('./routes/product-routes')
const app = express()

mongoose.connect(process.env.MONGO_URI).then(()=>console.log("mongodb connected successfully")).catch((e)=>console.log("error connecting mongodb"));

app.use(express.json());
app.use('/products',productRoutes)

app.listen(process.env.PORT,()=>{
    console.log(`Server is now at running at PORT ${process.env.PORT}`)
})
