import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useDispatch, useSelector } from 'react-redux';
import FetchALLPermission from '../Redux/Actions/GetAllPermissions';
import Grid from '@mui/material/Grid';
import axios from 'axios';
import ADDROLE from '../Redux/Actions/AddRoleAction';



export default function Editroles() {

    const [checkedPermission, setcheckedPermission] = useState([])
    const [role,setrole]=useState()

    const dispatch = useDispatch()
    const state = useSelector((state) => state.admin)
    console.log("🚀 ~ file: Editroles.jsx:14 ~ Editroles ~ state:", state?.permissions?.data[0].id)
    useEffect(() => {
        dispatch(FetchALLPermission())
    }, [])
    const getvalue = (e) => {

        console.log("🚀 ~ file: Editroles.jsx:30 ~ getvalue ~ e:", e)
        const { checked, value } = e.target
        console.log("🚀 ~ file: Editroles.jsx:25 ~ getvalue ~ value:", value)
        console.log("🚀 ~ file: Editroles.jsx:25 ~ getvalue ~ checked:", checked)
        if (checked) {
            setcheckedPermission([...checkedPermission, value])
        }
        else {
            setcheckedPermission([...checkedPermission.filter(per => per !== value)])
        }




        // alert(e.target.checked)
        console.log("🚀 ~ file: Editroles.jsx:14 ~ getvalue ~ e.target.label:", e.target.label)

    }

    const AddRole=async ()=>{

        const data={
            role_name:role,
            permissionIds:checkedPermission
        }
        // const addedRole=await axios.post("http://localhost:9999/addroles",data)
        // console.log("🚀 ~ file: Editroles.jsx:52 ~ AddRole ~ addedRole:", addedRole)

        dispatch(ADDROLE(data))
    }


    return (
        <>
            <div className="mainDiv pt-5">
                <Container maxWidth="md" className='p-3 outerDiv'>
                    <h2 className='p-3'><b>Add Roles</b></h2>
                    <TextField name="rolename" label="rolename"
                        variant="outlined" 
                        required
                        onChange={(e) => { setrole(e.target.value) }}
                        className='field m-3 mb-5' />
                    <Grid container spacing={2} className='d-flex justify-content-start '> {/* Updated className */}
                        {state?.permissions?.data.map((data, index) => (
                            <Grid item xs={5} key={index} className='text-start ms-5'> {/* Moved the key attribute to the Grid item */}

                                {/* {console.log(data)} */}
                                <FormControlLabel
                                    value={data?.id}
                                    control={<Checkbox />}
                                    label={data?.permission_name}
                                    onChange={(e) => { getvalue(e) }}
                                    labelPlacement="end"
                                />

                            </Grid>
                        ))}
                    </Grid>
                    <button onClick={()=>{AddRole()}}>ADD Role</button>
                </Container>
            </div>
            {JSON.stringify(checkedPermission)}
            {JSON.stringify(role)}
        </>
    )
}
