import axios from 'axios'

export const RegisterUser=async()=>{

    return await axios.get('https://jsonplaceholder.typicode.com/todos')


}