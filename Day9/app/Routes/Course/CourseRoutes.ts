import controller from "../../Controllers";
import express from "express";

const router=express.Router()

router.get('/getCourse',controller.courseController.getcourse);
router.post('/postCourse',controller.courseController.SaveCourse);
router.delete('/deleteCourse/:id',controller.courseController.deleteCourse);
router.put('/updateCourse/:id',controller.courseController.updateCourse);
export default{router}