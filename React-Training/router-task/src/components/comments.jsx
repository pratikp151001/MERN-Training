import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../App.css'

export default function Comments() {
    const [apiData, setapiData] = useState([])

    const fetchPosts = async () => {
        let resData = await axios.get('https://jsonplaceholder.typicode.com/comments')
        console.log(resData.data)
        setapiData(resData)
    }

    useEffect(() => {
        console.log("USe Effect Called")
        fetchPosts()
        console.log("ddd", apiData)
    }, [])
    return (
        <div className="App">
            <div className='container-fluid'>
                <div className='row justify-content-center'>
                    {
                        apiData?.data?.map((data, index) =>
                            
                                <div key={index} className='col-5 ms-5 me-5 mt-5 '  >
                                    <div >
                                        <div class="card">
                                            <div class="card-body">
                                                <h5 class="card-title text-center"> {data.name}</h5>
                                                <div className="row mt-3 justify-content-center">
                                                    <div className="col text-center">
                                                    <p class="card-text">PostId: {data.postId}</p>
                                                    </div>
                                                    <div className="col text-center">
                                                    <p class="card-text">Id: {data.id}</p>
                                                    </div>
                                                </div>
                                                <h6 class="card-subtitle mb-2  mt-4">{data.email}</h6>
                                               
                                                <h6 class="card-subtitle mb-2 text-muted mt-4">{data.body}</h6>
                                                
                                            </div>
                                        </div>
                                    </div>

                                </div>

                            )
                    }



                </div>

            </div>
        </div>


    )
}
