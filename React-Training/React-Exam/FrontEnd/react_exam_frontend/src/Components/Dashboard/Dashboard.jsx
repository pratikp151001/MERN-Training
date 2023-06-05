import React, { useState } from 'react'
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Grid from '@mui/material/Grid';
import dayjs from 'dayjs';

export default function Dashboard() {

    const [date,setdate]=useState()
   const  handlemonthChange=(e) => {
       console.log("🚀 ~ file: Dashboard.jsx:12 ~ handlemonthChange ~ e:", e.$M)
       console.log("🚀 ~ file: Dashboard.jsx:12 ~ handlemonthChange ~ e:", e.$y)
    setdate(dayjs( new Date(e.$y, e.$M + 1, 0)))
   
       console.log("🚀 ~ file: Dashboard.jsx:15 ~ handlemonthChange ~  new Date(year, month + 1, 0):",  new Date(e.$y, e.$M + 1, 0))
   }
    return (
        <>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker', 'DatePicker', 'DatePicker']}>
                    {/* <DatePicker label={'"Choose Month"'} views={['month', 'year']} />
                    <DatePicker label={"Select Date"} /> */}


                    <Grid container spacing={2}>
                        <Grid item xs={12} className='text-start'>
                            Monthly Invoice List
                        </Grid>
                        <Grid item xs={7} className='text-start'>
                            <Grid container spacing={2}>
                                <Grid item xs={3}>
                                    <b>Choose Month</b>
                                </Grid>

                                <Grid item xs={5}>

                                    <DatePicker label={'"Choose Month"'} views={['month', 'year']}  onChange={(e)=>{handlemonthChange(e)}} />
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={7}>
                            <Grid container spacing={2} className='text-start'>
                                <Grid item xs={3}>
                                    <b>Date</b>
                                </Grid>

                                <Grid item xs={5}>

                                    <DatePicker label={"Select Date"}  value={date}/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={5}>
                            <Grid container spacing={2} className='text-start'>
                                <Grid item xs={3}>
                                    <b>Invoice Reference</b>
                                </Grid>

                                <Grid item xs={5}>

                                    <DatePicker label={'"Choose Month"'} views={['month', 'year']} />

                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </DemoContainer>
            </LocalizationProvider >

            {JSON.stringify(date)}
        </>
    )
}
