import { requestMethod } from '../../../ApiUtils/constants';
import { requestModel } from '../../../ApiUtils/Model/requestModel';
import { axiosRepository } from '../../Repository/axios';
import { AdminEndPoints } from '../../../EndPoint/Admin';

export const AdmiService = {
  GetPermissions: async () => {
    console.log("Inside SERVICE")


    const reqestObj = new requestModel();
    try {
      reqestObj.method = requestMethod.GET;
      reqestObj.url = AdminEndPoints.GET_PERMISSIONS
      reqestObj.data = null;
      return await axiosRepository.request(reqestObj);
    } catch (error) {
      console.log('error from services::>', error);
    }
  }
}