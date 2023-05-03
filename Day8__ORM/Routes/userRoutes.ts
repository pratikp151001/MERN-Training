import  express  from "express";
import userController from "../Controller/userController";


const Router=express.Router();

Router.get('/getuserDetails',userController.getuserDetails)
Router.post('/postuserDetails',userController.postuserDetails)
Router.delete('/deleteuserDetails/:id',userController.DeleteuserDetails)
Router.put('/updateuserDetails/:id',userController.UpdateuserDetails)
export default Router;