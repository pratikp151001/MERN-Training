import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    
  Student_first_name:  {type:String,require:true},
  Student_last_name:  {type:String,require:true},
  Student_email:  {type:String,require:true},
  Student_gender: {type:String,require:true},
  Student_marks: {type:Number,require:true},
  Student_selected_subject:  {type:String,require:true}

  });

  export default studentSchema;