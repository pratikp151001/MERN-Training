import React from 'react'
import TextFieldComponents from './textFieldComponents'
import DateFieldComponents from './DateFieldComponents'
import NumbersFieldComponents from './NumbersFieldComponents'
import { useState } from 'react'
import TableComponents from './tableComponents'

export default function Form(props) {
  
    const [formdata, setformdata] = useState({

        Firstname: "",
        Lastname: "",
        Address: "",
        Email: "",
        City: "",
        State: "",
        Country: "",
        Birthday: "",
        Zipcode: ""

    })

    let getformdata = (e) => {

        setformdata({ ...formdata, [e.target.name]: e.target.value })
        // console.log(formdata)
    }

    let getData = () => {
     
        let list = "";

        list += `<tr><td>${formdata.Firstname}</td><td>${formdata.Lastname}</td><td>${formdata.Address}</td><td>${formdata.Email}</td><td>${formdata.City}</td><td>${formdata.State}</td><td>${formdata.Country}</td><td>${formdata.Birthday}</td><td>${formdata.Zipcode}</td></tr>`

        // let tr = `<tr><td>${formdata.Firstname}</td><td>${formdata.Lastname}</td><td>${formdata.Address}</td><td>${formdata.Email}</td><td>${formdata.City}</td><td>${formdata.State}</td><td>${formdata.Country}</td><td>${formdata.Birthday}</td><td>${formdata.Zipcode}</td></tr>`
        document.getElementById("tbody").innerHTML = list

    }
    return (
        <>
            <div className="container">

                <div className="text-center">
                    <h2>Registration Form</h2>
                    <div className="row mt-3">
                        <div className="col">
                            <TextFieldComponents label={props.info.firstname} handleChange={getformdata} />
                        </div>
                        <div className="col">
                            <TextFieldComponents label={props.info.lastname} handleChange={getformdata} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-8">
                            <TextFieldComponents label={props.info.address} handleChange={getformdata} />
                        </div>
                        <div className="col-4">
                            <TextFieldComponents label={props.info.email} handleChange={getformdata} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <TextFieldComponents label={props.info.city} handleChange={getformdata} />
                        </div>
                        <div className="col">
                            <TextFieldComponents label={props.info.state} handleChange={getformdata} />
                        </div>
                        <div className="col">
                            <TextFieldComponents label={props.info.country} handleChange={getformdata} />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <DateFieldComponents label={props.info.birthday} handleChange={getformdata} />
                        </div>
                        <div className="col">
                            <NumbersFieldComponents label={props.info.zipcode} handleChange={getformdata} />
                        </div>

                    </div>
                </div>
                <button className="btn btn-primary text-start" onClick={(e) => { getData(e) }}>submit</button>

            </div>

            <div className="tablediv mt-5 table table-bordered">
                <div className="container">
                    <table id="tableData" style={{ width: 1300 }}>
                        <thead>
                            <tr>
                                <th>Firstname</th>
                                <th>Lastname</th>
                                <th>Address </th>
                                <th>Email</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Country</th>
                                <th>Birthday</th>
                                <th>Zipcode</th>

                            </tr>
                        </thead>
                        <tbody id='tbody'>
                        </tbody>
                    </table>

                </div>
            </div>
        </>
    )
}
