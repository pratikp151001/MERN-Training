import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Products.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';



export default function PrOduCts() {
    let deletdProducts;

    const [products, setproducts] = useState([])
    const [checkbox, setcheckbox] = useState([])
    const [deletedProducts, setdeletedProducts] = useState([])
    const [orderBy,setorderBy]=useState("asc")
    const [filter, setfilter] = useState({
        searchtitle: "",
        noofRows: 5,
        currentPage: 1,
        isAscending:"asc"
    })
    const [NoOfPage,setNoOfPage]=useState()

    useEffect(() => {
        setcheckbox([])
        FetchData()
        if(orderBy==="asc"){
            setorderBy("desc")
        }
        else{
            setorderBy("asc")
        }
    }, [deletedProducts, filter])

    const FetchData = async () => {
        const response = await axios.get(`http://localhost:4444/products`, {
            params: filter
        });
        // console.log("🚀 ~ file: PrOduCt.jsx:38 ~ FetchData ~ response:", response)
        setproducts(response.data.data[1])
        setNoOfPage(Math.ceil(response.data.data[0]/filter.noofRows))
    }

    //get Checkbox value
    const getCheckboxvalue = (e) => {
        const { checked, value } = e.target
        console.log("🚀 ~ file: Products.jsx:37 ~ getCheckboxvalue ~ name:", value)
        console.log("🚀 ~ file: Products.jsx:37 ~ getCheckboxvalue ~ checked:", checked)
        if (checked) {
            setcheckbox([...checkbox, value])
        }
        else {
            setcheckbox([...checkbox.filter(per => per !== value)])
        }
    }

    //Delete Product
    const DeleteProduct = async () => {

        console.log("🚀 ~ file: Products.jsx:52 ~ DeleteProduct ~ DeleteProduct:", checkbox)
        deletdProducts = await axios.delete(`http://localhost:4444/deleteproduct/${checkbox}`)
        setdeletedProducts(deletdProducts)
    }
    //sorting by fields

    const getSerchingWord = async (e) => {

        const { name, value } = e.target
        console.log("🚀 ~ file: PrOduCt.jsx:69 ~ getSerchingWord ~ value:", value)
        console.log("🚀 ~ file: PrOduCt.jsx:69 ~ getSerchingWord ~ name:", name)
        setfilter({ ...filter, [name]: value })
    }

    const getNoOfRows = (e) => {
        const { name, value } = e.target
        if (parseInt(value) >= 1)
            setfilter({ ...filter, [name]: parseInt(value) })
    }


    const paginationClick = (e) => {
        console.log("🚀 ~ file: PrOduCt.jsx:91 ~ paginationClick ~ e:", NoOfPage)
        
        const btn = e.target.innerText.toLowerCase()
        console.log("🚀 ~ file: PrOduCt.jsx:84 ~ paginationClick ~ name:", btn)
        if (btn == "next") {
            if(filter.currentPage!=NoOfPage){

            setfilter({ ...filter, currentPage: filter.currentPage + 1 })
            }
        }
        else {
            if (filter.currentPage > 1) {
                setfilter({ ...filter, currentPage: filter.currentPage - 1 })
            }

        }

    }

    const sorting=(e)=>{

        const Fieldname=e.target.innerText.toLowerCase()
        console.log("🚀 ~ file: PrOduCt.jsx:99 ~ sorting ~ Fieldname:", Fieldname)
        setfilter({...filter,fieldname:e.target.innerText.toLowerCase().trim(),isAscending:orderBy})

    }

    return (
        <>
            <div className="mainbodytable">
                <h2 className='pt-3'>Products</h2>
                <div className="searchfield justify-content-last" >
                    <TextField id="search" label="Search Title" onChange={(e) => { getSerchingWord(e) }} name="searchtitle" variant="outlined" />
                </div>
                <TableContainer component={Paper} className='ms-4 me-4 tableContainer'>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" className='boldText' >Index</TableCell>
                                <TableCell align="center" className='boldText' >Image</TableCell>
                                <TableCell align="center" className='boldText' onClick={(e)=>{sorting(e)}}>Title <i class="bi bi-arrow-down-up"></i></TableCell>
                                <TableCell align="center" className='boldText' onClick={(e)=>{sorting(e)}}>Description <i class="bi bi-arrow-down-up"></i></TableCell>
                                <TableCell align="center" className='boldText'>
                                    {checkbox.length != 0 ? <Button variant="contained" onClick={() => { DeleteProduct() }} className='deleteProduct'>Delete</Button> : <p className='m-1'>Checkbox</p>}</TableCell>
                                {/* <TableCell align="center">Protein&nbsp;(g)</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {products.map((row, index) => (
                                <TableRow
                                    key={index}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell align="center">{index + 1}</TableCell>
                                    <TableCell align="center"><img className="card-img-top" src={`http://localhost:4444/uploads/${row?.Image}`} /></TableCell>
                                    <TableCell align="center">{row.title}</TableCell>
                                    <TableCell align="center">{row.description}</TableCell>
                                    <TableCell align="center"><FormControlLabel
                                        value={row?.id}
                                        // {...checkbox.includes(row?.id) ? checked:``}
                                        checked={checkbox.includes(row?.id) ? true : false}
                                        control={<Checkbox />}
                                        onChange={(e) => { getCheckboxvalue(e) }} labelPlacement="end"
                                    />
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>

                </TableContainer>
                <div className="pagination">
                    <label className='pt-2 me-4'><b>No. of Records </b></label>
                    <TextField id="records" label="No of Records" className='me-3 noofRecord' onChange={(e) => { getNoOfRows(e) }} name="noofRows" variant="outlined" />
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <span className="page-link" onClick={(e) => { paginationClick(e) }} aria-label="Previous" name="Previous">
                                    {/* <span aria-hidden="true">&laquo;</span> */}
                                    <span className="sr-only">Previous</span>
                                </span>
                            </li>
                            <li className="page-item"><span className="page-link">{filter.currentPage}</span></li>
                            <li className="page-item">
                                <span className="page-link" onClick={(e) => { paginationClick(e) }} aria-label="Next" name="Next">
                                    <span className="sr-only">Next</span>
                                    {/* <span aria-hidden="true">&raquo;</span> */}
                                </span>
                            </li>
                        </ul>
                    </nav>
                </div>

                {JSON.stringify(NoOfPage)}
                {/* {JSON.stringify(search)} */}
            </div>
        </>
    )
}
