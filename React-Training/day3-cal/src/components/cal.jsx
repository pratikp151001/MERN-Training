import React, { useState } from 'react'

export default function Cal() {
    const [value, setvalue] = useState(0)

    let num1, num2, symbol, result;

    let formvalue = () => {
        num1 = document.getElementById("num1").value
        num2 = document.getElementById("num2").value
        symbol = document.getElementById("symbol").value
        // console.log(num1, num2, symbol)
        if (num1 != null && num2 != null && num2 != "" && num1 != "") {
            if (symbol == "+")
                result = parseInt(num1) + parseInt(num2)
            if (symbol == "-")
                result = parseInt(num1) - parseInt(num2)
            if (symbol == "*")
                result = parseInt(num1) * parseInt(num2)

            setvalue(result)
        }

    }




    // }
    return (
        <>
            <div className="container text-center m-5">
                <form>
                    <div className="row">
                        <div className="col">
                            {/* <input type='text' name="num1" id="num1" /> */}
                            <input type="number" className="form-control" name="num1" id="num1" onChange={(e) => { formvalue(e) }} placeholder="Enter Number1" />

                        </div>
                        <div className="col">
                            <select className="form-select" name="OperationSymbol" id='symbol' onChange={(e) => { formvalue(e) }}>
                                <option selected disabled>Choose Operation</option>
                                <option value="+">+</option>
                                <option value="-">-</option>
                                <option value="*">*</option>
                            </select>
                        </div>
                        <div className="col">
                            <input type="number" className="form-control" name="num2" id="num2" onChange={(e) => { formvalue(e) }} placeholder="Enter Number2" />

                        </div>
                    </div>
                </form>
            </div>
            <div>
                <h2>{value}</h2>
            </div>


        </>
    )
}
