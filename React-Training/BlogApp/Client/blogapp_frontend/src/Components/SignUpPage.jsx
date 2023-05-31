import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
// import '../App.css'
import { SignUpScheema } from '../Validations/SignUpValidations';
import { useDispatch, useSelector } from 'react-redux';
import UserSignUpAction from '../Redux/Actions/UserSignUpAction';
import { useNavigate, useParams } from 'react-router-dom';
import Loader from './Loader';
import UpdateUserProfile from '../Redux/Actions/UpdateUserProfile';
import image from '../Assets/undraw_secure_login_pdn4.svg'
import image2 from '../Assets/7070629_3293465.jpg'
import './Signup.css'




export default function SignUpPage(props) {
    const nevigate = useNavigate()

    const state = useSelector((state) => state.user)
    console.log("🚀 ~ file: SignUpPage.jsx:15 ~ SignUpPage ~ state:", state)
    const dispatch = useDispatch()
    const [fieldvalue, setfieldvalue] = useState({})

    const params = useParams()
    console.log("🚀 ~ file: SignUpPage.jsx:23 ~ SignUpPage ~ params:", params.id)
    console.log("🚀 ~ file: SignUpPage.jsx:25 ~ SignUpPage ~ state?.signup_data?.status:", state?.signup_data?.status)
    if(params.id==undefined){
    if (state?.signup_data?.status == 200) {
        nevigate('/')
    }
}
    console.log("🚀 ~ file: SignUpPage.jsx:29 ~ useEffect ~ state?.view_profile?.data[0].name:", state?.view_profile?.data[0]?.name)
    useEffect(() => {
        if (params.id != undefined) {
            setfieldvalue({
                ...fieldvalue,
                name: state?.view_profile?.data[0]?.name,
                email: state?.view_profile?.data[0]?.email,
                mobile: state?.view_profile?.data[0]?.mobile,
                password: state?.view_profile?.data[0]?.password,
                pincode: state?.view_profile?.data[0]?.pincode,
                address: state?.view_profile?.data[0]?.address


            })

        }
    }, [state?.view_profile?.data, props])

    const getFieldsData = (e) => {
        setfieldvalue({ ...fieldvalue, [e.target.name]: e.target.value })
    }

    const handleSignUpClcik = async () => {

        const isValid = await SignUpScheema.isValid(fieldvalue)

        if (isValid) {

            if (params.id != undefined) {
                dispatch(UpdateUserProfile(params.id, fieldvalue))
            }
            else {
                // alert("123")
                dispatch(UserSignUpAction(fieldvalue))
            }
            setfieldvalue({})
        }
        else {
            alert("Please enter Valid Details")
        }
    }
    return (
        <>
            <div className="signup">
                {state?.isLoading ? (<Loader />) :
                    <div className="mainDiv pt-5">
                        <Container maxWidth="md" className=' p-3 outerDiv'>
                            <h2 className='p-3 signuptext'>{props.text}</h2>
                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextField name="name" label="Name"
                                                variant="outlined"
                                                value={fieldvalue.name}
                                                onChange={(e) => getFieldsData(e)}
                                                required
                                                className='field m-3' />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField name="email" label="Email"
                                                variant="outlined"
                                                value={fieldvalue.email}
                                                onChange={(e) => getFieldsData(e)}
                                                required
                                                className='field m-3 ' />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField name="password" label="Password"
                                                variant="outlined"
                                                value={fieldvalue.password}
                                                onChange={(e) => getFieldsData(e)}
                                                required
                                                className='field  m-3' />
                                        </Grid>
                                    </Grid>
                                    </Grid>
                                    <Grid item xs={6}>
                                    <img src={image} alt="" className='SignUpimage img-fluid pt-1' />
                                    </Grid>
                                    <Grid item xs={6} className='pt-0'>
                                    <img src={image2} alt="" className='SignUpimage img-fluid pt-1' />
                                    </Grid>
                                    <Grid item xs={6} className='pt-5'>
                                     <Grid item xs={12}>
                                        <Grid item xs={12}>
                                            <TextField name="mobile" label="Mobile"
                                                variant="outlined"
                                                value={fieldvalue.mobile}
                                                onChange={(e) => getFieldsData(e)}
                                                required
                                                className='field m-3' />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField name="address" label="Address"
                                                variant="outlined"
                                                value={fieldvalue.address}
                                                onChange={(e) => getFieldsData(e)}
                                                required
                                                className='field m-3' />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField name="pincode" label="Pincode"
                                                variant="outlined"
                                                value={fieldvalue.pincode}
                                                onChange={(e) => getFieldsData(e)}
                                                required
                                                className='field m-3' />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                            <button type='submit' variant="contained" onClick={() => { handleSignUpClcik() }} name={props.text} className='m-3'>{props.text}</button>


                        </Container >
                        {JSON.stringify(fieldvalue)}
                    </div>
                }
            </div>
        </>
    )
}
