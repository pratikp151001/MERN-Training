import React from 'react'
import { useSelector } from 'react-redux'
import Loader from './Loader'

export default function DispayFetchedData() {
  const state = useSelector((state) => state.fetchData)
  console.log("🚀 ~ file: DispayFetchedData.jsx:6 ~ DispayFetchedData ~ state.fetchData:", state.fetchedData)

  return (

    <>
    {state?.isLoading ? (<Loader></Loader>):
    <div className="container-fluid" >
        <h1 className='text-center pt-3'>User Details</h1>
        <div className='row'>
            {
                state?.fetchedData?.map((data, index) =>
                    <div key={index} className='col-md-5 ms-5 me-5 ' >
                        <div className="card mt-5">
                            <div className="card-body">
                                <div className="images text-center">
                                    
                                </div>
                                <h5 className="card-title text-center">{data?.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted  text-center" >{data?.username}</h6>
                                <div className="userDetails text-start ms-5">
                                    <p >Name: {data?.name}</p>
                                    <p >id: {data?.id}</p>
                                    <p >Mobile Number: {data?.phone}</p>
                                    <p>Website: {data?.website}</p>
                                    <p>Username: {data?.username}</p>
                                    <p>Email: {data?.email}</p>
                                    <p><b>Company Details: </b></p>
                                    <p className='ms-4'>Company Name: {data?.company.name}</p>
                                    <p className='ms-4'>catchPhrase: {data?.company.catchPhrase}</p>
                                    <p className='ms-4'>bs: {data?.company.bs}</p>
                                    <p><b>Address Details: </b></p>
                                    <p className='ms-4'>City: {data?.address.city}</p>
                                    <p className='ms-4'>Street: {data?.address.street}</p>
                                    <p className='ms-4'>Suite: {data?.address.suite}</p>
                                    <p className='ms-4'>Zipcode: {data?.address.zipcode}</p>
                                    <p className='ms-4'><b>Geo Location: </b></p>
                                    <p className='ms-5'>latitude: {data?.address.geo.lat}</p>
                                    <p className='ms-5'>longitude: {data?.address.geo.lng}</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }


        </div>
        
    </div>
}
</>
  )
}
