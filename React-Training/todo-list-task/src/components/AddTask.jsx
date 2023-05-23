import React from 'react'
import Button from '@mui/material/Button';
import { TextField, Container,Grid,Typography} from '@mui/material'
import { useState } from 'react';
import TaskList from './TaskList';


export default function Task() {
  const [task,settask]=useState("")

  const [tasklist,settasklist]=useState([])

  const handleChange=(e)=>{
    settask(e.target.value)
  }
  const addTask=()=>{
    settasklist(oldArray=>[...oldArray,{Task:task,id:Date.now()}])
  }
  return (
    <>
      
      <Typography align="center"><h1> ToDo List</h1></Typography>
        <Grid container spacing={2} className='divcontainer'>
          <Grid item xs={8}>
            {/* <TextField id="FirstName" label="FirstName" variant="outlined" className='textfield' /> */}
            <TextField id="AddTaskName" name='AddTaskName' label="Add Task Name" variant="standard" className='textfield'  onChange={(e)=>{handleChange(e)}} />

          </Grid>
          <Grid item xs={4}>
          <Button variant="contained" onClick={addTask}>Add Task</Button>
          </Grid>
        </Grid>

        <TaskList data={tasklist}/>
     
    </>
  )
}
