import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Container from '@mui/material/Container';
import { useParams } from 'react-router-dom';
import FetchSingleBlogDataAction from '../Redux/Actions/FetchSingleBlogData';
import Loader from './Loader';


export default function ViewBlogData() {

  const params=useParams()
  console.log("🚀 ~ file: ViewBlogData.jsx:10 ~ ViewBlogData ~ params:", params)
  
  const dispatch=useDispatch()
  // dispatch(FetchSingleBlogDataAction(id))
  useEffect(()=>{
    dispatch(FetchSingleBlogDataAction(params?.id))

  },[])

  const state = useSelector((state) => state?.singleblog)
 // console.log("🚀 ~ file: ViewBlogData.jsx:6 ~ ViewBlogData ~ state:", state)
   console.log("🚀 ~ file: ViewBlogData.jsx:6 ~ ViewBlogData ~ state:", state)
  return (
    <>
    {state?.isLoading ? (<Loader/>):
      <div className="mainDiv pt-5">
        <Container maxWidth="md" className=' p-3 outerDiv'>
          <h2 className='p-3'>View Blog</h2>
          <div class="card" >
            <div class="card-body">
              <h5 class="card-title">{state?.data?.data[0]?.title}</h5>
              {/* <h5 class="card-title">{state[0]?.id}</h5> */}
              <h6 class="card-subtitle mb-2 text-muted">Category: {state?.data?.data[0]?.category}</h6>
              <p class="card-text"> <h5 class="card-title">Description: {state?.data?.data[0]?.description}</h5></p>
             
            </div>
          </div>


        </Container>
      </div>
}


    </>
  )
}
