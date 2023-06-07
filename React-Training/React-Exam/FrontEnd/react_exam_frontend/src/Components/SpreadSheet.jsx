import React from 'react'
import Spreadsheet from "react-spreadsheet";

export default function SpreadSheet() {
    const data = [
        [{ is: "Vanilla",id:"DVds" }],
        [{ dv: "Strawberry" }, { value: "Cookies" }],
      ];
  return (
    <>
      <Spreadsheet data={data}  columnLabels={["dv","sdv"]} onChange={(e)=>{console.log(e)}} />
    </>
  )
}
