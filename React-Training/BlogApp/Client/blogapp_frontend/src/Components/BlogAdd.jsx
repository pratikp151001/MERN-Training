import React, { useEffect, useState } from 'react'
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { BlogScheema } from '../Validations/AddBlogValidations';
import { useDispatch, useSelector } from 'react-redux';
import BlogActions from '../Redux/Actions/BlogActions';
import Loader from './Loader';
import { useParams } from 'react-router-dom';
import FetchSingleBlogDataAction from '../Redux/Actions/FetchSingleBlogData';
import UpateBLogActions from '../Redux/Actions/UpdateBlogActions';

export default function BlogAdd(props) {
    const updatesate=useSelector((state) => state.singleblog)
    console.log("🚀 ~ file: BlogAdd.jsx:15 ~ BlogAdd ~ updatestate:0000000000", updatesate)
    // console.log("🚀 ~ file: BlogAdd.jsx:15 ~ BlogAdd ~ title:", updatesate?.data[0]?.title)

const params=useParams()
console.log("🚀 ~ file: BlogAdd.jsx:16 ~ BlogAdd ~ paramsssssssssssssssssssssssssssssss:", params.id)
useEffect(()=>{
    dispatch(FetchSingleBlogDataAction(params.id))
    if(params.id!=undefined && updatesate){
        console.log("🚀 inside  IF", updatesate)
        console.log("🚀 ~ file: BlogAdd.jsx:31 ~ useEffect ~ data[0]?.title:", updatesate?.data[0]?.title)
        
        setformvalue({...formvalue,
            title:updatesate?.data[0]?.title,
            description:updatesate?.data[0]?.description,
            category:updatesate?.data[0]?.category
        })
    }

},[])




    const dispatch = useDispatch()
    const category = [
        {
            value: 'Happy',
            label: 'Happy',
        },
        {
            value: 'Sad',
            label: 'Sad',
        },
        {
            value: 'Funny',
            label: 'Funny',
        },

    ];

    const [formvalue, setformvalue] = useState({})

    
   // const [error, seterror] = useState({})

    const getformData = (e) => {
        // if ((e.target.value.trim() == "")) {
        //     seterror({ ...error, [e.target.name]: "Field is required" })
        // }
        // else {
            setformvalue({ ...formvalue, [e.target.name]: e.target.value })
        //     seterror({ ...error, [e.target.name]: "" })
        // }

    }

    const handleClick = async (e) => {
        e.preventDefault()
        const isValid = await BlogScheema.isValid(formvalue)
        // setformvalue({})
        // seterror({})

        console.log("🚀 ~ file: BlogAdd.jsx:44 ~ handleClick ~ isValid:", isValid)
        if (isValid) {
            console.log("LAst data", formvalue)
            if(params.id!=undefined && updatesate){
                dispatch(UpateBLogActions(formvalue,params.id))
            }
            else{

            dispatch(BlogActions(formvalue))
            }
            setformvalue({})

        }
        else {
            alert("Enter Valid Data")
        }
    }
    const state = useSelector((state) => state.addbolgs)
    console.log("000111", state)
    return (
        <>
            {
                state?.isLoading ? (<Loader></Loader>) :

                <div className="mainDiv pt-5">
                    <Container maxWidth="md" className=' p-3 outerDiv'>
                        <h2 className='p-3'>{props.text} Blog</h2>
                        <form >
                            <TextField name="title" label="Title" 
                            variant="outlined" value={formvalue.title  }
                             required
                             
                              onChange={(e) => { getformData(e) }}
                               className='field m-3' />
                            {/* helperText={error.title}  */}
                            <TextField
                                name="description"
                                label="description"
                                onChange={(e) => { getformData(e) }}
                                multiline
                                required
                                rows={4}
                                value={formvalue.description}
                                // helperText={error.description}
                                className='field m-3'

                            />
                            <TextField
                                name="category"
                                select
                                label="Select Category"
                                className='field m-3'
                                required
                                value={formvalue.category}
                                onChange={(e) => { getformData(e) }}
                                // helperText={error.category}

                            >
                                {category.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                            <br />
                            <button type='submit' variant="contained"  name={props.text} onClick={handleClick} className='m-3'>{props.text} </button>
                        </form>
                        {/* {JSON.stringify(error)}
                        {JSON.stringify(formvalue)} */}
                    </Container>
                    </div>
            }

        </>
    )
}
