import '../styles/index.css'
import { ThemeProvider } from 'use-theme-switcher';

function MyApp({ Component, pageProps }) {
  return <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
}

export default MyApp
