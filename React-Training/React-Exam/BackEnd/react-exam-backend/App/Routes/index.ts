// import BlogRoutes from "../Routes/Blog/BlogRoutes"
// import UserRoutes from "../Routes/User/UserRoutes"
// import adminRoutes from '../Routes/Admin/Adminroutes'
import UserRoutes from '../Routes/User/Userroute'
import SuppilersRoutes from '../Routes/Suppillers/SuppilersRoutes'
import HeadersRoutes from '../Routes/TableHeaders/TableHeadersRoutes'
import EmailRoutes from '../Routes/Email/EmailRepo'
import PDFRoutes from '../Routes/PDF/PDFRoutes'
import express from 'express'

const router=express.Router()

router.use(UserRoutes)
router.use(SuppilersRoutes)
router.use(HeadersRoutes)
router.use(EmailRoutes)
router.use(PDFRoutes)

export  default router;