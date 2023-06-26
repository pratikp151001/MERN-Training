import SuppilerRepository from '../../Repository/index'
import { Request, Response } from "express";
import { responseModel } from "../../Model/ResponseModel";
import HeaderRepository from '../../Repository/index'
import axios from 'axios';
import dotenv from 'dotenv'

const generatePDF = async (req: Request, res: Response) => {
  try {

    let month = req.params.month
    let emails = req.body
    let resSup: any = await SuppilerRepository.SuppilerRepository.GetSuppliers(month)
    let Headers: any = await HeaderRepository.HeaderRepository.GetTableHeaders(month)
    // if(Headers.length){
    //   Headers={
    //   "Column1": "Column1",
    //   "Column2": "Column2",
    //   "Column3": "Column3",
    //   "Column4": "Column4",
    //   "Column5": "Column5",
    //   "Column6": "Column6",
    //   "Column7": "Column7",
    //   "Column8": "Column8",
    //   "Column9": "Column9",
    //   "Column10": "Column10"
    //   }
    // }
    const dataForPdfGenerate = resSup.filter((data: any, index: number) => {
      if (emails.includes(data.email)) {
        return data
      }
    })
    let invoices: any = []

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
                 text-align: left;
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
                     <th class="quantity">Ammount</th>
                   
                   </tr>
                 </thead>
                 <tbody>  
           `
      if (data.invoice[0].Column1 > 0) {
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

      if (data.invoice[0].Advance || data.invoice[0].Column1 || data.invoice[0].Column2 || data.invoice[0].Column3 || data.invoice[0].Column4 || data.invoice[0].Column5 || data.invoice[0].Column6 || data.invoice[0].Column7 ||
        data.invoice[0].Column8 || data.invoice[0].Column9 || data.invoice[0].Column10) {

        invoices.push(btoa(htmlforInvoice))
      }
    })
    dotenv.config({path:".env"})
    const Base64ToPdf:any=process.env.BASE64_TO_PDF_API
    const resp = await axios.post("https://pdf.satvasolutions.com/api/ConvertHtmlToPdf", { "FileName": "Invoice.pdf", "HtmlData": invoices })
    
    let response: responseModel = {
      status: 200,
      data: resp.data,
      error: null,

      message: "PDf download successfully",
      success: true
    }

    res.json(response).status(200)
  }
  catch (e) {
    let response: responseModel = {
      status: 400,
      data: null,
      error: e as string,

      message: "Fail to download",
      success: false
    }

    res.json(response).status(400)
  }
}

export default { generatePDF }
