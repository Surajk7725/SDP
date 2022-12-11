const express=require("express");
const mongoose=require("mongoose");
const StudentModel=require("./models/EVM");
const app=express();
app.use(express.json());
mongoose.connect("mongodb+srv://SurajKumar:skpika2507@cluster0.slxnzuz.mongodb.net/PJM?retryWrites=true&w=majority",
{useNewUrlParser: true, },()=>console.log("Connected to DB"));
app.get('/gets',(req,res)=>res.json(StudData.find()))

app.post("/newstud",async(req,res)=>{
    const studName=req.body.studName;
    const studPass=req.body.studPass;
    const student=new StudentModel({name:studName,htno:studPass});
    try{
    await student.save();
    res.send("Inserted Values");}

catch(err){
    console.log(err);
}});
app.get("/display",async(req,res)=>{
    try{
        StudentModel.find({},(err,result)=>{
            if(err){
                res.send(err);
            }
            res.json(result);
        });
    }

catch(err){
    console.log(err);
}});

    app.listen(3001,()=>console.log("Server Ready."))