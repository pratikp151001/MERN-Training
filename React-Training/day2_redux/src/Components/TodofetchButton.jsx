import React from 'react'
import { useDispatch } from 'react-redux'
import FetchTodoAction from '../Redux/Actions/TofoFetch'
import { useSelector } from 'react-redux'
import Loader from './Loader'

export default function TodofetchButton() {
    const dispatch=useDispatch()
    const state=useSelector((state) => {
        console.log("🚀 ~ file: TodofetchButton.jsx:9 ~ TodofetchButton ~ state:", state)
        return state
    })
    
  return (
    <>
   
    <div className="container">
        <button className='btn btn-primary mt-5' onClick={()=>{dispatch(FetchTodoAction())}}> FEtch Todos</button>
    </div>
    { state?.todo?.isLoading ? (<Loader></Loader>):
    <div className="container">
    <div className='row justify-content-center'>
                    {
                        state?.todo?.fetchedData?.map((data, index) =>
                            
                                <div key={index} className='col-5 ms-5 me-5 mt-5 '  >
                                    <div >
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title text-center"> {data.title}</h5>
                                                <div className="row mt-3 justify-content-center">
                                                    <div className="col text-center">
                                                    <p class="card-text">UserId: {data.userId}</p>
                                                    </div>
                                                    <div className="col text-center">
                                                    <p class="card-text">Id: {data.id}</p>
                                                    </div>
                                                </div>
                                               
                                                <h6 class="card-subtitle mb-2  mt-4">Completed:{data.completed}</h6>
                                                
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            )
                    }



                </div>

    </div>}
      
    </>
  )
}
