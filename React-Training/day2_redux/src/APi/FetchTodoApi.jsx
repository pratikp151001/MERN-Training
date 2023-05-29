import axios from 'axios'

export const FetchTodoApi=async() => {
    console.log("object")

    return await axios.get("https://jsonplaceholder.typicode.com/todos")
    


}
