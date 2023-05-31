import { requestMethod } from '../../../ApiUtils/constants';
import { requestModel } from '../../../ApiUtils/Model/requestModel';
import { axiosRepository } from '../../Repository/axios';
import { BlogEndPoints } from '../../../EndPoint/Blog';

export const BlogService = {
  createBlog: async (body) => {
    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.POST;
      reqestObj.url = BlogEndPoints.INSERT_BLOG;
      reqestObj.data = body;
      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  },

  GetAllBlog : async () => {
    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.GET;
      reqestObj.url = BlogEndPoints.FETCHALL_BLOG;
      reqestObj.data = null;
      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  },
  DeleteBlog : async (id) => {
    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.DELETE;
      reqestObj.url = BlogEndPoints.DELETE(id);
      reqestObj.data = null;
      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  },
  FetchSingleBlog : async (id) => {
    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.GET;
      reqestObj.url = BlogEndPoints.FETCHSINGLE_BLOG(id);
      reqestObj.data = null;
      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  }
};
