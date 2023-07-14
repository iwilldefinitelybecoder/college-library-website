import mongoose from "mongoose";

const recordSchema = new mongoose.Schema({
    bookname:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    image:{
        type:String
    }
  });
  
export const Record = mongoose.model('Record', recordSchema);

