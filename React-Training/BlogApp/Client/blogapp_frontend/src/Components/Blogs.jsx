import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import BlogFetchAction from '../Redux/Actions/BlogFetchAction'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Loader from './Loader';
import Button from '@mui/material/Button';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import BlogDelteAction from '../Redux/Actions/BlogDeleteAction';
import FetchSingleBlogDataAction from '../Redux/Actions/FetchSingleBlogData';
import { useNavigate } from 'react-router-dom';
import PERMISSIONS from '../Permissions/permission';
import PermissionCheck from '../Permissions/PermissionCheck';

export default function Blogs() {
  const navigate = useNavigate()


  const dispatch = useDispatch()
  const stateDelete = useSelector((state) => state.deleteblogs)
  console.log("🚀 ~ file: Blogs.jsx:29 ~ Blogs ~ stateDelete:", stateDelete)
  useEffect(() => {
    dispatch(BlogFetchAction())
  }, [stateDelete.data])
  const state = useSelector((state) => state.blogs)
  console.log("🚀 ~ file: Blogs.jsx:30 ~ Blogs ~ state:", state)


  // const handleViewClcick=(id)=>{
  //   alert("DS")

  //   window.open("blogdata", "_blank", "noreferrer");
  // }


  return (

    <div className="App">
      <div className="mainDiv">
        {state?.isLoading ? (<Loader></Loader>) :
          <div className='container pt-3'>
            <h2 className='mb-3'>Blogs</h2>
            <div className='row justify-content-center'>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell align="center">Id</TableCell>
                      <TableCell align="center">Description</TableCell>
                      <TableCell align="center">Title</TableCell>
                      <TableCell align="center">Category</TableCell>
                      <TableCell align="center">Actions</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {state?.data.data?.map((row, index) => (
                      <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >

                        <TableCell align="center">{row.id}</TableCell>
                        <TableCell align="center">{row.description}</TableCell>
                        <TableCell align="center">{row.title}</TableCell>
                        <TableCell align="center">{row.category}</TableCell>
                        <TableCell align="center">
                        {PermissionCheck(PERMISSIONS.DELETE_POST_PERMISSION)?<button variant="contained" className='ms-3' onClick={() => { dispatch(BlogDelteAction(row.id)) }}><DeleteForeverIcon /></button>:``}
                        {PermissionCheck(PERMISSIONS.VIEW_POST_PERMISSION)? <button variant="contained" className='ms-3' onClick={() => { dispatch(FetchSingleBlogDataAction(row.id)); navigate(`/blogdata/${row.id}`) }}><VisibilityIcon /></button>:``}
                        {PermissionCheck(PERMISSIONS.EDIT_POST_PERMISSION)? <button variant="contained" className='ms-3' onClick={() => { dispatch(FetchSingleBlogDataAction(row.id)); navigate(`/updateblog/${row.id}`) }}><EditIcon /></button>:``}
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
