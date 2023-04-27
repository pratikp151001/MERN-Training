import express,{Request,Response} from 'express'
import userController from '../Controllers/userController'

const Router=express.Router()
Router.get('/getuser',userController.getUser)
Router.post('/postuser',userController.postUser)
Router.delete('/deleteuser/:id',userController.DeleteUser)
Router.put('/updateuser/:id',userController.UpdateUser)
export default Router;