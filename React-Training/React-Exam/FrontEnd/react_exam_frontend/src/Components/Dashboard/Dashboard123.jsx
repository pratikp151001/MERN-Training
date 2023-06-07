import React, { useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';
import './Dashboard.css'
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './Dashboard.css'

export default function DashboardABC() {

    const [date, setdate] = useState()
    const [data, setdata] = useState([
        {
            "Column1": 0.00,
            "Column2": 0.00,
            "Column3": 0.00,
            "Column4": 0.00,
            "Column5": 0.00,
            "Column6": 5.00,
            "Column7": 0.00,
            "Column8": 0.00,
            "Column9": 0.00,
            "Column10": 0.00,
            "Net": 5.00,
            "VAT": 0.00,
            "Advance": 0.00,
            "Balance": 6.00
        },
        {
            "Column1": 0.00,
            "Column2": 0.00,
            "Column3": 0.00,
            "Column4": 0.00,
            "Column5": 0.00,
            "Column6": 0.00,
            "Column7": 0.00,
            "Column8": 0.00,
            "Column9": 0.00,
            "Column10": 0.00,
            "Net": 0.00,
            "VAT": 0.00,
            "Advance": 0.00,
            "Balance": 0.00
        }, {
            "Column1": 0.00,
            "Column2": 0.00,
            "Column3": 0.00,
            "Column4": 0.00,
            "Column5": 0.00,
            "Column6": 0.00,
            "Column7": 0.00,
            "Column8": 0.00,
            "Column9": 0.00,
            "Column10": 0.00,
            "Net": 0.00,
            "VAT": 0.00,
            "Advance": 0.00,
            "Balance": 0.00
        }

    ])

    const [Header, setHeader] = useState([
        {
            "Column1": "Column1",
            "Column2": "Column2",
            "Column3": "Column3",
            "Column4": "Column4",
            "Column5": "Column5",
            "Column6": "Column6",
            "Column7": "Column7",
            "Column8": "Column8",
            "Column9": "Column9",
            "Column10": "Column10",
            "Net": "Net",
            "VAT": "VAT",
            "Advance": "Advance",
            "Balance": "Balance"
        }])
    const handlemonthChange = (e) => {
        setdate(dayjs(new Date(e.$y, e.$M + 1, 0)))

        //    console.log("🚀 ~ file: Dashboard.jsx:15 ~ handlemonthChange ~  new Date(year, month + 1, 0):",  new Date(e.$y, e.$M + 1, 0))
    }
    // const rows = [
    //     {x1
    //         calories: "dsv",
    //         fat: "Fea",
    //         carbs: "Dv",
    //         protein: "sdvsd"




    //     }
    // ]


    const handleDataChange = (e, rowno) => {
        console.log("🚀 ~ file: Dashboard.jsx:43 ~ handleDataChange ~ rowno:", rowno)
        let body = data

        const updateddata = body.map((row, index) => {

            if (index == rowno) {
                // if (e.target.name != "Advance") {
                // let NetValue = parseInt(row.Column1) + parseInt(row.Column2) + parseInt(row.Column3) + parseInt(row.Column4) + parseInt(row.Column5)
                //     + parseInt(row.Column6) + parseInt(row.Column7) + parseInt(row.Column8) + parseInt(row.Column9) + parseInt(row.Column10)


                //     return { ...row, [e.target.name]: e.target.value, Net: NetValue  }
                // } else {
                return { ...row, [e.target.name]: e.target.value }
                // }
            }
            else {
                return row
            }
        })
        const updatedData = updateddata.map((row, index) => {

            if (index == rowno) {

                let NetValue = parseInt(row.Column1) + parseInt(row.Column2) + parseInt(row.Column3) + parseInt(row.Column4) + parseInt(row.Column5)
                    + parseInt(row.Column6) + parseInt(row.Column7) + parseInt(row.Column8) + parseInt(row.Column9) + parseInt(row.Column10)

                let Balance = NetValue + ((NetValue * 20) / 100) - parseInt(row.Advance)


                return { ...row, [e.target.name]: e.target.value, Net: NetValue, Balance: Balance }

            }
            else {
                return row
            }
        })
        console.log("🚀 ~ file: Dashboard.jsx:98 ~ updateddata ~ updateddata:", updateddata)
        setdata(updatedData)
        console.log("🚀 ~ file: Dashboard.jsx:53 ~ rows.map ~ rows:", data)



    }

    const handleheaderChange = (e, headerno) => {

        const updateddata = Header.map((header, index) => {
            if (index == headerno) {
                return { ...header, [e.target.name]: e.target.value }
            }
            else {
                return header
            }
        })
        console.log("🚀 ~ file: Dashboard.jsx:53 ~ rows.map ~ rows:", data)
        setHeader(updateddata)
    }





    // const calculateNet = (row, index) => {

    //     let Net = parseInt(row.Column1) + parseInt(row.Column2) + parseInt(row.Column3) + parseInt(row.Column4) + parseInt(row.Column5)
    //         + parseInt(row.Column6) + parseInt(row.Column7) + parseInt(row.Column8) + parseInt(row.Column9) + parseInt(row.Column10)

    //     const updateddata = data.map((row, i) => {

    //         if (index == i) {

    //             return { ...row, "Net": Net }

    //         }
    //         else {
    //             return row
    //         }
    //     })
    //     console.log("🚀 ~ file: Dashboard.jsx:133 ~ updateddata ~ updateddata:", updateddata)

    //     //setdata(updateddata)

    //     return Net


    // }

    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                    {/* <DatePicker label={'"Choose Month"'} views={['month', 'year']} />
                    <DatePicker label={"Select Date"} /> */}


                    <Grid container spacing={2} className='ps-5'>
                        <Grid item xs={12} className='text-start'>
                            <b> Monthly Invoice List</b>
                        </Grid>
                        <Grid item xs={7} className='text-start'>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <b>Choose Month</b>
                                </Grid>

                                <Grid item xs={5}>

                                    <DatePicker label={'"Choose Month"'} views={['month', 'year']} onChange={(e) => { handlemonthChange(e) }} />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={7}>
                            <Grid container spacing={2} className='text-start'>
                                <Grid item xs={3}>
                                    <b>Date</b>
                                </Grid>

                                <Grid item xs={5}>

                                    <DatePicker label={"Select Date"} format='DD/MM/YYYY' value={date} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                            <Grid container spacing={2} className='text-start'>
                                <Grid item xs={3}>
                                    <b>Invoice Reference</b>
                                </Grid>

                                <Grid item xs={5}>

                                    <DatePicker label={'"Choose Month"'} value={date} views={['month', 'year']} />

                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={7}>
                            <Grid container spacing={2} className='text-start'>
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                            <Grid container spacing={2} className='text-start'>
                                <Button variant="contained" className='ms-2 mt-5'>Email Invoice</Button>
                                <Button variant="contained" className='ms-2 mt-5'>Approve Invoice</Button>
                                <Button variant="contained" className='ms-2 mt-5'>Combine and Download</Button>
                            </Grid>
                        </Grid>

                    </Grid>

                    <TableContainer className='ps-5 pe-5' component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell></TableCell>
                                    <TableCell align="center">suppiller</TableCell>
                                    {Header.map((header, index) => (
                                        <>
                                            <TableCell align="center"><input type="text" value={header.Column1} name="Column1" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
                                            <TableCell align="center"><input type="text" value={header.Column2} name="Column2" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
                                            <TableCell align="center"><input type="text" value={header.Column3} name="Column3" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
                                            <TableCell align="center"><input type="text" value={header.Column4} name="Column4" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
                                            <TableCell align="center"><input type="text" value={header.Column5} name="Column5" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
                                            <TableCell align="center"><input type="text" value={header.Column6} name="Column6" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
                                            <TableCell align="center"><input type="text" value={header.Column7} name="Column7" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
                                            <TableCell align="center"><input type="text" value={header.Column8} name="Column8" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
                                            <TableCell align="center"><input type="text" value={header.Column9} name="Column8" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
                                            <TableCell align="center"><input type="text" value={header.Column10} name="Column10" className='tablefields' onChange={(e) => { handleheaderChange(e, index) }} /></TableCell>
                                            <TableCell align="center"><input type="text" value={header.Net} name="Net" className='tablefields' /></TableCell>
                                            <TableCell align="center"><input type="text" value={header.VAT} name="VAT" className='tablefields' /></TableCell>
                                            <TableCell align="center"><input type="text" value={header.Advance} name="Advance" className='tablefields' /></TableCell>
                                            <TableCell align="center"><input type="text" value={header.Balance} name="Balance" className='tablefields' /></TableCell>
                                            <TableCell align="center"><FormControlLabel
                                                // value={data?.id}
                                                control={<Checkbox />}
                                                // label={data?.permission_name}
                                                // label="sdv"
                                                // onChange={(e) => { getvalue(e) }}
                                                className='ms-2'
                                                labelPlacement="end"
                                            /></TableCell>

                                        </>

                                    ))}




                                    {/* <TableCell align="center">Hair Service</TableCell>
                                    <TableCell align="center">Beauty</TableCell>
                                    <TableCell align="center">Floor Ma</TableCell>
                                    <TableCell align="center">Cafe</TableCell>
                                    <TableCell align="center">Top up</TableCell>
                                    <TableCell align="center">PR and</TableCell>
                                    <TableCell align="center">Hair Ser..</TableCell>
                                    <TableCell align="center">Custom</TableCell>
                                    <TableCell align="center">Custom..</TableCell>
                                    <TableCell align="center">Admin</TableCell>
                                    <TableCell align="center">Bupa/</TableCell>
                                    <TableCell align="center">Net</TableCell>
                                    <TableCell align="center">VAT</TableCell>
                                    <TableCell align="center">Gross</TableCell>
                                    <TableCell align="center">Advance</TableCell>
                                    <TableCell align="center">Balance</TableCell> */}
                                </TableRow>
                            </TableHead>
                            {data && <TableBody>
                                {data.map((row, index) => (
                                    <TableRow
                                        key={index}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell component="th" scope="row">{index + 1}</TableCell>
                                        <TableCell align="center">"row.Column1"</TableCell>
                                        <TableCell align="center"><input type="number" value={row.Column1} name="Column1" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
                                        <TableCell align="center"><input type="number" value={row.Column2} name="Column2" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
                                        <TableCell align="center"><input type="number" value={row.Column3} name="Column3" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
                                        <TableCell align="center"><input type="number" value={row.Column4} name="Column4" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
                                        <TableCell align="center"><input type="number" value={row.Column5} name="Column5" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
                                        <TableCell align="center"><input type="number" value={row.Column6} name="Column6" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
                                        <TableCell align="center"><input type="number" value={row.Column7} name="Column7" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
                                        <TableCell align="center"><input type="number" value={row.Column8} name="Column8" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
                                        <TableCell align="center"><input type="number" value={row.Column9} name="Column9" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
                                        <TableCell align="center"><input type="number" value={row.Column10} name="Column10" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
                                        <TableCell align="center">
                                            <input type="number" value=
                                                // {parseInt(row.Column1) + parseInt(row.Column2) + parseInt(row.Column3) + parseInt(row.Column4) + parseInt(row.Column5)
                                                // + parseInt(row.Column6) + parseInt(row.Column7) + parseInt(row.Column8) + parseInt(row.Column9) + parseInt(row.Column10)}
                                                // {calculateNet(row,index)}
                                                {row.Net}
                                                // onChange={(e) => {alert("dvs") }}
                                                disabled name="Net" className='tablefields' />

                                            {/* {setNet(row,index)} */}
                                            {/* {calculateNet(row, index)} */}
                                        </TableCell>
                                        <TableCell align="center">20</TableCell>
                                        <TableCell align="center"><input type="number" value={row.Advance} name="Advance" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
                                        <TableCell align="center"><input type="number"
                                            value={row.Balance}
                                            disabled name="Balance" readOnly="true" className='tablefields' onChange={(e) => { handleDataChange(e, index) }} /></TableCell>
                                             <TableCell align="center"><FormControlLabel
                                                // value={data?.id}
                                                control={<Checkbox />}
                                                // label={data?.permission_name}
                                                // label="sdv"
                                                // onChange={(e) => { getvalue(e) }}
                                                className='ms-2'
                                                labelPlacement="end"
                                            /></TableCell>

                                        {/* 
                                        "Net": 0.00,
            "VAT": 0.00,
            "Advance": 0.00,
            "Balance": 0.00 */}

                                    </TableRow>
                                ))}
                            </TableBody>}
                        </Table>
                    </TableContainer>
                </DemoContainer>
            </LocalizationProvider >
            {JSON.stringify(Header)}
            {JSON.stringify(data)}
        </>
    )
}
