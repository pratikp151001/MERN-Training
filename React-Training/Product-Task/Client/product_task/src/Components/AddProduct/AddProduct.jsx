import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import '../AddProduct/Addproduct.css'
import Button from '@mui/material/Button';
import axios from 'axios'

export default function AddProduct() {

  const [formdata, setformdata] = useState({
    // title:"",
    // description:"",
    // category:"",
    // file:""
  })
  const [error, seterror] = useState({})
  const [productImage, setproductImage] = useState()

  //Handle Change
  const handleChange = (e) => {
    console.log("object", e.target.value)
    const { name, value } = e.target
    console.log("🚀 ~ file: AddProduct.jsx:21 ~ handleChange ~ value:", value)
    console.log("🚀 ~ file: AddProduct.jsx:21 ~ handleChange ~ name:", name)

    if (value == "") {
      seterror({ ...error, [name]: `Please Enter ${name}` })
      const { [name]: any, ...restvalues } = formdata
      setformdata(restvalues)
    }
    else {

      setformdata({ ...formdata, [name]: value })

      const { [name]: any, ...resterror } = error
      seterror(resterror)
    }

  }

  //Handle Submit
  const handleSubmit = async () => {
    console.log("🚀 ~ file: AddProduct.jsx:42 ~ handleSubmit ~ Object.keys(error).length:", Object.keys(error).length)
    console.log("🚀 ~ file: AddProduct.jsx:43 ~ handleSubmit ~ Object.keys(formdata).length:", Object.keys(formdata).length)
    if (Object.keys(formdata).length == 3 && Object.keys(error).length == 0 && productImage) {
      let formData=new FormData()
      formData.append("productImage",productImage)
      formData.append("title",formdata.title)
      formData.append("description",formdata.description)

      formData.append("category",formdata.category)

      const addProduct= await axios.post("http://localhost:4444/addproduct",formData)
      console.log("Api Called")
    }
    else {
      let Errors = {}
      if (!Object.keys(formdata).includes('title')) {
        Errors.title= "Please Enter Title" 
      }
      if (!Object.keys(formdata).includes('description')) {
        Errors.description= "Please Enter description" 
      }
      if (!Object.keys(formdata).includes('category')) {
        Errors.category="Please Enter category" 
      }
      if (!Object.keys(formdata).includes('file')) {
        Errors.file = "Please Enter file" 
      }

      seterror(Errors)
    }
  }

  //upload Product Image

  const uploadproductImage = (e) => {
    console.log("🚀 ~ file: AddProduct.jsx:70 ~ uploadproductImage ~ e:", e.target.files[0])

    const {name}=e.target
    if (e.target.files[0].size < 1000000) {

      if (e.target.files[0].type.includes('image')) {

        setproductImage(e.target.files[0])
        const { [name]: any, ...resterror } = error
        seterror(resterror)
      }
      else {
        setproductImage()
        seterror({ ...error, file: "File must b image" })
      }
    }
    else {
      setproductImage()
      seterror({ ...error, file: "File size  must be leass than 10 mb " })
    }

  }

  return (
    <>
      <div className="mainbody p-3">
        <h2>Add Product</h2>
        <Grid container spacing={2} className='m-2 p-2'>
          <Grid item xs={12}>
            <TextField id="title" label="Product Title" name="title" onChange={(e) => { handleChange(e) }} className='fields' variant="outlined" />
            {error.title ? <p className='errmsg'>{error.title}</p> : ``}
          </Grid>
          <Grid item xs={12}>
            <TextField id="description" label="Product description" name="description" onChange={(e) => { handleChange(e) }} className='fields' variant="outlined" />
            {error.description ? <p className='errmsg'>{error.description}</p> : ``}
          </Grid>
          <Grid item xs={12}>
            <TextField id="category" label="Product category" name="category" onChange={(e) => { handleChange(e) }} className='fields' variant="outlined" />
            {error.category ? <p className='errmsg'>{error.category}</p> : ``}
          </Grid>
          <Grid item xs={12}>
            <div className="fileupload">
              <input className="form-control" type="file" name='file' onChange={(e) => { uploadproductImage(e) }} id="productFile" />
            </div>
            {error.file ? <p className='errmsg'>{error.file}</p> : ``}

          </Grid>
          <Grid item xs={12}>
            <Button onClick={() => { handleSubmit() }} variant="contained">Contained</Button>
          </Grid>
        </Grid>
        {JSON.stringify(formdata)}
        {JSON.stringify(error)}

      </div>
    </>
  )
}
