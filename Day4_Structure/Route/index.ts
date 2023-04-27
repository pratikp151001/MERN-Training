import express, { NextFunction } from 'express'
import customerRoute from './customerRoute';
import invoiveRoute from './invoiveRoute'
import investmentRoute from './Investmentroute'

const router=express.Router();

// console.log("in index router")
router.use('/customer',customerRoute);
router.use('/invoice',invoiveRoute)
router.use('/investment',investmentRoute)

export default router;