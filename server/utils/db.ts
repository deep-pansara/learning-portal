require("dotenv").config()
 import mongoose from "mongoose";

 const dbUrl :string = process.env.DB_URL || "";


 const dbConnect = 
 async ()=>{
    try {
        await mongoose.connect(dbUrl).then((data:any)=>{
                console.log(`Database connected with: ${data.connection.host}`)
        })
        
    } catch (error:any) {
        console.log(error.message)
        setTimeout(dbConnect, 5000)
    }
 }

 export default dbConnect