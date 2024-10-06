import dotenv from "dotenv";
import connectDB from "./db/index.js";
import { app } from "./app.js";

dotenv.config({
    path: "./env"
});

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`server is running at port number ${process.env.PORT}`);
        })
    })
    .catch((error) => {
        console.log("mongo db connection falied", error);
    })

// import express from express;
// const app = express();
// (async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
//         app.on("error",(error)=>{
//             console.log("error",error);
//             throw error
//         })
//     } catch (error) {
//         console.log("Error:",error);
//         throw error
//     }
// })
