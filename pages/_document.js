import Document, { Html, Head, Main, NextScript } from 'next/document'
import themeScript from '../components/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        </Head>
        <body>
        <script type="text/javascript" dangerouslySetInnerHTML={{ __html: themeScript }}></script>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
