import React from "react";
import "../../../App.css";
import ButtomPartWork from "./buttomPartWork";

export default function buttomPartRightSide( props) {
  let workExpList=[]
  props.info.workExp.forEach(element => {
    workExpList.push(<> <ButtomPartWork info={element}/>  <hr></hr> </>)
  });
  return (
    <>
      <div className="col-7 ">
        <div className="WORK ms-5">
          <div className="headingrightsite ps-2">
            <h2 className="Work  mt-5"> Work </h2>
          </div>

          {workExpList}
          {/* <ButtomPartWork info={props.info.workExp[1]}/> */}
        </div>
      </div>
    </>
  );
}
