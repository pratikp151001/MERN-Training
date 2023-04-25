import express from 'express'
import customerContraoller from '../Controller/customerContraoller';
const router=express.Router();

router.get('/getcustomer',customerContraoller.getcustomer)
router.post('/postcustomer',customerContraoller.postcustomer)
router.delete('/deletecustomer/:id',customerContraoller.deletecustomer)
router.put('/updatecustomer/:id',customerContraoller.updatecustomer)

export default router;