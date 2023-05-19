import React from 'react'
import "../../../App.css"

export default function ButtomPartEduction(props) {
  return (
    <>
     <div className="eductions">
                <div className="heading">
                  <h2 className="Eductions ms-5"> Eduction </h2>
                </div>
                <div className="EductTIONS">
                <p className="eduPlace">{props.info.schoolname10th}</p>
                <p className="eduYears">{props.info.schooling10thYears}</p>
                <p className="eduPlace">{props.info.schoolname12th}</p>
                <p className="eduYears">{props.info.schooling12thYears}</p>
                <p className="eduPlace">{props.info.univercityName}</p>
                <p className="eduYears">{props.info.uivercityYears}</p>
                </div>
              </div>
      
    </>
  )
}
