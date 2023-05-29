import React from 'react'
import { useDispatch } from 'react-redux'
import FetchDataAction from '../Redux/Actions/FetchDataAction'
import DispayFetchedData from './DispayFetchedData'

export default function FetchandDisplayData() {
   const  dispatch=useDispatch()
  return (
    <>
    <div className="container">
    <button className='btn btn-primary mt-5' onClick={()=>{dispatch(FetchDataAction())}} >Fetch Data</button>
    </div>
    <div className="container">
        <DispayFetchedData/>
    </div>
    </>
  )
}
