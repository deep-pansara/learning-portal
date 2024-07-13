require("dotenv").config()
import {app} from "./app"
import dbConnect from "./utils/db"
import {v2 as cloudinary} from "cloudinary"

//cloudinary config

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
})

//create a server
app.listen(process.env.PORT,()=>{
    console.log("server is connected with port " + process.env.PORT )
    dbConnect()
})