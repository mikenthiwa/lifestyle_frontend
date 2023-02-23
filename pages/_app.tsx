import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { SessionProvider } from "next-auth/react"
import theme from "../lib/theme";
import '@fontsource/open-sans'



export default function App({ Component, pageProps }: AppProps) {
  return(
  <ChakraProvider theme={theme}>
    <SessionProvider
      session={pageProps.session}
    >
      <Component {...pageProps} />
    </SessionProvider>
  </ChakraProvider>
  )
}
