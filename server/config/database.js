const mongoose = require('mongoose')

const connectDB = async ()=>{
    try{
        const MONGO_URI="mongodb://mongo:27017/mydb";
        const conn = await mongoose.connect(MONGO_URI);
        console.log(`connected to mongodb database`);
    }
    catch(error){
        console.log(`Error in Mongodb ${error}`)
    }
}

module.exports = connectDB;