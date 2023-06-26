import  express  from "express";
import Controller from "../../Controller";
import multer from 'multer';

import storage from "../../MiddleWare/Multer/multerStorage";
const upload = multer({ storage: storage });

const router=express.Router()

router.post('/addproduct',upload.single('productImage') ,Controller.AddProduct.AddProduct)
router.get('/products',Controller.GetProducts.GetProduct)
router.delete('/deleteproduct/:id',Controller.DeleteProduct.DeleteProduct)


export  default router;