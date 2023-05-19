import React from 'react'
import pic from "../../PIC.jpg";
import "../../App.css";


export default function topPart({name,degisnation}) {
  return (
    <div>
        <h1 className="text-center">Resume</h1>
        <div className="mainbody pt-5">
          <div className="row">
            <div className="col-5 text-center">
              <img
                className="Picture img-fluid"
                src={pic}
                alt="Profile Image HERE"
              ></img>
            </div>
            <div className="col-7 ">
              <div className="info ms-5">
                <p className="name">{name}</p>
                <p className="degisnation">{degisnation}</p>
                <p className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Similique numquam cumque laborum. Quae, labore tempora cumque
                  eius odio aliquid accusamus fugiat suscipit, iste inventore
                  itaque iusto culpa incidunt blanditiis sequi ullam
                  exercitationem architecto veniam libero dolores at commodi
                  modi quibusdam? Culpa a laboriosam quos accusamus, natus totam
                  commodi asperiores non?
                </p>
                {/* <button className="btn buttons me-3">About</button>
                <button className="btn buttons me-3">Contact</button> */}
              </div>
            </div>
          </div>
        </div>
      
    </div>
  )
}
