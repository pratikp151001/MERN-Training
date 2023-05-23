import React from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../App.css'
import { useState } from 'react';


export default function AddToto() {

    const [task,setTask]=useState({})

    const handleChange=(e)=>{
        setTask({...task,[e.target.name]:e.target.value})
    }

    const AddTask=()=>{
        console.log(task)
    }
    return (
        <>
            <div className="addTaskComponent mt-5 pb-5" align="center" >
                <h2 className='mb-3' >Add Task</h2>
                <div className="Container" >
                    <Grid container spacing={2}>
                        <Grid item xs={10}>
                        <TextField id="task" label="Enter Task You Want to Enter" name='task' variant="filled" className='addtaskField' onChange={(e)=>{handleChange(e)}} />
                        </Grid>
                        <Grid item xs={2}  align="start">
                        <Button variant="contained" className='text-start' onClick={AddTask}>Contained</Button>
                        </Grid>
                    </Grid>

                </div>
                <pre>{JSON.stringify(task)}</pre>

 
            </div>

        </>
    )
}
