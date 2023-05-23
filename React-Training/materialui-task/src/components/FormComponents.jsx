import React from 'react'
import { Grid } from '@mui/material';
import { TextField, Container, Typography, Button } from '@mui/material'
import '../App.css'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import { useState } from 'react';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function FormComponents() {

    const [formdata, setformdata] = useState({
        FirstName: "",
        LastName: "",
        Address: "",
        Email: "",
        City: "",
        State: "",
        Country: "",
        Birthday: "",
        Zipcode: ""
    })
    const [Data, setData] = useState([])

    const handleChange = (e) => {
        setformdata({ ...formdata, [e.target.name]: e.target.value })
    }
    const selectedDate = (e) => {
        console.log(e)
        let birthDate=e.$D+"-" +(e.$M+1)+"-"+ e.$y
        
        setformdata({ ...formdata, Birthday:birthDate })
    }

    const submitData = () => {
      //  alert("buttonClicked")
       // console.log( "inside submit",formdata)
        setData(oldArray=>[...oldArray,formdata])
    }
   

    return (
        <>
            <Container maxWidth="lg" centered >
                <Typography align="center"><h1> Registration Form</h1></Typography>
                <Grid container spacing={2} className='divcontainer'>
                    <Grid item xs={6}>
                        {/* <TextField id="FirstName" label="FirstName" variant="outlined" className='textfield' /> */}
                        <TextField
                            id="FirstName"
                            name='FirstName'
                            onChange={(e) => handleChange(e)}
                            className='textfield'
                            label="FirstName"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        {/* <TextField id="LastName" label="LastName" variant="outlined" className='textfield' /> */}
                        <TextField
                            id="LastName"
                            name='LastName'
                            onChange={(e) => handleChange(e)}
                            className='textfield'
                            label="LastName"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <AccountCircle />
                                    </InputAdornment>
                                ),
                            }}
                            variant="standard"
                        />
                    </Grid>
                    <Grid item xs={8}>
                        <TextField id="Address" name='Address' label="Address" variant="outlined" className='textfield' onChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="Email" name='Email' label="Email" variant="outlined" className='textfield' onChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="City" name='City' label="City" variant="outlined" className='textfield' onChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="State" name='State' label="state" variant="outlined" className='textfield' onChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={4}>
                        <TextField id="Country" name='Country' label="Country" variant="outlined" className='textfield' onChange={(e) => handleChange(e)} />
                    </Grid>
                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DateField']}>
                                <DatePicker label="Basic date picker" className='textfield' id="Birthday" onChange={(e) => selectedDate(e)} />
                            </DemoContainer>
                        </LocalizationProvider>

                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="Zipcode" name='Zipcode' type='number' label="Zipcode" variant="outlined" className='textfield' onChange={(e) => handleChange(e)} />

                    </Grid>
                    <Grid item className='submitbtn textfield' xs={12} >
                        <Button align="center" variant="contained" onClick={(e) => submitData(e)}>Submit</Button>

                    </Grid>


                </Grid>




                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow className='row'>
                                <TableCell>First Name</TableCell>
                                <TableCell align="right">Last Name</TableCell>
                                <TableCell align="right">Address</TableCell>
                                <TableCell align="right">Email</TableCell>
                                <TableCell align="right">Country</TableCell>
                                <TableCell align="right">State</TableCell>
                                <TableCell align="right">City</TableCell>
                                <TableCell align="right">Birthday</TableCell>
                                <TableCell align="right">Zipcode</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {Data.map((row,index) => (
                                
                                <TableRow
                                    key={index}
                                    className='row'
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.FirstName}
                                    </TableCell>
                                    <TableCell align="right">{row.LastName}</TableCell>
                                    <TableCell align="right">{row.Address}</TableCell>
                                    <TableCell align="right">{row.Email}</TableCell>
                                    <TableCell align="right">{row.Country}</TableCell>
                                    <TableCell align="right">{row.State}</TableCell>
                                    <TableCell align="right">{row.City}</TableCell>
                                    <TableCell align="right">{row.Birthday}</TableCell>
                                    <TableCell align="right">{row.Zipcode}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>

            </Container>

        </>
    )
}
