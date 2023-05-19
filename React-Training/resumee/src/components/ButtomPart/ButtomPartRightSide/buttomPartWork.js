import React from 'react'
import "../../../App.css"
import makeList from '../listFunction'


export default function buttomPartWork(props) {
    let list=makeList(props.info.jobResponsibility)
  return (
    <>
     <p className="mb-0">{props.info.position}</p>
                <p className="companyNAme grayColor">{props.info.comapnyName} | {props.info.Date} </p>
                <p className="mb-0">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem obcaecati assumenda placeat facere animi
                  dolores molestias enim in, eligendi, voluptatibus maiores nisi
                  quae, aliquam sunt? Porro facilis laboriosam quos soluta?
                </p>
                <p className=" JobResponsibility grayColor">
                  Job Responsibility
                </p>
                <div className="jobrepos">
                  <ul>
                    {list}
                  </ul>
                </div>
      
    </>
  )
}
