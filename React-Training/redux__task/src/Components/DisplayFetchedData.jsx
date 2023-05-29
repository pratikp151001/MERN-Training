import React from 'react'
import { useSelector } from 'react-redux';

export default function DisplayFetchedData() {
    const state = useSelector((state) => state);
    console.log("state ddd", state?.fetchedData)
    return (
        <>
            <div className="contaier-fulid">
                <div className="row justify-content-center">
                {
                         state?.fetchedData?.map((data, index) =>
                            
                                <div key={index} className='col-3 ms-5 me-5 mt-3 '  >
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


            </div>


        </>
    )
}
