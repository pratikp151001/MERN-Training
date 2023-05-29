import axios from 'axios'

export const RegisterUser=async(userDetails) => {
    console.log("🚀 ~ file: UserAPIs.jsx:4 ~ RegisterUser ~ userDetails:", userDetails)
    

    // const options = {
    //     method: 'POST',
    //     url: 'http://localhost:6000/registerUser',
        
        
    //     data:userDetails
    // };

    // let res=await axios.request(options)
    // return res
  
     let res= await axios.post('http://localhost:6000/registerUser',userDetails)
     console.log("🚀 ~ file: UserAPIs.jsx:8 ~ RegisterUser ~ res:", res)
   return res


}