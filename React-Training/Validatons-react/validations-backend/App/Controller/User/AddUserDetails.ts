import { UserRegistrationModel } from "../../Model/UserRegistrationModel";
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import UserRepository from '../../Repository/index'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { RegistrationScheema } from '../../Validations/RegistrationValidation'



const RegisterUser = async (req: Request, res: Response) => {
    try {

        const User: UserRegistrationModel = {
            birthday: req.body.birthday,
            color: req.body.color,
            email: req.body.email,
            gender: req.body.gender,
            lastname: req.body.lastname,
            firstname: req.body.firstname,
            mobile: req.body.mobile,
            password: req.body.password,
            hobbies: JSON.parse(req.body.hobbies),
            file: (req.file) ? req.file.filename : `${req.body.email}_file`,
        }
        const isValid = await RegistrationScheema.isValid(User)
        if (isValid) {
            let encryptedPassword = await bcrypt.hash(User.password, 10);
            User.password = encryptedPassword;

           let resUSer = await UserRepository.UserRepository.RegisterUser(User)

            const key = process.env.TOKEN_KEY;
            const token = jwt.sign(
                { user_id: resUSer.id, user_email: resUSer.email, user_password: resUSer.password }, key as string, { expiresIn: 3600 });



            let response: responseModel = {
                status: 200,
                data: { data: resUSer, token: token },
                error: null,

                message: "User Register successfully",
                success: true
            }

            res.json(response).status(200)
        }
        else {
            let response: responseModel = {
                status: 400,
                data: null,
                error: "object is not a Valid object",

                message: "Fail to Register user",
                success: false
            }

            res.json(response).status(400)

        }

    }
    catch (e) {
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail to Register user",
            success: false
        }

        res.json(response).status(400)

    }
}
export default { RegisterUser }