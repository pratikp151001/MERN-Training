// import React, { useEffect, useState } from 'react'
// import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
// import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import Grid from '@mui/material/Grid';
// import dayjs from 'dayjs';
// import './Dashboard.css'
// import Button from '@mui/material/Button';
// import Checkbox from '@mui/material/Checkbox';
// import FormControlLabel from '@mui/material/FormControlLabel';


// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import './Dashboard.css'
// import { useDispatch, useSelector } from 'react-redux';
// import FetchSuppilers from '../../Redux/Actions/FetchSuppillersAction';
// import PostData from '../../Redux/Actions/PostDataAction';
// import FetchHeaders from '../../Redux/Actions/fetchHeaders';
// import PostHeaders from '../../Redux/Actions/PostHeaders';
// import EmailActions from '../../Redux/Actions/SendEmail';
// import DownloadPDF from '../../Redux/Actions/DownloadPDf';
// import axios from 'axios';
// import Loader from '../Loader/Loader';

// export default function DashboardABC() {
//     const dispatch = useDispatch()
//     // const [allCheck, setallCheck] = useState()

//     const [checkedPermission, setcheckedPermission] = useState([])
//     const [date, setdate] = useState(dayjs(Date.now()))
//     const pdfData = useSelector((state) => state.pdf)
//     console.log("🚀 ~ file: Dashboard123.jsx:37 ~ DashboardABC ~ pdfData:", pdfData)
//     const state = useSelector((state) => state.suppiller)
//     const headers = useSelector((state) => state.headers)
//     console.log("🚀 ~ file: Dashboard123.jsx:32 ~ DashboardABC ~ headers:", headers)
//     console.log("🚀 ~ file: Dashboard123.jsx:28 ~ DashboardABC ~ state:", state)


//     useEffect(() => {
//         let Date = (date.toString()).split(" ")
//         let month = Date[2] + " " + Date[3]
//         console.log("🚀 ~ file: Dashboard123.jsx:33 ~ useEffect ~ DATE:", month)

//         dispatch(FetchSuppilers(month))
//         dispatch(FetchHeaders(month))
//     }, [date,state.post_data, headers.post_headerdata]) 

//     const [data, setdata] = useState([])
//     const [Header, setHeader] = useState([])

//     useEffect(() => {
//         if (state.suppiller_data) {
//             let value = [];
//             if (state.suppiller_data[0].invoice.length) {
//                 setcheckedPermission([])
//                 state.suppiller_data.map((item, index) => {
//                     console.log("🚀 ~ file: Dashboard123.jsx:98 ~ state.map ~ item:", item)

//                     value.push({
//                         "invoice_id": item.invoice[0].id,
//                         "sup_id": item.id,
//                         "sup_email": item.email,
//                         "suppillerName": item.name,
//                         "Column1": item.invoice[0].Column1,
//                         "Column2": item.invoice[0].Column2,
//                         "Column3": item.invoice[0].Column3,
//                         "Column4": item.invoice[0].Column4,
//                         "Column5": item.invoice[0].Column5,
//                         "Column6": item.invoice[0].Column6,
//                         "Column7": item.invoice[0].Column7,
//                         "Column8": item.invoice[0].Column8,
//                         "Column9": item.invoice[0].Column9,
//                         "Column10": item.invoice[0].Column10,
//                         "Net": item.invoice[0].Net,
//                         "VAT": item.invoice[0].VAT,
//                         "Advance": item.invoice[0].Advance,
//                         "Balance": item.invoice[0].Balance,
//                         "isApprove": item.invoice[0].isApprove
//                     })

//                     console.log("🚀 ~ file: Dashboard123.jsx:91 ~ DashboardABC ~ value: !!!!!!!!!", value)


//                 })

//                // console.log("🚀 ~ file: Dashboard123.jsx:92 ~ useEffect ~ state:", state)
//             }
//             else {


//                 state.suppiller_data.map((item, index) => {
//                     value.push({
//                         "invoice_id": null,
//                         "sup_id": item.id,
//                         "suppillerName": item.name,
//                         "Column1": 0.00,
//                         "Column2": 0.00,
//                         "Column3": 0.00,
//                         "Column4": 0.00,
//                         "Column5": 0.00,
//                         "Column6": 0.00,
//                         "Column7": 0.00,
//                         "Column8": 0.00,
//                         "Column9": 0.00,
//                         "Column10": 0.00,
//                         "Net": 0.00,
//                         "VAT": 0.00,
//                         "Advance": 0.00,
//                         "Balance": 0.00,
//                         "isApprove": false
//                     })

//                     console.log("🚀 ~ file: Dashboard123.jsx:91 ~ DashboardABC ~ value: !!!!!!!!!", value)


//                 })
//                // console.log("🚀 ~ file: Dashboard123.jsx:115 ~ state.map ~ state:", state)
//             }
//             setdata(value)
//         }
//         console.log("🚀 ~ file: Dashboard123.jsx:114 ~ useEffect ~ headers:", headers)
//         if (headers) {
//             if (headers.headers_data != null && headers.headers_data.length) {
//                 setHeader([{
//                     "header_id": headers.headers_data[0].id,
//                     "Column1": headers.headers_data[0].Column1,
//                     "Column2": headers.headers_data[0].Column2,
//                     "Column3": headers.headers_data[0].Column3,
//                     "Column4": headers.headers_data[0].Column4,
//                     "Column5": headers.headers_data[0].Column5,
//                     "Column6": headers.headers_data[0].Column6,
//                     "Column7": headers.headers_data[0].Column7,
//                     "Column8": headers.headers_data[0].Column8,
//                     "Column9": headers.headers_data[0].Column9,
//                     "Column10": headers.headers_data[0].Column10,
//                     "Net": "Net",
//                     "VAT": "VAT",
//                     "Advance": "Advance",
//                     "Balance": "Balance"
//                 }])
//             }
//             else {
//                 setHeader([{
//                     "header_id": null,
//                     "Column1": "Column1",
//                     "Column2": "Column2",
//                     "Column3": "Column3",
//                     "Column4": "Column4",
//                     "Column5": "Column5",
//                     "Column6": "Column6",
//                     "Column7": "Column7",
//                     "Column8": "Column8",
//                     "Column9": "Column9",
//                     "Column10": "Column10",
//                     "Net": "Net",
//                     "VAT": "VAT",
//                     "Advance": "Advance",
//                     "Balance": "Balance"
//                 }])

//             }
//         }
//     }, [state, headers.post_headerdata])


//     //GET  CHECKBOX VALUE
//     const getvalue = (e) => {

//         console.log("🚀 ~ file: Editroles.jsx:30 ~ getvalue ~ e:", e)
//         const { checked, value } = e.target
//         console.log("🚀 ~ file: Editroles.jsx:25 ~ getvalue ~ value:", value)
//         console.log("🚀 ~ file: Editroles.jsx:25 ~ getvalue ~ checked:", checked)
//         if (checked) {
//             setcheckedPermission([...checkedPermission, value])
//         }
//         else {
//             setcheckedPermission([...checkedPermission.filter(per => per !== value)])
//         }




//         // alert(e.target.checked)
//         console.log("🚀 ~ file: Editroles.jsx:14 ~ getvalue ~ e.target.label:", e.target.label)

//     }



//     const handlemonthChange = (e) => {
//         setdate(dayjs(new Date(e.$y, e.$M + 1, 0)))

//         //    console.log("🚀 ~ file: Dashboard.jsx:15 ~ handlemonthChange ~  new Date(year, month + 1, 0):",  new Date(e.$y, e.$M + 1, 0))
//     }

//     const handleDataChange = (e, rowno) => {
//         console.log("🚀 ~ file: Dashboard.jsx:43 ~ handleDataChange ~ rowno:", rowno)
//         let body = data

//         const updateddata = body.map((row, index) => {

//             if (index == rowno) {
//                 // if (e.target.name != "Advance") {
//                 // let NetValue = parseInt(row.Column1) + parseInt(row.Column2) + parseInt(row.Column3) + parseInt(row.Column4) + parseInt(row.Column5)
//                 //     + parseInt(row.Column6) + parseInt(row.Column7) + parseInt(row.Column8) + parseInt(row.Column9) + parseInt(row.Column10)


//                 //     return { ...row, [e.target.name]: e.target.value, Net: NetValue  }
//                 // } else {
//                 return { ...row, [e.target.name]: e.target.value }
//                 // }
//             }
//             else {
//                 return row
//             }
//         })
//         const updatedData = updateddata.map((row, index) => {

//             if (index == rowno) {

//                 let NetValue = parseInt(row.Column1) + parseInt(row.Column2) + parseInt(row.Column3) + parseInt(row.Column4) + parseInt(row.Column5)
//                     + parseInt(row.Column6) + parseInt(row.Column7) + parseInt(row.Column8) + parseInt(row.Column9) + parseInt(row.Column10)

//                 let Balance = NetValue + ((NetValue * 20) / 100) - parseInt(row.Advance)


//                 return { ...row, [e.target.name]: e.target.value, Net: NetValue, Balance: Balance }

//             }
//             else {
//                 return row
//             }
//         })
//         console.log("🚀 ~ file: Dashboard.jsx:98 ~ updateddata ~ updateddata:", updateddata)
//         setdata(updatedData)
//         console.log("🚀 ~ file: Dashboard.jsx:53 ~ rows.map ~ rows:", data)



//     }

//     const handleheaderChange = (e, headerno) => {

//         const updateddata = Header.map((header, index) => {
//             if (index == headerno) {
//                 return { ...header, [e.target.name]: e.target.value }
//             }
//             else {
//                 return header
//             }
//         })
//         console.log("🚀 ~ file: Dashboard.jsx:53 ~ rows.map ~ rows:", data)
//         setHeader(updateddata)
//     }

//     const SaveClicked = () => {
//         // alert(typeof(date))

//         const DATE = (date.toString()).split(" ")
//         console.log("DATE", DATE)

//         const finalDATA = data.map((item, index) => {
//             console.log("🚀 ~ file: Dashboard123.jsx:257 ~ finalDATA ~ item:", item.sup_email)

//             console.log("🚀 ~ file: Dashboard123.jsx:260 ~ finalDATA ~ checkedPermission.includes(item.sup_email):", checkedPermission.includes(item.sup_email))
//             if (checkedPermission.includes(item.sup_email)) {
//                 return { ...item, month: DATE[2] + " " + DATE[3], isApprove: true }
//             }
//             else {
//                 return { ...item, month: DATE[2] + " " + DATE[3] }
//             }
//         })
//         dispatch(PostData({ data: finalDATA }))
//         console.log("🚀 ~ file: Dashboard123.jsx:236 ~ finalDATA ~ finalDATA:", finalDATA)

//         const tblHeader = {
//             data: {
//                 Column1: Header[0].Column1,
//                 Column2: Header[0].Column2,
//                 Column3: Header[0].Column3,
//                 Column4: Header[0].Column4,
//                 Column5: Header[0].Column5,
//                 Column6: Header[0].Column6,
//                 Column7: Header[0].Column7,
//                 Column8: Header[0].Column8,
//                 Column9: Header[0].Column9,
//                 Column10: Header[0].Column10,
//                 month: DATE[2] + " " + DATE[3]
//             },
//             header_id: Header[0].header_id,
//         }
//         console.log("🚀 ~ file: Dashboard123.jsx:238 ~ SaveClicked ~ tblHeader:", tblHeader)

//         dispatch(PostHeaders({ tableHeaders: tblHeader }))

//     }


//     //Set All Check Box

//     // const setAllCheck=(e)=>{

//     //     const { checked, value } = e.target

//     //     if (checked) {
//     //         setallCheck(true)    
//     //     }
//     //     else {
//     //         setallCheck(false)
//     //     }

//     // }

//     //Send Email
//     const sendEmail = () => {
//         dispatch(EmailActions(checkedPermission))
//     }

//     //DownloadPDF

//     const DownloadPdf = async () => {
//         alert("DS")


//         promise.then((value) => {
//             console.log("🚀 ~ file: Dashboard123.jsx:331 ~ promise.then ~ value:", value)

//             let pdf = {
//                 file: value,
//                 file_name: "Invoice"
//             }
//             console.log("🚀 ~ file: Dashboard123.jsx:337 ~ promise.then ~ pdf:", pdf)

//             const pdfLink = `${pdf.file}`;
//             const anchorElement = document.createElement('a');
//             const fileName = `${pdf.file_name}.pdf`;
//             anchorElement.href = "data:application/pdf;base64," + value;
//             anchorElement.download = fileName;
//             anchorElement.click();


//         }
//         ).catch(console.log("object"))


//     }

//     let promise = new Promise(async function (resolve, reject) {
//         const DATE = (date.toString()).split(" ")
//         console.log("DATE", DATE)
//         const Data = {
//             emails: checkedPermission,
//             month: DATE[2] + " " + DATE[3]
//         }
//         const resp = await axios.post(`http://localhost:9988/pdf/${Data.month}`, Data.emails)
//         console.log("🚀 ~ file: Dashboard123.jsx:353 ~ promise ~ resp:", resp)
//         resolve(resp.data.data)

//     })


//     return (
//         <>
//             {headers.isLoading ? (<Loader />) :
//                 <LocalizationProvider dateAdapter={AdapterDayjs}>
//                     <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
//                         {/* <DatePicker label={'"Choose Month"'} views={['month', 'year']} />
//                     <DatePicker label={"Select Date"} /> */}


//                         <Grid container spacing={2} className='ps-5'>
//                             <Grid item xs={12} className='text-start'>
//                                 <b> Monthly Invoice List</b>
//                             </Grid>
//                             <Grid item xs={7} className='text-start'>
//                                 <Grid container spacing={2}>
//                                     <Grid item xs={3}>
//                                         <b>Choose Month</b>
//                                     </Grid>

//                                     <Grid item xs={5}>

//                                         <DatePicker label={'"Choose Month"'} views={['month', 'year']} value={date} onChange={(e) => { handlemonthChange(e) }} />
//                                     </Grid>
//                                 </Grid>
//                             </Grid>

//                             <Grid item xs={7}>
//                                 <Grid container spacing={2} className='text-start'>
//                                     <Grid item xs={3}>
//                                         <b>Date</b>
//                                     </Grid>

//                                     <Grid item xs={5}>

//                                         <DatePicker label={"Select Date"} format='DD/MM/YYYY' value={date} />
//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                             <Grid item xs={5}>
//                                 <Grid container spacing={2} className='text-start'>
//                                     <Grid item xs={3}>
//                                         <b>Invoice Reference</b>
//                                     </Grid>

//                                     <Grid item xs={5}>

//                                         <DatePicker label={'"Choose Month"'} value={date} views={['month', 'year']} />

//                                     </Grid>
//                                 </Grid>
//                             </Grid>
//                             <Grid item xs={7}>
//                                 <Grid container spacing={2} className='text-start'>
//                                 </Grid>
//                             </Grid>
//                             <Grid item xs={5}>
//                                 <Grid container spacing={2} className='text-start'>
//                                     <Button variant="contained" className='ms-2 mt-5' onClick={() => { sendEmail() }}>Email Invoice</Button>
//                                     <Button variant="contained" className='ms-2 mt-5' onClick={() => { SaveClicked() }}>Approve Invoice</Button>
//                                     <Button variant="contained" className='ms-2 mt-5' onClick={() => { DownloadPdf() }}>Combine and Download</Button>
//                                 </Grid>
//                             </Grid>

//                         </Grid>

//                         <TableContainer className='ps-5 pe-5' component={Paper}>
//                             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                                 <TableHead>
//                                     <TableRow>
//                                         <TableCell>Index</TableCell>
//                                         <TableCell align="center">suppiller</TableCell>
//                                         {Header.map((header, index) => (
//                                             <>
//                                                 <TableCell align="center"><input type="text" value={header.Column1} name="Column1" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
//                                                 <TableCell align="center"><input type="text" value={header.Column2} name="Column2" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
//                                                 <TableCell align="center"><input type="text" value={header.Column3} name="Column3" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
//                                                 <TableCell align="center"><input type="text" value={header.Column4} name="Column4" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
//                                                 <TableCell align="center"><input type="text" value={header.Column5} name="Column5" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
//                                                 <TableCell align="center"><input type="text" value={header.Column6} name="Column6" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
//                                                 <TableCell align="center"><input type="text" value={header.Column7} name="Column7" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
//                                                 <TableCell align="center"><input type="text" value={header.Column8} name="Column8" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
//                                                 <TableCell align="center"><input type="text" value={header.Column9} name="Column8" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
//                                                 <TableCell align="center"><input type="text" value={header.Column10} name="Column10" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
//                                                 <TableCell align="center"><input type="text" value={header.Net} name="Net" className='tablefields' /></TableCell>
//                                                 <TableCell align="center"><input type="text" value={header.VAT} name="VAT" className='tablefields' /></TableCell>
//                                                 <TableCell align="center"><input type="text" value={header.Advance} name="Advance" className='tablefields' /></TableCell>
//                                                 <TableCell align="center"><input type="text" value={header.Balance} name="Balance" className='tablefields' /></TableCell>
//                                                 <TableCell align="center"><FormControlLabel
//                                                     // value={data?.id}
//                                                     control={<Checkbox />}
//                                                     // label={data?.permission_name}
//                                                     // label="sdv"
//                                                     // onChange={(e) => { setAllCheck(e) }}
//                                                     className='ms-2'
//                                                     labelPlacement="end"
//                                                 /></TableCell>

//                                             </>

//                                         ))}
//                                     </TableRow>
//                                 </TableHead>
//                                 {data && <TableBody>
//                                     {data.map((row, index) => (
//                                         <TableRow
//                                             key={index}
//                                             className={row.isApprove ? `approve` : ``}
//                                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
//                                         >
//                                             <TableCell component="th" scope="row">{index + 1} {row.isApprove}</TableCell>
//                                             <TableCell align="center">{row.suppillerName}</TableCell>
//                                             <TableCell align="center"><input type="number" value={row.Column1} name="Column1" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
//                                             <TableCell align="center"><input type="number" value={row.Column2} name="Column2" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
//                                             <TableCell align="center"><input type="number" value={row.Column3} name="Column3" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
//                                             <TableCell align="center"><input type="number" value={row.Column4} name="Column4" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
//                                             <TableCell align="center"><input type="number" value={row.Column5} name="Column5" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
//                                             <TableCell align="center"><input type="number" value={row.Column6} name="Column6" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
//                                             <TableCell align="center"><input type="number" value={row.Column7} name="Column7" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
//                                             <TableCell align="center"><input type="number" value={row.Column8} name="Column8" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
//                                             <TableCell align="center"><input type="number" value={row.Column9} name="Column9" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
//                                             <TableCell align="center"><input type="number" value={row.Column10} name="Column10" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
//                                             <TableCell align="center">
//                                                 <input type="number" value=
//                                                     // {parseInt(row.Column1) + parseInt(row.Column2) + parseInt(row.Column3) + parseInt(row.Column4) + parseInt(row.Column5)
//                                                     // + parseInt(row.Column6) + parseInt(row.Column7) + parseInt(row.Column8) + parseInt(row.Column9) + parseInt(row.Column10)}
//                                                     // {calculateNet(row,index)}
//                                                     {row.Net}
//                                                     // onChange={(e) => {alert("dvs") }}
//                                                     disabled name="Net" className='tablefields' />

//                                                 {/* {setNet(row,index)} */}
//                                                 {/* {calculateNet(row, index)} */}
//                                             </TableCell>
//                                             <TableCell align="center">20</TableCell>
//                                             <TableCell align="center"><input type="number" value={row.Advance} name="Advance" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
//                                             <TableCell align="center"><input type="number"
//                                                 value={row.Balance}
//                                                 disabled name="Balance" readOnly="true" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
//                                             <TableCell align="center"><FormControlLabel
//                                                 value={row.sup_email}
//                                                 control={<Checkbox />}
//                                                 // label={data?.permission_name}
//                                                 // label="sdv"
//                                                 // checked={allCheck?true: ``}
//                                                 onChange={(e) => { getvalue(e) }}
//                                                 className='ms-2'
//                                                 labelPlacement="end"
//                                             /></TableCell>
//                                         </TableRow>
//                                     ))}
//                                 </TableBody>}
//                             </Table>
//                         </TableContainer>
//                         <div className="SaveButton me-5">
//                             <Button variant="contained" className='ms-2 mt-1 savebtn' onClick={() => { SaveClicked() }} >Save</Button>
//                         </div>
//                     </DemoContainer>
//                 </LocalizationProvider >
                
//             }
//             {JSON.stringify(data)}
//             {JSON.stringify(checkedPermission)}

//         </>
//     )
// }
