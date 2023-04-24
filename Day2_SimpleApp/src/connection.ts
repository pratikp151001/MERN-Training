
import mongoose from 'mongoose'

async function GetDBData() {
  mongoose.connect("mongodb://127.0.0.1:27017/Test")
    .then(() => { console.log("Connection successfull....") })
    .catch((err) => console.log(err));


  const userSchema = new mongoose.Schema({
    name: String
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
  
  const User = mongoose.model('practice', userSchema);
  let userData = await User.find({})
  return userData;
 // console.log(userData)
}

GetDBData().then ((result)=>{
  console.log(result) 
})
