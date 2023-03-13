import axios from 'axios';
import { toast } from 'react-toastify';
interface Response<T> {
  data: T
}

interface Refresh {
  success: boolean;
  statusCode: number;
  accessToken: string;
  accessTokenExpiry: string;
}
export const SignIn = async (token: any): Promise<Response<any> | any>  => {
  try {
    return await axios.post(`${process.env.BASE_URL}/auth/login/google`, {token});
  } catch (error: unknown) {
    toast.error('Something went wrong')
    return;
  }
}

export const RefreshToken = async (refreshToken: string): Promise<Response<Refresh> | void> => {
  try {
    return await axios.get(`${process.env.BASE_URL}/auth/refreshToken`, {
      withCredentials: true,
      headers: {
        Cookie:refreshToken
      }
    })
  } catch (error: unknown) {
    toast.error('Something went wrong')
    return
  }
}
