import ButtonPart from "./ButtomPart/buttonPart";
import TopPart from "./topPart/topPart";
import React from 'react'

export default function FullApp(props) {
  return (
    <>

    <TopPart info={props.info} />
    <ButtonPart info={props.info}/>
      
    </>
  )
}
