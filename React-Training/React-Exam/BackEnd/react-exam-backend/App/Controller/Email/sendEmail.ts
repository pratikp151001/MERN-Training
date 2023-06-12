import EmailRepository from '../../Repository/index'
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";



const SendEmail = async (req: Request, res: Response) => {


    console.log("🚀 ~ file: FetchSuppilers.ts:48 ~ FetchSuppiler ~ FetchSuppiler:", "SendEmail")

    try {



        let emails = req.body
        console.log("🚀 ~ file: FetchSuppilers.ts:20 ~ FetchSuppiler ~ month:", emails)

        let sup_data: any = await EmailRepository.EmailRepository.fetchsuppillers(emails)
        console.log("🚀 ~ file: sendEmail.ts:22 ~ SendEmail ~ sup_data:", sup_data)

        sendemail(sup_data)


        // let resSup = await  SuppilerRepository.SuppilerRepository.GetSuppliers(month)

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
            user: 'austyn.pfannerstill@ethereal.email',
            pass: 'kja94T4B7e2bznNGNH'
        }
    });
    let html = `<table>`;
    data.map((item: any, index: number) => {

        html += `
        <div style="margin:50px">
        <tr className='m-5'><th>Suppiler No. ${index + 1}</th></tr>
         <tr style="margin:50px">
        <th>"Suppiler Name"</th>
        <td>${item.name}</td>
        </tr>
        <tr style="margin:50px">
        <th>"Email Name"</th>
        <td>${item.email}</td>
        </tr>
        </div>`
    })
    html += ` </table>`




    let info = await transporter.sendMail({
        from: data[0].email,
        to: data[0].email,
        subject: "About Envoice",
        html: html
    });
    console.log("🚀 ~ file: sendEmail.ts:79 ~ sendemail ~ info:", info)

}

export default { SendEmail }
