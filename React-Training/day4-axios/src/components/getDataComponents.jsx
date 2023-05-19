import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import '../App.css'


export default function GetDataComponents() {
    const [apiData, setapiData] = useState([])
    const [apiimage, setapiimage] = useState([])
    const [fetchimagebtnclick, setfetchimagebtnclick] = useState(false)
    const [fetchAllimagebtnclick, setfetchAllimagebtnclick] = useState(false)

    const fetchImages = async () => {
        try {
            setfetchAllimagebtnclick(true)
            let resApiImage = await axios.get("https://jsonplaceholder.typicode.com/photos")

            setapiimage(resApiImage.data)
            console.log("IMAGE", resApiImage.data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchApiData = async () => {
        try {
            let resApiData = await axios.get("https://jsonplaceholder.typicode.com/users")

            setapiData(resApiData)


            console.log(resApiData)
        } catch (error) {
            console.log(error)
        }



    }



    const FetchsigleImage = async (e) => {
        console.log("single Fetch called")
        try {
            setfetchimagebtnclick(e.target.id)
            let resApiImage = await axios.get("https://jsonplaceholder.typicode.com/photos")

            setapiimage(resApiImage.data)
        }
        catch (error) {
            console.log(error)
        }



        // imgId=e.target.id
        console.log("EEEEEEEEEEE", fetchimagebtnclick)

    }
    const checkRender = (index) => {
        // console.log("FFFFF",apiimage)
        if (apiimage.length > 1 && fetchAllimagebtnclick) {
            //  console.log("FFFF551111111111111111155F",apiimage[0].url)

            let elements = checkAllFetch(index)
            return elements

        }
        else if (apiimage.length > 1 && fetchimagebtnclick) {
            let element = checkSingleFetch(index)
            return element
        }
    }

    const checkAllFetch = (index) => {
        console.log("FFFFFPPPPPPPPPPPPPPPPPPPPPPPPPPPP")

        //  console.log("FFFF551111111111111111155F",apiimage[0].url)

        return <img src={apiimage[index].url}></img>



    }
    const checkSingleFetch = (index) => {
        console.log("WWWWWWWWWWWWWww", typeof (fetchimagebtnclick), fetchimagebtnclick)
        console.log("WWWWQQQQQQQQQ", typeof (index), index)
        
        let imgID = parseInt(fetchimagebtnclick)

        if (apiimage.length > 1 && imgID == index) {
 
            return <img src={apiimage[index].url}></img>

        }
    }

    useEffect(() => {
        console.log("USeEffect Called")
        fetchApiData()

    }, [])
    return (
        <>
            <div className="container-fluid" >
                <h1 className='text-center pt-3'>User Details</h1>
                <div className='row'>
                    {
                        apiData?.data?.map((data, index) =>
                            <div key={index} className='col-md-5 ms-5 me-5 ' >
                                <div className="card mt-5">
                                    <div className="card-body">
                                        <div className="images text-center">
                                            {checkRender(index)}
                                            {/* {checkSingleFetch(index)} */}
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
                                            <div className="ImageFetch text-center ">
                                                <button className='btn btn-info ' id={index} onClick={(e) => { FetchsigleImage(e) }} > Fetch Image</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        )
                    }


                </div>
                <div className="text-center mt-3">
                    <button className='btn btn-info ' onClick={fetchImages} > Fetch Images</button>
                </div>
            </div>
        </>
    )
}

