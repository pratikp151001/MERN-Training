import React from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useState,useEffect } from 'react';
import Button from '@mui/material/Button';



export default function TaskList(props) {
console.log("firstaa",props.data)

const [selectedRowIds, setSelectedRowIds] = useState([]);
const [rows,setrows]=useState(props.data)
    
     
   // let rows = props.data

    const columns = [
        { field: 'id', headerName: 'Id', width: 200 },
        { field: 'Task', headerName: 'Task', width: 800 }

    ]
    useEffect(() => { setrows(props.data)}, [] )

    // const handleChange = (item) => {
    //     console.log("AAAAAA",item)
    //     setSelectedRowIds(oldArray=>[...oldArray,oldArray.push(item/85)])
    //   ///  setdeleteRows([...deleteRows,...rows.filter((r)=>selectedRowIds.filter((sr)=>sr.id=r.id))])
    // }
    const removetask = () => {
        console.log("PPPPPPPPPPPPPPPPPPP",rows)
        console.log("QQQQQAAAAA", selectedRowIds)

        setrows(rows.filter((r)=>(!selectedRowIds.includes(r.id))))
      


      //  console.log("QQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQQ",rows)
        // alert("Button Click")
        // // console.log(selectedRowIds)

        // for (let i = 0; i < selectedRowIds.length; i++) {
        //     index = rows.filter(data => data.id !== selectedRowIds[i]);
        //     console.log("LLLLL", index)

        //     //   rows.splice(index, 1);

        // }
        // rows = index
        //     console.log(selectedRowIds.indexOf(1684765572179))

        //    rows=rows.filter(r=>!selectedRowIds.indexOf(r)==-1)
        //     console.log("EEEEEEEEEEEEEEEEEEEERRRRRRRRRRRRRRRRRRRRr",rows)

    }
    //  console.log(rows)
    return (
        <>
            <h1>Listed Task</h1>
            <DataGrid
                rows={rows}
                columns={columns}
                checkboxSelection
                onRowSelectionModelChange={ids => setSelectedRowIds(ids)}



            />
            <Button variant="contained" onClick={removetask}>Remove Task</Button>


        </>
    )
}
