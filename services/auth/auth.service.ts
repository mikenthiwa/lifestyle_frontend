import axios from 'axios';
import { toast } from 'react-toastify';
interface Response<T> {
  data: T
}
export const SignIn = async (token: any): Promise<Response<any> | any>  => {
  try {
    return await axios.post(`${process.env.BASE_URL}/auth/login/google`, {token});
  } catch (error: unknown) {
    toast.error('Something went wrong')
  }
}

export const RefreshToken = async (refreshToken: string) => {
  try {
    return await axios.get(`${process.env.BASE_URL}/auth/refreshToken`, {
      headers: {
        Cookie:refreshToken
      }
    })
  } catch (e) {
    toast.error('Something went wrong')
  }
}
