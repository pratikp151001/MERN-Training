import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import './SignUp.css'
import image from '../../Assests/undraw_login_re_4vu2.svg'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import UserRegistartionAction from '../../Redux/Actions/UserRegistrationAction';
import { SignUpScheema } from '../../Validations/SignUpValidations';
import Loader from '../Loader/Loader';
import UserUpdateProfileAction from '../../Redux/Actions/UpdateProfileAction'

export default function SignUp(props) {
    const nevigate = useNavigate()
    const [formvalue, setformvalue] = useState({})
    const [disable, setdisable] = useState(false)
    const dispatch = useDispatch()
    const state = useSelector((state) => state.user)
    const Url = window.location.href
    //GO To Log In Page
    const gotoLogin = () => {
        nevigate('/login')
    }


    //On Change Function
    const getFieldsData = (e) => {
        console.log("QQQQQQQQQQQQQQQQQQQQQ", formvalue)
        setformvalue({ ...formvalue, [e.target.name]: e.target.value })
    }


    //SignUp btn Clcik
    const clickSignup = async () => {

        const isValid = await SignUpScheema.isValid(formvalue)

        if (isValid) {

            dispatch(UserRegistartionAction(formvalue,nevigate))
        }
        else {
            alert("Please enter Valid Details")
        }
        setformvalue({})

    }

    //After Sign up nevigate to login
    // if (!Url.includes("profile")) {
    //     if (state?.registerUser_data) {
    //         nevigate('/login')
    //     }
    // }
    // else{
    //     if (state?.updated_profile) {
    //         nevigate('/dashboard')
    //     }
    // }

    //Handle Update Profile
    const handleUpdateProfile = async () => {
        const isValid = await SignUpScheema.isValid(formvalue)

        if (isValid) {

            dispatch(UserUpdateProfileAction(formvalue,nevigate))
        }
        else {
            alert("Please enter Valid Details")
        }
        setformvalue({})
    }

    useEffect(() => {
        if (Url.includes("profile")) {
            setdisable(true)

            setformvalue({
                ...formvalue,
                name: state?.viewprofile_data?.name,
                email: state?.viewprofile_data?.email,
                mobile: state?.viewprofile_data?.mobile,
                password: state?.viewprofile_data?.password


            })

        }
    }, [state?.viewprofile_data, props])

    return (
        <>
            {state.isLoading ? (<Loader />) :
                <div className="mainDiv pt-5">
                    <Container maxWidth="md" className=' p-3 outerDiv p-5'>

                        <h2 className='p-3 SignupName'>{props.text} </h2>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField name="name" label="Name"
                                            variant="outlined"
                                            onChange={(e) => getFieldsData(e)}
                                            required
                                            value={formvalue.name}
                                            className='field m-3 ' />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField name="email" label="Email"
                                            variant="outlined"
                                            onChange={(e) => getFieldsData(e)}
                                            required
                                            value={formvalue.email}
                                            disabled={disable}
                                            className='field  m-3' />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField name="mobile" label="Mobile"
                                            variant="outlined"
                                            onChange={(e) => getFieldsData(e)}
                                            required
                                            value={formvalue.mobile}
                                            className='field  m-3' />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField name="password" label="Password"
                                            type='password'
                                            variant="outlined"
                                            onChange={(e) => getFieldsData(e)}
                                            required
                                            disabled={disable}
                                            value={formvalue.password}
                                            className='field  m-3' />
                                    </Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={6}>
                                <img src={image} alt="" className='logInimage img-fluid pt-5' />

                            </Grid>
                        </Grid>
                        {!Url.includes("profile") ? <><Button variant="contained" onClick={gotoLogin} name="login" className='m-3 justify-content-center'>GO TO LogIn</Button>
                            <Button onClick={clickSignup} variant="contained" name="login" className='m-3'>Sign Up</Button></>
                            : <Button variant="contained" onClick={handleUpdateProfile} name="updateProfile" className='m-3'>Update Profile</Button>
                        }
                    </Container>
                    {/* {JSON.stringify(formvalue)} */}
                </div >
            }


        </>
    )
}
