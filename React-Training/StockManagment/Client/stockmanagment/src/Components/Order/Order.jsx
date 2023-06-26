import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import GetStockAction from '../../Redux/Actions/GetAllStocks';
import "../Order/Order.css"
import AddOrder from '../../Redux/Actions/AddOrder';
import GetOrderAction from '../../Redux/Actions/GetAllOrderAction';
import DeleteOrderAction from '../../Redux/Actions/DeleteOrder';

export default function Order() {

    const [errors, seterrors] = useState({})
    const [Ordervalue, setOrdervalue] = useState({})

    const dispatch = useDispatch()
    const STOCKS = useSelector((state) => state.stock)
    console.log("🚀 ~ file: Order.jsx:10 ~ Order ~ STOCKS:", STOCKS)
    const ORDERS = useSelector((state) => state.order)
    console.log("🚀 ~ file: Order.jsx:14 ~ ORDERS:", ORDERS)



    useEffect(() => {
        dispatch(GetOrderAction())
    }, [ORDERS?.added_order,ORDERS?.deleted_order])
    useEffect(() => {
        dispatch(GetStockAction())

    }, [])

    const getformvalue = (e) => {
        const { name, value } = e.target


        if (value.trim() == "" || value == undefined) {

            seterrors({ ...errors, [name]: `Please Enter ${name} ` })
            const { [name]: any, ...restValues } = Ordervalue
            console.log("🚀 ~ file: Stock.jsx:23 ~ getValue ~ restValues:", restValues)
            setOrdervalue(restValues)

        }
        else if (name == "quantityorder") {

            if (parseInt(value) <= 0) {
                seterrors({ ...errors, [name]: `Please Number greater than 0 ` })
            }
            else {
                setOrdervalue({ ...Ordervalue, [name]: value })
                const { [name]: any, ...resterrors } = errors
                seterrors(resterrors)
            }
        }
        else {
            const { [name]: any, ...resterrors } = errors
            seterrors(resterrors)
            setOrdervalue({ ...Ordervalue, [name]: value })
        }

        console.log("🚀 ~ file: Order.jsx:18 ~ getformvalue ~ value:", value)
        console.log("🚀 ~ file: Order.jsx:18 ~ getformvalue ~ name:", name)
        // setOrdervalue({ ...Ordervalue, [name]: value })
    }

    const oderStocks = (e) => {

        console.log("fff", STOCKS?.all_stock.some(e =>
            e.id == Ordervalue.stockname
        ))
        if (Object.keys(Ordervalue).length == 3) {
            if (STOCKS?.all_stock.some(e => {
                if (e.id == Ordervalue.stockname) {
                    console.log("🚀 ~ file: Order.jsx:72 ~ oderStocks ~ Ordervalue.quantityorder:", Ordervalue.quantityorder)
                    console.log("🚀 ~ file: Order.jsx:72 ~ oderStocks ~ e.quantity:", e.quantity)
                    if (e.quantity < Ordervalue.quantityorder) {
                        return false
                    }
                    else {
                        return true
                    }
                }
            }
            )) {
                dispatch(AddOrder(Ordervalue))
                alert("Order dispatch")
            }
            else{
                alert("this much Quntity is not present")
            }
            // {
            //     console.log("object","INSIDE TRUE IF")
            //     console.log("🚀 ~ file: Order.jsx:74 ~ oderStocks ~ e.quantity:", e.quantity)
            //     console.log("🚀 ~ file: Order.jsx:75 ~ oderStocks ~ Ordervalue.quantityorder:", Ordervalue.quantityorder)
            //     if (e.quantity < Ordervalue.quantityorder) {
            //         alert("this much Quntity is not present")
            //     }
            //     else {
            //         dispatch(AddOrder(Ordervalue))
            //         alert("Order dispatch")

            //     }
            // }
        }

        //             }

        //         }))
        // }
        else {
            // alert("Enter all Details")
            let Errors = {}
            if (!Object.keys(Ordervalue).includes('customername')) {
                Errors = { customername: "Please Enter customername" }
            }
            if (!Object.keys(Ordervalue).includes('quantityorder')) {
                Errors.quantityorder = "Please Enter quantityorder"
            }
            if (!Object.keys(Ordervalue).includes('stockname')) {
                Errors.stockname = "Please Enter stockname"
            }
            seterrors(Errors)
        }

        
        
    }
    const DeleteOrder=(e)=>{
        const {id}=e.target
        console.log("🚀 ~ file: Order.jsx:116 ~ DeleteOrder ~ id:", id)
        dispatch(DeleteOrderAction(id))
    }
    return (
        
            <div className='mainbody'>

                <div class="row">
                    <div class="col">
                        <h2>Order</h2>
                    </div>
                    <div class="col">

                    </div>
                    <div class="col text-end me-5">
                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Add Order
                        </button>
                    </div>
                </div>

                {/* Table */}
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Customer Name</th>
                            <th scope="col">Stockame</th>
                            <th scope="col">Order Quantity</th>
                            <th scope="col">actions</th>
                        </tr>
                    </thead>
                    {/* <tbody> */}
                    {ORDERS?.all_order?.map((order, index) => (
                        <>
                            <tr>
                                <td scope="row">{index+1}</td>
                                <td>{order.customername}</td>
                                <td>{order.Stock.stockname}</td>
                                <td>{order.orderquantity}</td>
                                <td><button type="button" id={order.id} onClick={(e)=>{DeleteOrder(e)}} class="btn btn-primary">delete</button></td>

                            </tr>
                        </>
                    )
                    )}


                    {/* </tbody> */}
                </table>

                {/* <!-- Modal --> */}
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Add Order</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label for="customername" class="form-label">Customer Name</label>
                                    <input type="text" name='customername' onChange={(e) => { getformvalue(e) }} class="form-control" id="customername" />
                                    {errors.customername ? <p>{errors.customername}</p> : ``}
                                </div>
                                <div class="mb-3">
                                    <label for="quantityorder" class="form-label">Quantity</label>
                                    <input type="number" min={1} name='quantityorder' onChange={(e) => { getformvalue(e) }} class="form-control" id="quantityorder" />
                                    {errors.quantityorder ? <p>{errors.quantityorder}</p> : ``}
                                </div>
                                <select onChange={(e) => { getformvalue(e) }} name='stockname' class="form-select" aria-label="Default select example">
                                    <option selected disabled>Open this select menu</option>
                                    {STOCKS?.all_stock?.map((stock, index) => {
                                        // console.log("🚀 ~ file: Order.jsx:73 ~ {STOCKS?.all_stock?.map ~ stock:", stock.stockname)

                                        return <option value={stock.id}>{stock.stockname}</option>
                                    })}

                                </select>
                                {errors.stockname ? <p>{errors.stockname}</p> : ``}

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" onClick={(e) => { oderStocks(e) }} class="btn btn-primary">Order</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           

     
    )
}
