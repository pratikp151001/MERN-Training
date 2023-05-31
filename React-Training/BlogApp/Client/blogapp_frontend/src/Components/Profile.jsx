import React from 'react'
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';
// import Container from '@mui/material/Container';
// import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import image from '../Assets/Profile Interface-rafiki.svg'



export default function Profile() {

  const state = useSelector((state) => state.user)
  console.log("🚀 ~ file: Profile.jsx:9 ~ Profile ~ state:", state?.view_profile)
  return (
    <>
      {/* {state?.isLoading ? (<Loader/>): */}
      <div className="mainDiv pt-5">
        <Container maxWidth="md" className=' p-3 outerDiv'>
              <h2 className='p-3'>{state?.view_profile?.data[0]?.name} Profile</h2>
              <div class="card" >
          <Grid container spacing={2}>
            <Grid item xs={6}>
                <div class="card-body">
                  <h4 class="card-title text-start ms-5 ps-3 pt-5">Name:<b>{state?.view_profile?.data[0]?.name}</b></h4>
                  <h4 class="card-title text-start ms-5 ps-3 pt-5">Email:<b>{state?.view_profile?.data[0]?.email}</b></h4>
                  <h4 class="card-title text-start ms-5 ps-3 pt-5">Address:<b>{state?.view_profile?.data[0]?.address}</b></h4>
                  <h4 class="card-title text-start ms-5 ps-3 pt-5">Moblie:<b>{state?.view_profile?.data[0]?.mobile}</b></h4>
                  <h4 class="card-title text-start ms-5 ps-3 pt-5">PinCode:<b>{state?.view_profile?.data[0]?.pincode}</b></h4>
                  {/* <h4 class="card-title">{state[0]?.id}</h4>
              <h6 class="card-subtitle mb-2 text-muted">Category: {state?.data?.data[0]?.category}</h6>
              <p class="card-text"> <h4 class="card-title">Description: {state?.data?.data[0]?.description}</h4></p> */}

                </div>
            </Grid>
            <Grid item xs={6}>
            <img src={image} alt="" className='profileimage img-fluid pt-1' />
            </Grid>
          </Grid>
              </div>

        </Container>
      </div>
      {/* } */}


    </>
  )
}
