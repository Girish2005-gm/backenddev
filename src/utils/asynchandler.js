const asynchandler=(reqHandler)=>{
    (req,res,next)=>{
        Promise.resolve(reqHandler(req,res,next)).catch((err)=>next(err))
    }
}



// const asynchandler =()=>
// const asynchandler =(fun)=>()=>
// const asynchandler =(fun)=>async()=>

// const asynchandler =(fn)=>async(req,res,next)=>{
// try {
//    await fn(req,res,next) 
// } catch (error) {
//     res.status(error.code ||500).json({
//         success:false,
//         massage:error.massage
//     });
// }
// }