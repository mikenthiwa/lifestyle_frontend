import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"
import { ToastContainer } from 'react-toastify';

import {useState} from "react";
import { RefreshTokenHandler } from '../components/refresh-token-handler/refreshTokenHandler'

import 'react-toastify/dist/ReactToastify.css';
import theme from "../lib/theme";
import '@fontsource/open-sans'



export default function App({ Component, pageProps }: AppProps) {
  const [interval, setInterval] = useState(0);
  return(
  <ChakraProvider theme={theme}>
    <SessionProvider
      session={pageProps.session}
      refetchInterval={interval}
    >
      <Component {...pageProps} />
      <RefreshTokenHandler setInterval={setInterval} />
      <ToastContainer />
    </SessionProvider>
  </ChakraProvider>
  )
}
