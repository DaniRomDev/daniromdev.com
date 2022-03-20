import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar'
import BasicLayout from 'layouts/BasicLayout'
import { useFathomAnalytics } from 'hooks/useFathomAnalytics'
import MagazineLayout from 'layouts/MagazineLayout'

function MyApp({ Component, pageProps }: AppProps) {
  useFathomAnalytics()

  return (
    <ThemeProvider attribute="class">
      <NextNProgress options={{ easing: 'ease', speed: 500 }} />
      <MagazineLayout>
        <Component {...pageProps} />
      </MagazineLayout>
    </ThemeProvider>
  )
}

export default MyApp
