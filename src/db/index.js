import mongoose from "mongoose";
import { DB_Name } from "../constant.js";

const connectDB =async()=>{
try {
    const connectioninstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`);
    console.log(`\n mongodb connected !! Host ${connectioninstance.connection.host}`);  
} 
catch (error) {
    console.log("mongodb error",error);
    process.exit(1);
}
}

export default connectDB;