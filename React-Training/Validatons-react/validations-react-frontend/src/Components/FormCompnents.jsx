import React, { useRef, useState } from 'react'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import '../Components/FormComponents.css'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import dayjs from 'dayjs';
import axios from 'axios';
import Loader from './Loader';


export default function FormCompnents() {
    // const inputRef = useRef(null);

    const [formvalue, setformvalue] = useState({
        color: "Black"
    })
    const [error, seterror] = useState({})
    const [checkedPermission, setcheckedPermission] = useState([])
    const [file, setfile] = useState()
    const [loding, setloading] = useState(false)

    const getvalue = (e) => {
        const { name, value } = e.target
        console.log("🚀 ~ file: FormCompnents.jsx:27 ~ getvalue ~ value:", value)
        console.log("🚀 ~ file: FormCompnents.jsx:27 ~ getvalue ~ name:", name)

        if (value == "" || value == undefined) {
            console.log("🚀 ~ file: FormCompnents.jsx:31 ~ getvalue ~ value:", "value")

            seterror({ ...error, [name]: `Please  Enter ${name}` })
            // setformvalue({ ...formvalue, [name]: "" })
            const { [name]: any, ...restvalues } = formvalue
            setformvalue(restvalues)

        }

        else if (name == "mobile") {
            const mobileRegex = /^\+?[1-9][0-9]{9}$/
            if (mobileRegex.test(value)) {
                setformvalue({ ...formvalue, [name]: value })
                const { [name]: any, ...resterror } = error
                seterror(resterror)
            }
            else {
                seterror({ ...error, [name]: `Please  Enter 10 digits` })
            }
        }
        else if (name == "email") {
            const emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
            if (emailregex.test(value)) {
                setformvalue({ ...formvalue, [name]: value })
                const { [name]: any, ...resterror } = error
                seterror(resterror)
            }
            else {
                seterror({ ...error, [name]: `Please  Enter Valid Email` })
            }
        }
        else if (value.length < 3) {
            console.log("🚀 ~ file: FormCompnents.jsx:69 ~ getvalue ~ value.length:", value.length)
            setformvalue({ ...formvalue, [name]: value })
            // const { [name]: any, ...resterror } = error
            seterror({ ...error, [name]: "Too short Please enter min 3  character" })
        }
        else {
            const { [name]: any, ...resterror } = error
            seterror(resterror)
            setformvalue({ ...formvalue, [name]: value })
        }

    }

    //save Details

    console.log("🚀 ~ file: FormCompnents.jsx:78 ~ savDetails ~ formvalue:", formvalue)

    const savDetails = async () => {
        console.log("🚀 ~ file: FormCompnents.jsx:75 ~ savDetails ~ checkedPermission:", checkedPermission)
        const fieldvalues = Object.values(formvalue)
        // setformvalue({ ...formvalue, hoobies: checkedPermission })



        // setformvalue((pre))
        console.log("🚀 ~ file: FormCompnents.jsx:92 ~ setformvalue ~ newobj:", file)


        console.log("🚀 ~ file: FormCompnents.jsx:43 ~ constsavDetails ~ errors:", fieldvalues.length)
        console.log("🚀 ~ file: FormCompnents.jsx:46 ~ savDetails ~ error:", error)
        console.log("🚀 ~ file: FormCompnents.jsx:62 ~ savDetails ~ Object.keys(formvalue).length:", Object.keys(formvalue).length)
        console.log("🚀 ~ file: FormCompnents.jsx:83 ~ savDetails ~ formvalue?.hoobies?.length:", formvalue?.hoobies?.length)
        if (Object.keys(formvalue).length >= 8 && checkedPermission.length && file) {
            alert("Good")

            let formData = new FormData()
            formData.append("file", file)
            formData.append("firstname", formvalue.firstname)
            formData.append("lastname", formvalue.lastname)
            formData.append("email", formvalue.email)
            formData.append("password", formvalue.password)
            formData.append("birthday", formvalue.birthday)
            formData.append("gender", formvalue.gender)
            formData.append("mobile", formvalue.mobile)
            formData.append("hobbies", JSON.stringify(checkedPermission))
            formData.append("color", formvalue.color)


            console.log("🚀 ~ file: FormCompnents.jsx:111 ~ savDetails ~ formData:", formData)
            const resp = axios.post("http://localhost:5555/registeruser", formData).then(

            )
            console.log("🚀 ~ file: FormCompnents.jsx:111 ~ savDetails ~ resp:", resp)

            seterror({})
            setformvalue({})

        }
        else {
            // seterror({
            //     firstname: "Please Enter firstName",
            //     lastname: "Please Enter LastName",
            //     email: "Please Enter Email",
            //     password: "Please Enter email",
            //     mobile: "Please Enter Mobile no.",
            //     birthday: "Please enter birthday",
            //     hoobies: "Please Check atleast 1",
            //     gender: "Please Select gender",
            //     file: "Please Select File"
            // })
            let Errors = {}
            if (!Object.keys(formvalue).includes('firstname')) {
                console.log("object")
                Errors = { firstname: "Please Enter firstName" }
            }
            if (!Object.keys(formvalue).includes('lastname')) {
                console.log(error)
                Errors.lastname = "Please Enter LastName"
            }
            if (!Object.keys(formvalue).includes('email')) {
                console.log(error)
                Errors.email = "Please Enter Email"
            }
            if (!Object.keys(formvalue).includes('password')) {
                console.log(error)
                Errors.password = "Please Enter Password"
            }
            if (!Object.keys(formvalue).includes('birthday')) {
                console.log(error)
                Errors.birthday = "Please Enter birthday"
            }
            if (checkedPermission.length == 0) {
                console.log(error)
                Errors.hoobies = "Please Select Atlease 1"
            }
            if (!Object.keys(formvalue).includes('gender')) {
                console.log(error)
                Errors.gender = "Please Select Gender"
            }
            if (!Object.keys(formvalue).includes('mobile')) {
                console.log(error)
                Errors.mobile = "Please Enter Mobile No"
            }
            if (!Object.keys(formvalue).includes('file')) {
                console.log(error)
                Errors.file = "Please Select file"
            }

            console.log("🚀 ~ file: FormCompnents.jsx:92 ~ savDetails ~ Errors:", Errors)

            seterror(Errors)
        }
    }

    const pickDate = (e) => {
        console.log("🚀 ~ file: FormCompnents.jsx:91 ~ pickDate ~ e:", e)
        if (e) {
            const date = (dayjs(e.$d)).toString()
            setformvalue({ ...formvalue, "birthday": date })
            const { birthday, ...resterror } = error
            seterror(resterror)
        }
        else {
            const { birthday, ...restvalues } = formvalue
            setformvalue(restvalues)
            seterror({ ...error, birthday: "Please Select Birthday" })
        }
    }

    const getcheckboxvalue = (e) => {
        const { checked, value } = e.target
        if (checked) {
            setcheckedPermission([...checkedPermission, value])
            const { hoobies, ...resterror } = error
            seterror(resterror)
        }
        else {
            if (checkedPermission.length == 1) {
                console.log("🚀 ~ file: FormCompnents.jsx:129 ~ getcheckboxvalue ~ heckedPermission.lengt:", " hecke")
                const { hoobies, ...restvalues } = formvalue
                setformvalue(restvalues)
                seterror({ ...error, hoobies: "Please Select Atleaset 1" })

            }
            setcheckedPermission([...checkedPermission.filter(per => per !== value)])
        }



    }

    const getRadioValue = (e) => {
        setformvalue({ ...formvalue, gender: e.target.value })
        const { gender, ...resterror } = error
        seterror(resterror)
    }

    const uploadfile = (e) => {
        console.log("🚀 ~ file: FormCompnents.jsx:135 ~ uploadfile ~ e:", e)
        console.log("🚀 ~ file: FormCompnents.jsx:203 ~ uploadfile ~ e.target.files:", e.target.files[0])
        setloading(true)
        if (e.target.files[0].size < 1000000) {

            if (e.target.files[0].type.includes('pdf') || e.target.files[0].type.includes('video') || e.target.files[0].type.includes('image')) {

                console.log("🚀 ~ file: FormCompnents.jsx:215 ~ uploadfile ~  e.target.files[0]:", e.target.files[0])
                setfile(e.target.files[0])
                const { file, ...resterror } = error
                seterror(resterror)
            }
            else {
                setfile()
                seterror({ ...error, file: "File must b video ,image or pdf" })
            }
        }
        else {
            const { file, ...restvalues } = formvalue
            setformvalue(restvalues)
            seterror({ ...error, file: "File size must be less than 10 MB" })
        }
        setloading(false)
    }


    // const pickColor=(e) => {
    //     console.log("🚀 ~ file: FormCompnents.jsx:239 ~ pickColor ~ e:", e)


    // }
    return (
        <div>
            <div className="mainformbody m-5 pb-5 pt-3">

                <h1>User Details</h1>
                <Grid container spacing={2} className='pt-3 d-flex justify-content-center'>
                    <Grid item xs={6}>
                        <TextField id="fname" name='firstname' label="First Name" onChange={(e) => { getvalue(e) }} className='fields' variant="outlined" />
                        {error.firstname ? <p>{error.firstname}</p> : ``}
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="lname" name='lastname' label="Last Name" onChange={(e) => { getvalue(e) }} className='fields' variant="outlined" />
                        {error.lastname ? <p>{error.lastname}</p> : ``}
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="email" name='email' type='email' label="Email" onChange={(e) => { getvalue(e) }} className='fields' variant="outlined" />
                        {error.email ? <p>{error.email}</p> : ``}
                    </Grid>
                    <Grid item xs={6}>
                        <TextField id="password" name='password' type='password' label="password" onChange={(e) => { getvalue(e) }} className='fields' variant="outlined" />
                        {error.password ? <p>{error.password}</p> : ``}
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <FormLabel id="gender">Gender</FormLabel>
                            <RadioGroup
                                row
                                name="gender"
                                onChange={(e) => { getRadioValue(e) }}
                            >
                                <FormControlLabel value="female" control={<Radio />} label="Female" />
                                <FormControlLabel value="male" control={<Radio />} label="Male" />
                                <FormControlLabel value="other" control={<Radio />} label="Other" />
                            </RadioGroup>
                            {error.gender ? <p>{error.gender}</p> : ``}
                        </FormControl>
                    </Grid>
                    <Grid item xs={6}>
                        <FormControl>
                            <FormLabel id="hobbies">Hobbies</FormLabel>
                            <FormGroup>
                                <FormControlLabel
                                    value="A"
                                    control={<Checkbox />}
                                    label="A"
                                    onChange={(e) => { getcheckboxvalue(e) }}
                                    className='ms-2'
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="B"
                                    control={<Checkbox />}
                                    label="B"
                                    onChange={(e) => { getcheckboxvalue(e) }}
                                    className='ms-2'
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="C"
                                    control={<Checkbox />}
                                    label="C"
                                    onChange={(e) => { getcheckboxvalue(e) }}
                                    className='ms-2'
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="D"
                                    control={<Checkbox />}
                                    label="D"
                                    onChange={(e) => { getcheckboxvalue(e) }}
                                    className='ms-2'
                                    labelPlacement="end"
                                />
                                <FormControlLabel
                                    value="Other"
                                    control={<Checkbox />}
                                    label="Other"

                                    onChange={(e) => { getcheckboxvalue(e) }}
                                    className='ms-2'
                                    labelPlacement="end"
                                />
                            </FormGroup>
                            {error.hoobies ? <p>{error.hoobies}</p> : ``}
                        </FormControl>
                    </Grid>

                    <Grid item xs={6}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DemoContainer components={['DatePicker']}>
                                <DatePicker className='fields datePicker' label="Birthday" onChange={(e) => { pickDate(e) }} />
                                {error.birthday ? <> <p>{error.birthday}</p></> : ``}
                            </DemoContainer>
                        </LocalizationProvider>
                    </Grid>

                    <Grid item xs={6}>
                        <TextField id="mobile" name='mobile' onChange={(e) => { getvalue(e) }} type='number' label="Mobile Number" className='fields pt-2' variant="outlined" />
                        {error.mobile ? <p>{error.mobile}</p> : ``}
                    </Grid>
                    <Grid item xs={2}>
                        <TextField id="color" type='color' name='color' onChange={(e) => { getvalue(e) }} label="Choose Color" className='fields' variant="outlined" />
                    </Grid>
                    <Grid item xs={5}>
                        {loding ? (<Loader />) : <><input id="file" type='file' onChange={(e) => { uploadfile(e) }} className='fields' variant="outlined" /></>}
                        {/* <Button htmlFor="file" variant="contained">Upload File
                        </Button> */}
                        {error.file ? <p>{error.file}</p> : ``}
                    </Grid>

                    <Grid item xs={6}>
                        <Button variant="contained" onClick={() => { savDetails() }}>Save Details </Button>
                    </Grid>
                </Grid>
                {/* {JSON.stringify(formvalue)}
                {JSON.stringify(error)}
                {JSON.stringify(checkedPermission)}
                {JSON.stringify(file)} */}
            </div>

        </div>
    )
}
