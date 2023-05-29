import React from 'react'
import {useState} from 'react'
import { useDispatch } from 'react-redux'
import UserActions from '../Redux/Actions/UserActions'

export default function UserRegistration() {
    const [value,setvalue]=useState({})

    const dispatch = useDispatch()
    return (
        <>
        <div className="container mt-5">
            <h2>User Registration</h2>
            <div className="row mt-3">
                <div className="col">
                <input type="text" class="form-control" id="name" placeholder="Enter name" onChange={(e)=>{setvalue({...value,[e.target.id]:e.target.value})}}/>
                </div>
                <div className="col">
                <input type="email" class="form-control" id="email" placeholder="Enter email" onChange={(e)=>{setvalue({...value,[e.target.id]:e.target.value})}}/>
                </div>
            </div>
            <div className="row mt-3">
                <div className="col">
                <input type="umber" class="form-control" id="age" placeholder="Enter Age" onChange={(e)=>{setvalue({...value,[e.target.id]:e.target.value})}}/>
                </div>
                <div className="col">
                <input type="password" class="form-control" id="password" placeholder="Enter Password" onChange={(e)=>{setvalue({...value,[e.target.id]:e.target.value})}}/>
                </div>
            </div>
            <button onClick={() => { dispatch(UserActions(value));console.log(value) }} className=' mt-3 btn btn-primary'>Click me</button>
            </div>
        </>
    )
}
