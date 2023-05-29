import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { CONCAT } from '../Redux/Actions/ConcatActions'
import { useSelector } from 'react-redux'


export default function ContactString() {
    const [sentence, setsentence] = useState([])
    const [value,setvalue]=useState("")

    // const handlechange = (e) => {
    //     console.log(e.target.value)
    //     setsentence(e.target.value)
    // }
    const handleClick=()=>{
        setsentence([...sentence,value])
        setvalue("")
        
    }
    const state=useSelector((state)=>state.ContactstringReducer)
    console.log("🚀 ~ file: ContactString.jsx:21 ~ ContactString ~ state.contactstringReducer:", state)

    const dispatch=useDispatch()
    return (
        <>
            <div className="container justify-content-center pt-5">
                <input type="text" className='takeString' value={value} onChange={(e) => {setvalue(e.currentTarget.value) }} />
                {/* <input type="number" className='display' onChange={(e)=>{handlechange(e)}}/> */}
                <button className='btn btn-info' onClick={()=>{handleClick()}}>Add</button>

                <button className='btn btn-info' onClick={()=>{dispatch(CONCAT(sentence));setsentence([])}} >Contact</button>


            </div>
            <div>
                {state?.fullsentence}
            </div>

        </>
    )
}
