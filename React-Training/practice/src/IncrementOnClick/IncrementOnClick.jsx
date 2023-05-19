import React from 'react'

export default function IncrementOnClick({Clicked}) {


    // alert(count)

    return (
        <div>


            <button onClick={() => Clicked(2)} >btn</button>
        </div>
    )
}
