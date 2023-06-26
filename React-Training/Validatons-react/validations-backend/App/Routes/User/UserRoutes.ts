import  express  from "express";
import Controller from "../../Controller";
import multer from 'multer';
// import VerifyToken from "../../Middleware/TokenVerify";
// const upload = multer({ storage: storage });
import storage from '../../Middleware/MulterFile'
const upload = multer({ storage: storage });


const router=express.Router()

router.post('/registeruser',upload.single('file'),Controller.RegisterUser.RegisterUser)


// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//       cb(null, 'uploads/');
//     },
//     filename: (req, file, cb) => {
//       cb(null, Date.now() + '-' + file.originalname);
//     }
//   });

export  default router;




