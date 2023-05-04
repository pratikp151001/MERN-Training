import controller from "../../Controllers";
import express from "express";

const router=express.Router()

router.get('/getstudent',controller.studentController.getstudent);
router.post('/poststudent',controller.studentController.savestudent);
router.delete('/deletestudent/:id',controller.studentController.deletestudent);
router.put('/updatestudent/:id',controller.studentController.updatestudent);
router.get('/SortByName',controller.studentController.searchResult);
export default{router}