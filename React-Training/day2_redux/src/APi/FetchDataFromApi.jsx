import axios from 'axios'

export const FetchDataFromAppi=async() => {
    console.log("object")

    return await axios.get("https://jsonplaceholder.typicode.com/users")
    


}