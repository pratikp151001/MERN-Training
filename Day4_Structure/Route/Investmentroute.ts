import express from 'express'
import investmentController from '../Controller/investmentController';
const router=express.Router();

router.get('/getInvestment',investmentController.getInvestment)


export default router;