import controller from "../../Controllers";
import express from "express";

const router=express.Router()

router.get('/getSchool',controller.schoolController.getschool);
router.post('/postSchool',controller.schoolController.SaveSchool);
router.delete('/deleteSchool/:id',controller.schoolController.deleteSchool);
router.put('/updateSchool/:id',controller.schoolController.updateSchool);

router.get('/sortInSchool/:sortBy',controller.schoolController.SearchAPI);

export default{router}