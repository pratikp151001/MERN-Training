
import React from 'react';
import { axiosRequest } from './BaseUrl';
const  FetchTodoAPI=async()=> {

  
    
    
 
  
  return axiosRequest.get('/todos')
}

export default FetchTodoAPI