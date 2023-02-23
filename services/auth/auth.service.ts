import axios from 'axios';

export const SignIn = async (token: string) => {
  try {
    return await axios.post(`${process.env.BASE_URL}/auth/login/google`, {token});
  } catch (error) {
    console.log(error)
  }
}
