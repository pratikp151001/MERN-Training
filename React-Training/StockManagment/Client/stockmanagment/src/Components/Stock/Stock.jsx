import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
// import { json } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import AddStockAction from '../../Redux/Actions/AddStockAction';

import GetStockAction from '../../Redux/Actions/GetAllStocks';
import DeleteStockAction from '../../Redux/Actions/DeletestockAction';




export default function Stock() {
    const [stock, setstock] = useState({})
    const [errors, seterrors] = useState({})
    const dispatch = useDispatch()

    const stock_state = useSelector((state) => state.stock)
    console.log("🚀 ~ file: Stock.jsx:19 ~ Stock ~ stock_state:", stock_state)




    useEffect(() => {
        dispatch(GetStockAction())

    }, [stock_state?.added_stock, stock_state?.deleted_stock])



    const getValue = (e) => {
        const { name, value } = e.target
        console.log("🚀 ~ file: Stock.jsx:15 ~ getValue ~ value:", value)
        if (name == "quantity") {
           
            if (parseInt(value) <= 0) {
                seterrors({ ...errors, [name]: `Please Number greater than 0 ` })
            }
            else{
                setstock({ ...stock, [name]: value })
                const{[name]:any,...resterrors}=errors
                seterrors(resterrors)
            }
        }
        
        else if (value.trim() == "" || value == undefined) {

            seterrors({ ...errors, [name]: `Please Enter ${name} ` })
            const { [name]: any, ...restValues } = stock
            console.log("🚀 ~ file: Stock.jsx:23 ~ getValue ~ restValues:", restValues)
            setstock(restValues)

        }

        else {
            const{[name]:any,...resterrors}=errors
            seterrors(resterrors)
            setstock({ ...stock, [name]: value })
        }


    }

    const AddStock = (e) => {
        console.log(stock)
        
        if ((Object.keys(stock)).length == 2) {
            alert("D")
        //    for(let i=0;i<stock_state?.all_stock.length,i++){
        //     if(stock_state?.all_stock[i].stockname.toLowerCase()==stock.stockname){

        //     }
        //    }
        if (stock_state?.all_stock.some(e => e.stockname == stock.stockname)) {
           alert("stock is already present")
          }
          else{
          
            dispatch(AddStockAction(stock))
          }
        }
        else {
            let Errors = {}
            if (!Object.keys(stock).includes('stockname')) {
                Errors = { stockname: "Please Enter firstName" }
            }
            if (!Object.keys(stock).includes('quantity')) {
                Errors.quantity = "Please Enter quantity"
            }
            seterrors(Errors)
        }

    }

    const deleteStock = (e) => {
        const { value, id } = e.target
        console.log("🚀 ~ file: Stock.jsx:76 ~ deleteStock ~ value:", value, id)

        if (value == 0) {
            dispatch(DeleteStockAction(id))

        }
        else {
            alert("can not delete this(quantity is not 0)")
        }
    }
    return (
        <div className='mainbody'>

            <div class="row">
                <div class="col">
                    <h2>Stock</h2>
                </div>
                <div class="col">

                </div>
                <div class="col text-end me-5">
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Add Stock
                    </button>
                </div>
            </div>

            {/* table */}
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Stockame</th>
                        <th scope="col">Stock Quantity</th>
                        <th scope="col">Order Quantity</th>
                        <th scope="col">actions</th>
                    </tr>
                </thead>
                {/* <tbody> */}
                {stock_state?.all_stock?.map((stock, index) => {
                
                    let sumWithInitial = stock.customer.reduce(
                        (accumulator, currentValue) => accumulator + currentValue.orderquantity,
                        0
                      )
                    
                    return(
                        <tr>
                            <td scope="row">{index}</td>
                            <td>{stock.stockname}</td>
                            <td>{stock.quantity - sumWithInitial}</td>
                            <td>{sumWithInitial}</td>
                            <td><button type="button" id={stock.id} value={sumWithInitial} onClick={(e) => { deleteStock(e) }} class="btn btn-primary">delete</button></td>

                        </tr>
                    )
                    
                }
                )}


                {/* </tbody> */}
            </table>



            {/* <!-- Modal --> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Add Stock</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                        </div>
                        <div class="modal-body">
                            <div class="mb-3">
                                <label for="stockname" class="form-label">Stock Name</label>
                                <input type="text" name='stockname' onChange={(e) => { getValue(e) }} class="form-control" id="stockname" />
                                {errors.stockname ? <p>{errors.stockname}</p> : ``}
                            </div>
                            <div class="mb-3">
                                <label for="quantity" class="form-label">Quantity</label>
                                <input type="number" name='quantity' onChange={(e) => { getValue(e) }} class="form-control" id="quantity" />
                                {errors.quantity ? <p>{errors.quantity}</p> : ``}

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary" onClick={(e) => { AddStock() }}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            {/* {JSON.stringify(stock)}
            {JSON.stringify(errors)} */}
        </div>
    )
}
