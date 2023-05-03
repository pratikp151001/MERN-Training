import controller from "../../Controllers";
import express from "express";

const router=express.Router()

router.get('/getstudent',controller.student.getstudent);

export default{router}