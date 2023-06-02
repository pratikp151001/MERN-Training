import React, { useEffect } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';
import Loader from './Loader';
import { useDispatch, useSelector } from 'react-redux';
import FetchAllUsers from '../Redux/Actions/FetchAllUsers';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteUser from '../Redux/Actions/UserDeleteAction';
import FetchProfile from '../Redux/Actions/FetchSingleUserProfile';
import { useNavigate } from 'react-router-dom';
import PERMISSIONS from '../Permissions/permission';
import PermissionCheck from '../Permissions/PermissionCheck';

export default function Users() {
  const dispatch = useDispatch()
  const nevigate = useNavigate()
  const state = useSelector((state) => state.user)
  console.log("🚀 ~ file: Users.jsx:16 ~ Users ~ state:", state)
  useEffect(() => {
    dispatch(FetchAllUsers())

  }, [state?.delted_user?.data])

  // const hndleClcik=()=>{
  //   alert("SCDV")
  // }
  // dispatch(FetchAllUsers())

  const gotoUpdateUser=(id)=>{
    dispatch(FetchProfile(id))
    nevigate(`/updateprofile/${id}`)
  }

  return (
    <div className="App">
      <div className="mainDiv">
        {state?.isLoading ? (<Loader></Loader>) :
          <div className='container pt-3'>
            <h2 className='mb-3'>Users</h2>
            <div className='row justify-content-center'>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">Email</TableCell>
                      <TableCell align="center">Mobile</TableCell>
                      <TableCell align="center">Address</TableCell>
                      <TableCell align="center">PinCode</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {state?.all_users?.data?.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >

                        <TableCell align="center">{row.name}</TableCell>
                        <TableCell align="center">{row.email}</TableCell>
                        <TableCell align="center">{row.mobile}</TableCell>
                        <TableCell align="center">{row.address}</TableCell>
                        <TableCell align="center">{row.pincode}</TableCell>
                        <TableCell align="center">
                          {/* {console.log(PermissionCheck("RESULT:>",PERMISSIONS.VIEW_POST_PERMISSION))} */}
                         {PermissionCheck(PERMISSIONS.DELETE_USER_PERMISSION)? <button variant="contained" className='ms-3' onClick={() => { dispatch(DeleteUser(row.id)) }}><DeleteForeverIcon /></button>:`` }
                         {PermissionCheck(PERMISSIONS.VIEW_USER_PERMISSION)? <button variant="contained" className='ms-3' onClick={() => { dispatch(FetchProfile(row.id)); nevigate(`/userprofile/${row.id}`) }}><VisibilityIcon /></button> :``}
                         {PermissionCheck(PERMISSIONS.EDIT_USER_PERMISSION)?<button variant="contained" className='ms-3'
                          onClick={() => {nevigate(`/updateprofile/${row.id}`); dispatch(FetchProfile(row.id));}} 
                        // onClick={()=>{gotoUpdateUser(row.id)}}
                         ><EditIcon /></button>:``} 
                         </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>



            </div>

          </div>
        }
      </div>
    </div>

  )
}
