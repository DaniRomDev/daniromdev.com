import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import NextNProgress from 'nextjs-progressbar'
import BasicLayout from 'layouts/BasicLayout'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      <NextNProgress options={{ easing: 'ease', speed: 500 }} />
      <BasicLayout>
        <Component {...pageProps} />
      </BasicLayout>
    </ThemeProvider>
  )
}

export default MyApp
