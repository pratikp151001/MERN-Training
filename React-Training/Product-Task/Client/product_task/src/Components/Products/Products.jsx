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



export default function Products() {
    let deletdProducts;

    const [products, setproducts] = useState([])
    const [checkbox, setcheckbox] = useState([])
    const [deletedProducts, setdeletedProducts] = useState([])
    const [isAscending, setisAscending] = useState("asc")
    const [search, setsearch] = useState("")
    const [noofRecords, setnoofRecords] = useState(5)
    const [currentPage, setcurrentPage] = useState(1)

    useEffect(() => {
        setcheckbox([])
        // fetchData();
        sortingbyfields("e")
        setcurrentPage(1)
    }, [deletedProducts])

    // const fetchData = async () => {
    //     try {
    //         const response = await axios.get('http://localhost:4444/products');
    //         console.log('Response:', response.data);
    //         setproducts(response.data.data);
    //     } catch (error) {
    //         console.error('Error:', error);
    //     }
    // };

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

    const sortingbyfields = async (e) => {
        // console.log("🚀 ~ file: Products.jsx:62 ~ sortingbyfields ~ e:", e.target)

        // console.log("🚀 ~ file: Products.jsx:74 ~ sortingbyfields ~  e.target.value:", e.target.value)
        // console.log("🚀 ~ file: Products.jsx:89 ~ sortingbyfields ~ e.target.name:", e.target.name)

        let FieldName;
        let CurrentPAGE;
        let SearchingWord;
        let NoofRecords;
        console.log("🚀 ~ file: Products.jsx:92 ~ sortingbyfields ~ e.target:", e.target)
        if (e.target && e.target.innerText.toLowerCase() == "next") {
            CurrentPAGE = currentPage + 1
            setcurrentPage(currentPage + 1)
        }
        else if (e.target && e.target.innerText.toLowerCase() == "previous") {
            if (currentPage == 1) {
                CurrentPAGE = currentPage
            }
            else {
                CurrentPAGE = currentPage - 1

                setcurrentPage(currentPage - 1)
            }
        }
        else if (e.target && e.target.name == "searchtitle") {
            console.log("ww")
            CurrentPAGE = currentPage
            SearchingWord = (e.target.value).trim() 
            console.log("🚀 ~ file: Products.jsx:97 ~ sortingbyfields ~ e.target.value:", e.target.value)
        }
        // else if()
        else {
            console.log("object123")
            if (e.target) {
                console.log("object")
                FieldName = e.target.innerText.toLowerCase().trim()
                CurrentPAGE = currentPage
                NoofRecords = e.target.value!=undefined && (e.target.value).trim()!="" && parseInt(e.target.value)>0  ? parseInt(e.target.value) :5
            }
        }



        console.log("🚀 ~ file: Products.jsx:111 ~ sortingbyfields ~ noofRecords:", SearchingWord)
        console.log("🚀 ~ file: Products.jsx:111 ~ sortingbyfields ~ state:", search)

        const response = await axios.get(`http://localhost:4444/products`, {
            params: {
                fieldname: FieldName,
                orderby: isAscending,
                searchWord: SearchingWord || SearchingWord == "" ? SearchingWord : search,
                currentPage: CurrentPAGE,
                take: NoofRecords || noofRecords
            }
        });
        if (parseInt(NoofRecords) != undefined && parseInt(NoofRecords) > 0) {
            setnoofRecords(parseInt(NoofRecords))
        }
        // console.log("🚀 ~ file: Products.jsx:76 ~ sortingbyfields ~ e.target.value:", e.target.value)
        console.log("🚀 ~ file: Products.jsx:125 ~ sortingbyfields ~ SearchingWord:", SearchingWord)
        if (SearchingWord != undefined) {
            setsearch(SearchingWord)
        }
        if (isAscending == "asc") {

            setisAscending("desc")
        }
        else {
            setisAscending("asc")
        }
        console.log("🚀 ~ file: Products.jsx:63 ~ sortingbyfields ~ response:", response)
        setproducts(response.data.data)

    }

    //get search value

    return (
        <>
            <div className="mainbodytable">
                <h2 className='pt-3'>Products</h2>
                <div className="searchfield justify-content-last" >
                    <TextField id="search" label="Search Title" onChange={(e) => { sortingbyfields(e) }} name="searchtitle" variant="outlined" />
                </div>
                <TableContainer component={Paper} className='ms-4 me-4 tableContainer'>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center" className='boldText' >Index</TableCell>
                                <TableCell align="center" className='boldText' >Image</TableCell>
                                <TableCell align="center" onClick={(e) => { sortingbyfields(e) }} className='boldText'>Title <i class="bi bi-arrow-down-up"></i></TableCell>
                                <TableCell align="center" onClick={(e) => { sortingbyfields(e) }} className='boldText'>Description <i class="bi bi-arrow-down-up"></i></TableCell>
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
                                    <TableCell align="center">{index+1}</TableCell>
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
                    <TextField id="records" label="No of Records" onChange={(e) => { sortingbyfields(e) }} className='me-3 noofRecord' name="noofrecord" variant="outlined" />
                    <nav aria-label="Page navigation example">
                        <ul className="pagination">
                            <li className="page-item">
                                <span className="page-link" onClick={(e) => { sortingbyfields(e) }} aria-label="Previous">
                                    {/* <span aria-hidden="true">&laquo;</span> */}
                                    <span className="sr-only">Previous</span>
                                </span>
                            </li>
                            <li className="page-item"><span className="page-link">{currentPage}</span></li>
                            <li className="page-item">
                                <span className="page-link" onClick={(e) => { sortingbyfields(e) }} aria-label="Next">
                                    <span className="sr-only">Next</span>
                                    {/* <span aria-hidden="true">&raquo;</span> */}
                                </span>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* {JSON.stringify(noofRecords)}
                {JSON.stringify(search)} */}
            </div>
        </>
    )
}
