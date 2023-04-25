import express, { NextFunction } from 'express'
import customerRoute from './customerRoute';
import invoiveRoute from './invoiveRoute'
const router=express.Router();

console.log("in index router")
router.use('/customer',customerRoute);
router.use('/invoice',invoiveRoute)

export default router;