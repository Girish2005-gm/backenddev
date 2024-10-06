import express from "express";
const app= express();

import cookieParser from "cookie-parser";
import cors from "cors";

app.use(cors({
    origin:process.env.CORS_ORIGIN,
    Credential:true
}))

app.use(express.json({limit:"16kb"}));//json data
app.use(express.urlencoded({extends:true,limit:"16kb"}))//url data
app.use(express.static,"public");
app.use(cookieParser());

export {app};