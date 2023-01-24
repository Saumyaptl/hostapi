require("dotenv").config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5001;
const products_route = require("./routes/products");
const connectdb = require("./db/connect");
app.get("/",(req,res)=>{
    res.send("Hi I am Saumya Patel");

});
app.use("/api/products", products_route);

const start = async () =>{
    try{
     await connectdb(process.env.MONGODB_URL);
    app.listen(PORT, () => {
           console.log(`${PORT}server is running`);
         })

    }catch(error){
        console.log(error);
    }
 };
  start();