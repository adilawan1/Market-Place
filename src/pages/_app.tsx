import Layout from '@/components/Layout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
Toaster
export default function App({ Component, pageProps }: AppProps) {
  return (<Layout>
  <Toaster position="top-right"/>
  <Component {...pageProps} />
</Layout>)
}
