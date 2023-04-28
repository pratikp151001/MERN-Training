import express, { Request, Response } from 'express'
import connect from '../DB_connect/DB_connection';
import mongoose from 'mongoose'
import { usermodel } from '../Model/studentModel';
import studentSchema from '../DB_connect/usersScheema';
connect();
const student = mongoose.model('Studenet_details', studentSchema);
var SubjectSchema = new mongoose.Schema({

}, { strict: false });

const Subject = mongoose.model('subject_details', SubjectSchema);
let response = new usermodel();

class userController {
    async getStudent(req: Request, res: Response) {
        console.log("getUserCalled");


        try {
            //  let userData = await student.find({Student_marks:{$gt:80}})
            //    let userData = await student.find({Student_email:{$eq:"eberget4@hugedomains.com"}})
            //   let userData = await student.find({$and:[{Student_marks:{$gt:50}},{Student_marks:{$lt:80}}]})
            //   let userData = await student.find({$or:[{Student_marks:{$gt:80}},{Student_gender:"M"}]})
            // let userData = await student.find({_id:"644b531d8b51dcb85a250edc"})

            // let userData = await Subject.find({subject_name:"Gujarti"})
            // let userData = await Subject.find({Enroll_student:{$exists:false}})
            //---> let userData = await Subject.find({Teacher:"644b8b666c25a6144e9ce927"})


            // const userData= await Subject.aggregate([
            //     {
            //       $lookup:
            //         {
            //           from: 'staff_details',
            //           localField: 'Teacher',
            //           foreignField: '_id',
            //           as: 'Teacher-Details'
            //         }
            //    }
            //   ])

            // let userData = await Subject.aggregate([
            //     {
            //         $lookup: {
            //             from: 'studenet_details',
            //             localField: 'Enroll_student.id',
            //             foreignField: '_id',
            //             as: 'enrolled_students'
            //         }
            //     },
            //     {
            //         $lookup:
            //         {
            //             from: 'staff_details',
            //             localField: 'Teacher',
            //             foreignField: '_id',
            //             as: 'Teacher-Details'
            //         }
            //     }

            // ])

            // let userData = await Subject.aggregate([{$match: { iscompulsory: true }},
            //     {
            //         $lookup: {
            //             from: 'staff_details',
            //             localField: 'Teacher',
            //             foreignField: '_id',
            //             as: 'details'
            //         }
            //     },{
            //         $unwind: {
            //             path:'$details',
            //             preserveNullAndEmptyArrays: true
            //         }
            //     },
            //       {
            //         $lookup: {
            //             from: 'studenet_details',
            //             localField: 'details.Fav_Student',
            //             foreignField: '_id',
            //             as: 'Fav-Details'
            //         }
            //     },
            //     {
            //                 $lookup: {
            //                     from: 'studenet_details',
            //                     localField: 'Enroll_student.id',
            //                     foreignField: '_id',
            //                     as: 'enrolled_students'
            //                 }
            //             }
            // ])

            let userData = await student.aggregate([
                {
                    $match: { Enrolled_subjects: { $exists: true } }
                },
                {
                    $lookup: {
                        from: 'subject_details',
                        localField: 'Enrolled_subjects.sub_id',
                        foreignField: '_id',
                        as: 'selectedsubjects'
                    }
                },
                {
                    $project:
                    {
                        _id:1,
                        Student_first_name:1,
                        Student_first_email:1,
                        selectedsubjects:{
                            _id:'$selectedsubjects.subject_name'
                        }
                    }

                }

            ])

            response.status = "200"
            response.data = userData
            response.msg = "Data Get successfully"

            res.send(response)


        } catch (ex: any) {
            response.status = "400"
            response.data = null
            response.msg = "Something went Wrong"
            res.send(response)
        }

    }


}
export default new userController();