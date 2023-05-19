import React from 'react'
import "../../../App.css"
import makeList from "../listFunction"

export default function ButtomPartSkills(props) {
 let listofItem=makeList(props.info.skills)

  return (
    <>
    <div className="Skill">

                <div className="heading">
                  <h2 className="Skills ms-5"> Skills </h2>
                </div>
                <div className="skillist">
                  <ul>
                    {/* <li>{props.info.skills[0]}</li>
                    <li>{props.info.skills[1]}</li>
                    <li>{props.info.skills[2]}</li>
                    <li>{props.info.skills[3]}</li>
                    <li>{props.info.skills[4]}</li>
                    <li>{props.info.skills[0]}</li> */}

                    {listofItem}
                  </ul>
                </div>
              </div>
      
    </>
  )
}
