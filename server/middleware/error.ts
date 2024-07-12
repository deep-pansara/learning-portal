import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../utils/ErrorHandler";

export const ErrorMiddleware = (err:any, req:Request, res:Response, next:NextFunction)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message ||  "Internal Server Error";

    //wrong mongoDB id error
    if(err.name === "CastError"){
        const message = `Resource not found. Invalid : ${err.path}`
        err=new ErrorHandler(message,400)
    }

    //Duplicate Key error
    if(err.code === 11000){
        const message = `Duplicate field value entered. Please use unique value for : ${Object.keys(err.keyValue)}`
        err=new ErrorHandler(message,400)
    }

    //wrong jwt error 
    if( err.name === "JsonWebTokenError"){
        const message = "JSON web Token is invalid, try again"
        err=new ErrorHandler(message,400)
    }

    //JWT expire
    if(err.name === "TokenExpiredError"){
        const message = "JSON web Token has expired, please login again"
        err=new ErrorHandler(message,400)
    }

    res.status(err.statusCode).json({
        success: false,
        message: err.message 
    })
}