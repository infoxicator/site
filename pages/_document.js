import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ThemeScriptTag } from 'use-theme-switcher';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        </Head>
        <body>
          <ThemeScriptTag defaultDarkTheme="theme-christmas" defaultLightTheme="theme-christmas" />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
