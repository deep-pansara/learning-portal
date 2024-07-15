import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import OrderModel from "../models/order.model";

//create new order
export const newOrder = CatchAsyncError(async(req:Request,res:Response,next:NextFunction,data:any)=>{
    const order= await OrderModel.create(data)

 

    
})