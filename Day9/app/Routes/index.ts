import studentRoutes from "./student/studentRoutes";
import staffRoutes from "./staff/staffRoutes";
import CourseRoutes from "./Course/CourseRoutes";
import SchoolRoutes from "./schoolRoutes/schoolRoutes";

import express from "express"

const router=express.Router()

router.use(studentRoutes.router)
router.use(staffRoutes.router)
router.use(CourseRoutes.router)
router.use(SchoolRoutes.router)

export default router;