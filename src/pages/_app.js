import '@/styles/globals.css'
import Navbar from 'components/Layout/Navbar'
import { SessionProvider } from "next-auth/react"
import { store } from '../Redux/Store'
import { Provider } from 'react-redux'

export default function App({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
    <SessionProvider session={pageProps.session}>
    <Navbar></Navbar>
    <Component {...pageProps} />
    </SessionProvider>
    </Provider>
    </>
  )
  
  
}
