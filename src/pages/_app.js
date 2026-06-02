import '@/styles/globals.css'
import SmoothScroll from './components/SmoothScroll'
import ScrollToTop from './components/ScrollToTop'

export default function App({ Component, pageProps }) {
  return (
    <SmoothScroll>
      <ScrollToTop />
      <Component {...pageProps} />
    </SmoothScroll>
  )
}
