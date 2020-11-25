import Document, { Html, Head, Main, NextScript } from 'next/document'
import themeScript from '../components/theme';

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script type="text/javascript" dangerouslySetInnerHTML={{ __html: themeScript }}></script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
