import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncErrors";
import OrderModel from "../models/order.model";

//create new order
export const newOrder = CatchAsyncError(async(req:Request,res:Response,next:NextFunction,data:any)=>{
    const order= await OrderModel.create(data)
})

//get all orders
export const getAllOrdersService  = async(res:Response)=>{
    const orders = await OrderModel.find().sort({createdAt:-1})

    res.status(201).json({
        success: true,
        orders,
    })
}