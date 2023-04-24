import mongoose from 'mongoose'
import connectDB from './connection'
connectDB()
const userSchema = new mongoose.Schema({
  title: {
    type:String
  }
});

// const mySchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true
//   },
//   age: {
//     type: Number,
//     required: true
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true
//   }
// });
const User = mongoose.model('Test1', userSchema);
let userData= User.find({})
console.log(userData)
