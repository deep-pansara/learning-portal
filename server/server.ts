import {app} from "./app"
import dbConnect from "./utils/db"
require("dotenv").config()

//create a server
app.listen(process.env.PORT,()=>{
    console.log("server is connected with port " + process.env.PORT )
    dbConnect()
})