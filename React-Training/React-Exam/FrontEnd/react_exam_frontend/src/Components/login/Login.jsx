import React, { useState } from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import image from '../../Assests/undraw_secure_login_pdn4.svg'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { LogInScheema } from '../../Validations/LoginValidations';
import UserLoginAction from '../../Redux/Actions/UserLoginAction'
import Loader from '../Loader/Loader';

export default function Login() {

    const nevigate = useNavigate()
    const dispatch = useDispatch()
    const state = useSelector((state) => state.user)
    const [formvalue, setformvalue] = useState({})

    //Nevigate to Dashboard
    // if (state?.loginUser_data && localStorage.getItem('token')) {

    //     Swal.fire({
    //         position: 'top-end',
    //         icon: 'success',
    //         title: 'Login Successfull',
    //         showConfirmButton: false,
    //         timer: 1500
    //       })
    //     nevigate('/dashboard')
    // }

    //Goto SignUp
    const gotoSignUp = () => {
        nevigate('/')
    }

    //On Change Fun
    const getFieldsData = (e) => {

        setformvalue({ ...formvalue, [e.target.name]: e.target.value })
    }

    //LogIn Click
    const loginClick = async () => {
        const isValid = await LogInScheema.isValid(formvalue)

        if (isValid) {
            dispatch(UserLoginAction(formvalue,nevigate))
        }
        else {
            alert("PLEASE ENTER VALID DETAILS")
        }
        setformvalue({})
    }

    //After Login nevigate to Home

    return (
        <>
            {state.isLoading ? (<Loader />) :
                <div className="mainDiv pt-5">
                    <Container maxWidth="md" className=' p-3 outerDiv p-5'>

                        <h2 className='SignupName'>Login </h2>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <img src={image} alt="" className='logInimage img-fluid pt-2' />

                            </Grid>
                            <Grid item xs={6} className='mt-5 pt-5'>
                                <Grid container spacing={2}>

                                    <Grid item xs={12}>
                                        <TextField name="email" label="Email"
                                            variant="outlined"
                                            onChange={(e) => getFieldsData(e)}
                                            required
                                            // value={formvalue.password}
                                            className='field  m-3' />
                                    </Grid>

                                    <Grid item xs={12}>
                                        <TextField name="password" label="Password"
                                            variant="outlined"
                                            onChange={(e) => getFieldsData(e)}
                                            required
                                            // value={formvalue.password}
                                            className='field  m-3' />
                                    </Grid>
                                </Grid>
                                <Button variant="contained" name="signUp" onClick={gotoSignUp} className='m-3 justify-content-center'>GO TO SIGN UP</Button>
                                <Button onClick={loginClick} variant="contained" name="login" className='m-3'>Log In</Button>
                            </Grid>

                        </Grid>
                    </Container>
                    {/* {JSON.stringify(formvalue)} */}
                </div >
            }

        </>
    )
}
