import React from 'react'
import "../../App.css";
import ButtomPartLeftSide from './ButtomPartLeftSide/buttomPartLeftSide';
import ButtomPartRightSide from './ButtomPartRightSide/buttomPartRightSide';


export default function buttonPart(props) {
  return (
    <>
         <div className="ButtomPart">
          <div className="row">
           
            <ButtomPartLeftSide info={props.info}/>
            <ButtomPartRightSide info={props.info}/>
            
          </div>
        </div>

      
    </>
  )
}
