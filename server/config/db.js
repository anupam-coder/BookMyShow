const mongoose = require("mongoose");

const dbURL = process.env.DB_URL
console.log(dbURL);

const connectDB = async ()=>{
    try{
        await mongoose.connect(dbURL)
        console.log("Connected to MongoDB");
    }catch(err){
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;