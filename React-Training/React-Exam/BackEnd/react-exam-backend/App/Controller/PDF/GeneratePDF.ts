import SuppilerRepository from '../../Repository/index'
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import HeaderRepository from '../../Repository/index'
import axios from 'axios';
import * as fs from 'fs';
// import PermissionCheck from '../../Middleware/PermissionCheck';
// import PERMISSIONS from '../../Middleware/permission';


const generatePDF = async (req: Request, res: Response) => {

    console.log("🚀 ~ file: GeneratePDF.ts:52 ~ generatePDF ~ generatePDF:", generatePDF)

    try {

        let month = req.params.month
        console.log("🚀 ~ file: FetchSuppilers.ts:20 ~ FetchSuppiler ~ month:", month)
        let emails = req.body
        console.log("🚀 ~ file: FetchSuppilers.ts:20 ~ FetchSuppiler ~ month:", emails)

        let resSup: any = await SuppilerRepository.SuppilerRepository.GetSuppliers(month)

        let Headers: any = await HeaderRepository.HeaderRepository.GetTableHeaders(month)
        console.log("🚀 ~ file: GeneratePDF.ts:23 ~ generatePDF ~ Headers:", Headers)
        console.log("🚀 ~ file: GeneratePDF.ts:20 ~ generatePDF ~ resSup:", resSup)

        const dataForPdfGenerate = resSup.filter((data: any, index: number) => {
            if (emails.includes(data.email)) {
                return data
            }
        })
        console.log("🚀 ~ file: GeneratePDF.ts:27 ~ dataForPdfGenerate ~ dataForPdfGenerate:", dataForPdfGenerate)
        let invoices : any=[]

        dataForPdfGenerate.map((data: any, index: number) => {
          let htmlforInvoice = ``;


            htmlforInvoice += `<!DOCTYPE html>
           <html>
           <head>
             <meta charset="UTF-8">
             <title>Invoice</title>
             <style>
               body {
                 font-family: Arial, sans-serif;
               }
           
               .invoice-container {
                 margin: 20px auto;
                 max-width: 600px;
                 padding: 20px;
                 border: 1px solid #ccc;
                 background-color: #f5f5f5;
               }
           
               .invoice-header {
                 text-align: center;
                 margin-bottom: 20px;
               }
           
               .invoice-header h1 {
                 color: #333;
                 margin: 0;
               }
           
               .invoice-details {
                 display: flex;
                 justify-content: space-between;
                 margin-bottom: 20px;
               }
           
               .invoice-details .invoice-number {
                 font-weight: bold;
               }
           
               .invoice-details .invoice-date {
                 font-style: italic;
               }
           
               .invoice-table {
                 width: 100%;
                 border-collapse: collapse;
               }
           
               .invoice-table th,
               .invoice-table td {
                 padding: 8px;
                 text-align: left;
                 border-bottom: 1px solid #ddd;
               }
           
               .invoice-table th {
                 background-color: #f2f2f2;
                 font-weight: bold;
               }
           
               .invoice-table td.quantity,
               .invoice-table td.price {
                 text-align: right;
               }
           
               .invoice-total {
                 text-align: right;
                 margin-top: 20px;
               }
           
               .invoice-total strong {
                 font-weight: bold;
               }
             </style>
           </head>
           <body>
             <div class="invoice-container">
               <div class="invoice-header">
                 <h1>Invoice</h1>
               </div>
           
               <div class="invoice-details">
                 <div class="invoice-number">Invoice Suppiller Name:${data.name}</div>
                 <div class="invoice-date">Invoice Number:${Date.now()}</div>
                 <div class="invoice-date">Date: ${data.invoice[0].month}</div>

               </div>
           
               <table class="invoice-table">
                 <thead>
                   <tr>
                     <th>Description</th>
                     <th class="price">Ammount</th>
                   
                   </tr>
                 </thead>
                 <tbody>  
           `
            if (data.invoice[0].Column1>0) {


                htmlforInvoice += ` <tr>
           <td>${Headers[0].Column1}</td>
           <td class="quantity">${data.invoice[0].Column1}</td>
           </tr>`
            }
            if (data.invoice[0].Column2) {


                htmlforInvoice += ` <tr>
           <td>${Headers[0].Column2}</td>
           <td class="quantity">${data.invoice[0].Column2}</td>
           </tr>`
            }
            if (data.invoice[0].Column3) {


                htmlforInvoice += ` <tr>
           <td>${Headers[0].Column3}</td>
           <td class="quantity">${data.invoice[0].Column3}</td>
           </tr>`
            }
            if (data.invoice[0].Column4) {


                htmlforInvoice += ` <tr>
           <td>${Headers[0].Column4}</td>
           <td class="quantity">${data.invoice[0].Column4}</td>
           </tr>`
            }
            if (data.invoice[0].Column5) {


                htmlforInvoice += ` <tr>
           <td>${Headers[0].Column5}</td>
           <td class="quantity">${data.invoice[0].Column5}</td>
           </tr>`
            }
            if (data.invoice[0].Column6) {


                htmlforInvoice += ` <tr>
           <td>${Headers[0].Column6}</td>
           <td class="quantity">${data.invoice[0].Column6}</td>
           </tr>`
            }
            if (data.invoice[0].Column7) {


                htmlforInvoice += ` <tr>
           <td>${Headers[0].Column7}</td>
           <td class="quantity">${data.invoice[0].Column7}</td>
           </tr>`
            }
            if (data.invoice[0].Column8) {


                htmlforInvoice += ` <tr>
           <td>${Headers[0].Column8}</td>
           <td class="quantity">${data.invoice[0].Column8}</td>
           </tr>`
            }
            if (data.invoice[0].Column9) {


                htmlforInvoice += ` <tr>
           <td>${Headers[0].Column9}</td>
           <td class="quantity">${data.invoice[0].Column9}</td>
           </tr>`
            }
            if (data.invoice[0].Column10) {


                htmlforInvoice += ` <tr>
           <td>${Headers[0].Column10}</td>
           <td class="quantity">${data.invoice[0].Column10}</td>
           </tr>`
            }
            if (data.invoice[0].Net) {


                htmlforInvoice += ` <tr>
           <td>Net</td>
           <td class="quantity">${data.invoice[0].Net}</td>
           </tr>`
            }
            if (data.invoice[0].VAT) {


                htmlforInvoice += ` <tr>
           <td>VAT</td>
           <td class="quantity">${data.invoice[0].VAT}</td>
           </tr>`
            }
            if (data.invoice[0].Advance) {


                htmlforInvoice += ` <tr>
           <td>Advance</td>
           <td class="quantity">${data.invoice[0].Advance}</td>
           </tr>`
            }
            if (data.invoice[0].Balance) {


                htmlforInvoice += ` <tr>
           <td>Balance</td>
           <td class="quantity">${data.invoice[0].Balance}</td>
           </tr>`
            }
                    htmlforInvoice += `         
                    </tbody>
                  </table>
              
                 
                </div>
              </body>
              </html>`

              invoices.push(btoa(htmlforInvoice))
              console.log("🚀 ~ file: GeneratePDF.ts:256 ~ dataForPdfGenerate.map ~ btoa(htmlforInvoice):", btoa(htmlforInvoice))
              
              
            })

            const resp=await axios.post("https://pdf.satvasolutions.com/api/ConvertHtmlToPdf",{"FileName":"ABC.pdf",  "HtmlData":invoices})
            console.log("🚀 ~ file: GeneratePDF.ts:264 ~ generatePDF ~ resp:", resp.data)

            // fs.writeFile("invoice.pdf", resp.data, 'base64', function(err) {
            //   console.log(err);
            // });
            // console.log("🚀 ~ file: GeneratePDF.ts:267 ~ fs.writeFile ~  console.log(err);:", "PDF doenloaded")

            // const downloadLink = document.createElement("a");
            // const fileName = "convertedPDFFile.pdf";
            // downloadLink.href = resp.data;
            // downloadLink.download = fileName;
            // downloadLink.click();
            // console.log("🚀 ~ file: GeneratePDF.ts:277 ~ generatePDF ~ downloadLink:", "CODE RAN")

            
            
            
            // console.log("🚀 ~ file: GeneratePDF.ts:999 ~ dataForPdfGenerate.map ~ invoices:", invoices)
        

        // console.log("🚀 ~ file: GeneratePDF.ts:31 ~ generatePDF ~ htmlforInvoice:", htmlforInvoice)








        let response: responseModel = {
            status: 200,
            data: resp.data,
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

export default { generatePDF }
