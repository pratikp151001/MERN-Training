import React from 'react'
import "../../../App.css"
import ButtomPartEduction from './buttomPartEduction'
import ButtomPartSkills from './ButtomPartSkills'

export default function ButtomPartLeftSide(props) {
  return (
    <>
      <div className="col-5  ButtomPartleftSidePart pt-5 pe-5">
              <div className="aDDreSS">
              <div className="add">
              <i className="bi bi-geo-alt-fill"></i>
                <p className="address">{props.info.address}</p>
              </div>
              <div className="add">
              <i className="bi bi-envelope-at-fill"></i>
                <p className="address">{props.info.email}</p>
              </div>
              <div className="add">
              <i className="bi bi-telephone"></i>
                <p className="address">{props.info.mobileNumber}</p>
              </div>
              <div className="add">
              <i className="bi bi-browser-chrome"></i>
                <p className="address">{props.info.website}</p>
              </div>
              </div>
              <ButtomPartEduction info={props.info}/>
             <ButtomPartSkills info={props.info}/>
              
            </div>
    </>
  )
}
