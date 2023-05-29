import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { ADD, DIV, MUL, SUB } from '../Redux/Actions/CalculationActions'
import { useSelector } from 'react-redux'

export default function Calulator() {
    const [num,setnum]=useState(0)

    const handlechange=(e) => {
        console.log("🚀 ~ file: Calulator.jsx:11 ~ handlechange ~ e:", e.target.value)
        setnum(parseInt(e.target.value))
    }
    const dispatch=useDispatch()
    const state=useSelector((state)=>state.CalulationReducer)

  return (
    <>
    <div className="container justify-cotent-center pt-5">
    <button className='btn btn-info' onClick={()=>{dispatch(MUL(num))}} >MUL</button>
        <button className='btn btn-info' onClick={()=>{dispatch(ADD(num))}} >ADD</button>
        <input type="number" className='display' onChange={(e)=>{handlechange(e)}}/>
        <button className='btn btn-info' onClick={()=>{dispatch(SUB(num))}}>SUB</button>
        <button className='btn btn-info' onClick={()=>{dispatch(DIV(num))}} >DIV</button>
        <div>{state?.result}</div>
    </div> 

    </>
  )
}
