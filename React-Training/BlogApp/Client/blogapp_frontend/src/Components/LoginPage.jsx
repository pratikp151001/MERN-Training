import React, { useState } from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import { LogInScheema } from '../Validations/LoginValidations';
import { useDispatch, useSelector } from 'react-redux';
import UserLogIn from '../Redux/Actions/UserLoginAction';
import { useNavigate } from 'react-router-dom';
import Loader from './Loader';
import './Login.css'
import image from '../Assets/undraw_secure_login_pdn4.svg'

export default function LoginPage() {
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const state = useSelector((state) => state.user)

    console.log("🚀 ~ file: LoginPage.jsx:14 ~ LoginPage ~ state:", state)

    if (state?.login_data?.status == 200 && localStorage.getItem('token')) {
        navigate('/') 
    }
    const [formvalue, setformvalue] = useState({})

    const getFieldsData = (e) => {
        console.log("QQQQQQQQQQQQQQQQQQQQQ",formvalue)
        setformvalue({ ...formvalue, [e.target.name]: e.target.value })
    }

    const handleLoginclcik = async () => {

        const isValid = await LogInScheema.isValid(formvalue)

        if (isValid) {
            // alert("123")
            dispatch(UserLogIn(formvalue))
            setformvalue({})
        }
        else {
            alert("Please enter Valid Details")
        }

    }

    const gotoSignup = () => {
        // alert("DSV")
        navigate('/signup')
    }

    return (
        <>
            {
                state?.isLoading ? (<Loader />) :
                    // <Grid container spacing={2}>
                    //     <Grid item xs={8}>
                    <div className="mainDiv pt-5">
                        <Container maxWidth="md" className=' p-3 outerDiv p-5'>

                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <h2 className='p-3 loginName'>Login </h2>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField name="email" label="Email"
                                                variant="outlined"
                                                onChange={(e) => getFieldsData(e)}
                                                required
                                                value={formvalue.email}
                                                className='field m-3 ' />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField name="password" label="Password"
                                                variant="outlined"
                                                onChange={(e) => getFieldsData(e)}
                                                required
                                                value={formvalue.password}
                                                className='field  m-3' />
                                        </Grid>
                                    </Grid>
                                    <button variant="contained" onClick={() => { gotoSignup() }} name="login" className='m-3 justify-content-center'>GO TO SIGN UP</button>
                                    <button type='submit' variant="contained" onClick={() => { handleLoginclcik() }} name="login" className='m-3'>Log In</button>
                                </Grid>
                                <Grid item xs={6}>
                                    <img src={image} alt="" className='logInimage img-fluid pt-5' />
                                </Grid>
                            </Grid>
                        </Container>
                        {JSON.stringify(formvalue)}
                    </div >

            }

        </>
    )
}
