import EmailRepository from '../../Repository/index'
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";



const SendEmail = async (req: Request, res: Response) => {

    try {

        let emails = req.body
        let sup_data: any = await EmailRepository.EmailRepository.fetchsuppillers(emails)
        sendemail(sup_data)

        let response: responseModel = {
            status: 200,
            data: "resSup",
            error: null,

            message: "Suppilers Fetched successfully",
            success: true
        }

        res.json(response).status(200)
    }
    catch (e) {
        let response: responseModel = {
            status: 400,
            data: null,
            error: e as string,

            message: "Fail to Fetch Suppilers",
            success: false
        }

        res.json(response).status(400)

    }
}

const sendemail = async (data: any) => {

    //Server Conection

    const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        auth: {
            user: 'buck11@ethereal.email',
            pass: 'SAMDeChdFJmh6NQrS9'
        }
    });


    let html = `<table>`;
    data.map((item: any, index: number) => {

        html += `
        <div style="margin:50px">
        <tr><th>Suppiler No. ${index + 1}</th></tr>
        <tr>
        <th style="margin-left: 50px">Suppiler Name :-</th>
        <td>${item.name}</td>
        </tr>
        <tr>
        <th>Email Name :-</th>
        <td>${item.email}</td>
        </tr>
        </div>`
    })
    html += ` </table>`

    let info = await transporter.sendMail({
        from: data[0].email,
        to: data[0].email,
        subject: "About Invoice",
        html: html
    });
}

export default { SendEmail }
