import studentRoutes from "./student/studentRoutes";
import staffRoutes from "./staff/staffRoutes";
import CourseRoutes from "./Course/CourseRoutes";

import express from "express"

const router=express.Router()

router.use(studentRoutes.router)
router.use(staffRoutes.router)
router.use(CourseRoutes.router)

export default router;