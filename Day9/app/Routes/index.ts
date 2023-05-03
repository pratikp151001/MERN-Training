import studentRoutes from "./student/studentRoutes";

import express from "express"

const router=express.Router()

router.use(studentRoutes.router)

export default router;