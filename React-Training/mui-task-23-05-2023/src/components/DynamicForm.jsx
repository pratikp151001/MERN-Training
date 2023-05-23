import React, { useState } from 'react'
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import '../App.css'

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';


export default function DynamicForm() {

  const [fields, setfields] = useState([])
  // const [value,setvalue]=useState({})
  //const [value, setvalue] = useState([])

  // const[display,setdisplay]=useState({})

  const [display, setdisplay] = useState([])

  const AddFields = () => {
    //  alert("S")
    setfields([...fields, ""])
  }
  const handleChange = (index, e) => {
    // console.log(e)
    //  alert("S")
    // let oldValue = [...fields]
    // oldValue[index] = e.target.value
    console.log(e.target.value,index,fields)

// console.log("sss",(fields.map((d,i)=>{
//   console.log(i,index)
//   if(i==index)
//   {
//     console.log("object",d,e.target.value)
//     return e.target.value

//   }
// })))

    setfields(fields.map((d,i)=>{
      console.log(i,index)
      if(i===index)
      {
        console.log("object001")
        return e.target.value

      }
      return d
    }))
    //setfields([...fields, ""])
    //   console.log(e.target.value,e.target.name)
    //   setvalue({...value,[e.target.name]:e.target.value})
  }
  const DisplayValue = () => {
    console.log(fields)
    setdisplay(fields)
  }

  return (
    <div>
      <Container className='maindiv' >
        <h2>Dynamic Form Fields</h2>
      <Grid container spacing={2}>
      <Grid  item xs={6}>
      <Button className='mt-2' variant="contained" onClick={AddFields}>Add Fields</Button>
      </Grid>
      <Grid  item xs={6}>
      <Button  className='mt-4' sx={{ m: 2 }} variant="contained" onClick={DisplayValue}>Dispay Value</Button>
      </Grid>
        {fields.map((field, index) => {
          return (
            <Grid key={index} item xs={4}>
              <TextField id="textField" name={`field${index}`} label={`Enter Value in Field ${index}`} onChange={(e) => handleChange(index, e)} variant="filled" className='field' />
              </Grid>
          )
        })}
      </Grid>
      
      {/* {display.map((i)=>{
                return(<><pre>{i}</pre></>)
            })} */}
            {/* </Container>


<Container> */}
      <TableContainer component={Paper} className='tabledata mb-5 mt-5'>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
            <TableCell align="center">Index</TableCell>
              <TableCell align="center">Task</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {display.map((row, index) => (
              <TableRow
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell align="center">{index}</TableCell>
                <TableCell align="center">{row}</TableCell>

              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      </Container>

    </div>
  )
}
