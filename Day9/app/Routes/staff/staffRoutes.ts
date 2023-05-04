import controller from "../../Controllers";
import express from "express";

const router=express.Router()

router.get('/getstaff',controller.staffController.getStaff);
router.post('/poststaff',controller.staffController.SaveStaff);
router.delete('/deletestaff/:id',controller.staffController.deletestaff);
router.put('/updatestaff/:id',controller.staffController.updatestaff);
export default{router}