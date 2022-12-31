import '../styles/index.css'
import { ThemeProvider } from 'use-theme-switcher';
import { IntlProvider } from 'react-intl';
import { useRouter } from "next/router"

const languages = {
  en: require('../locale/english.json'),
  es: require('../locale/espanol.json')
};

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  const { locale, defaultLocale } = router;
  const messages = languages[locale];
  return <ThemeProvider>
     <IntlProvider messages={messages} locale={locale} defaultLocale={defaultLocale}>
      <Component {...pageProps} />
      </IntlProvider>
    </ThemeProvider>
}

export default MyApp
