import React from 'react'

export default function NumbersFieldComponents(props) {
    return (
        <>
            <div className="mb-3 text-start">
                <label className="form-label ">{props.label}</label>
                <input type="number"  name={props.label} className="form-control" id={props.label} onChange={(e)=>{props.handleChange(e)}}/>
            </div>

        </>
    )
}
