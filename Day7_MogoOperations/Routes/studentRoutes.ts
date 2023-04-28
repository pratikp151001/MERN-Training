import express,{Request,Response} from 'express'
import studentController from '../Controllers/studentController'

const Router=express.Router()
Router.get('/getstudent',studentController.getStudent)

export default Router;