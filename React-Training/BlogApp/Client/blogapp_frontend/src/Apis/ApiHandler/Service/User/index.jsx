import { requestMethod } from '../../../ApiUtils/constants';
import { requestModel } from '../../../ApiUtils/Model/requestModel';
import { axiosRepository } from '../../Repository/axios';
import { UserEndPoints } from '../../../EndPoint/User';
export const UserService = {
  RegisterUser: async (body) => {
    // console.log("🚀 ~ file: index.jsx:7 ~ RegisterUser: ~ body:", body)


    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.POST;
      reqestObj.url = UserEndPoints.REGISTER_USER
      reqestObj.data = body;
      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  },

  LoginUser: async (body) => {
    // console.log("🚀 ~ file: index.jsx:22 ~ LoginUser: ~ body:", body)


    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.POST;
      reqestObj.url = UserEndPoints.LOGIN_USER
      reqestObj.data = body;
      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  },


  FetchAllUsers: async () => {
    // console.log("🚀 ~ file: index.jsx:22 ~ FetchAll: ~ body:", "body")


    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.GET;
      reqestObj.url = UserEndPoints.GETALL_USERS
      reqestObj.data = null;
      reqestObj.headers = `Authorization: Bearer ${JSON.parse(localStorage.getItem('token'))}`
      // console.log("🚀 ~ file: index.jsx:47 ~ FetchAllUsers: ~ reqestObj:", reqestObj)


      // console.log("🚀 ~ file: index.jsx:47 ~ FetchAllUsers: ~ localStorage.getItem('token'):", localStorage.getItem('token'))
      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  },

  DeleteUser: async (id) => {
    // console.log("🚀 ~ file: index.jsx:58 ~ DeleteUser: ~ async:", "async")
    


    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.PUT;
      reqestObj.url = UserEndPoints.DELETE_USER(id)
      reqestObj.data = null;
      reqestObj.headers = `Authorization: Bearer ${JSON.parse(localStorage.getItem('token'))}`

      // console.log("🚀 ~ file: index.jsx:69 ~ DeleteUser: ~ reqestObj:", reqestObj)

      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  },

  FetchProfile: async (id) => {
    // console.log("🚀 ~ file: index.jsx:78 ~ FetchProfile: ~ id:", id)
    


    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.GET;
      reqestObj.url = UserEndPoints.FETCH_PROFILE(id)
      reqestObj.data = null;
      reqestObj.headers = `Authorization: Bearer ${JSON.parse(localStorage.getItem('token'))}`

      // console.log("🚀 ~ file: index.jsx:89 ~ FetchProfile: ~ reqestObj:", reqestObj)

      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  },

  UpdateProfile: async (id,body) => {
    // console.log("🚀 ~ file: index.jsx:98 ~ UpdateProfile: ~ id:", id)
    
    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.PUT;
      reqestObj.url = UserEndPoints.UPDATE_PROFILE(id)
      reqestObj.data = body;
      reqestObj.headers = `Authorization: Bearer ${JSON.parse(localStorage.getItem('token'))}`

      // console.log("🚀 ~ file: index.jsx:89 ~ FetchProfile: ~ reqestObj:", reqestObj)

      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  },
  OwnProfile: async () => {
   // console.log("🚀 ~ file: index.jsx:115 ~ OwnProfile: ~ OwnProfile:", "OwnProfile")
   
    
    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.GET;
      reqestObj.url = UserEndPoints.PROFILE
      reqestObj.data = null;
      reqestObj.headers = `Authorization: Bearer ${JSON.parse(localStorage.getItem('token'))}`

      // console.log("🚀 ~ file: index.jsx:125 ~ OwnProfile: ~ reqestObj:", reqestObj)

      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  }
}


