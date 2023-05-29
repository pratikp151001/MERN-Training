import React from 'react'
import { useDispatch } from 'react-redux'
import UserActions from '../Redux/Actions/UserActions'

const UserPage = () => {

    const dispatch=useDispatch()
  return (
    <>
   <button onClick={()=>dispatch(UserActions())}>button</button>
      
    </>
  )
}

export default UserPage
