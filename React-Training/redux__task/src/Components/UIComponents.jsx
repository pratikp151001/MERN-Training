import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchdata } from '../Redux/Actions/FetchDataActions'
import { useSelector } from 'react-redux'

export default function UIComponents() {
    const dispatch=useDispatch()
    // const state=useSelector((state)=>state)
    // console.log("scac",state)
    
  return (
    <>
   <button className='btn btn-primary mt-4' onClick={()=>dispatch(fetchdata())}>FetchData</button>
    </>
  )
}
