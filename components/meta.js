import Head from 'next/head'
import { HOME_OG_IMAGE_URL, SITE_URL, SITE_DESCRIPTION, SITE_TITLE } from '../lib/constants'


export default function Meta() {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link
        rel="mask-icon"
        href="/favicon/safari-pinned-tab.svg"
        color="#15202B"
      />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#15202B" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#15202B" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta
        key="description"
        name="description"
        content={SITE_DESCRIPTION}
      />
      <meta key="og:image" property="og:image" content={HOME_OG_IMAGE_URL} />
      <link key="canonical" rel="canonical" href={SITE_URL} />
      <meta key="og:url" property="og:url" content={SITE_URL} />
      <meta key="og:title" property="og:title" content={SITE_TITLE} />
      <meta key="og:description" property="og:description" content={SITE_DESCRIPTION} />
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:title" name="twitter:title" content={SITE_TITLE} />
      <meta key="twitter:creator" name="twitter:creator" content="@infoxicador"/>
      <meta key="twitter:description" name="twitter:description" content={SITE_DESCRIPTION} />
      <meta key="twitter:image" name="twitter:image" content={HOME_OG_IMAGE_URL} />
      <meta key="kewords" name="keywords" content="react, micro frontends, learn, javascript, blog, tutorial"></meta>
      <script type="module" src="https://unpkg.com/ionicons@5.2.3/dist/ionicons/ionicons.esm.js"></script>
      <script noModule="" src="https://unpkg.com/ionicons@5.2.3/dist/ionicons/ionicons.js"></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/themes/prism-tomorrow.min.css"></link>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/prism/1.19.0/plugins/line-numbers/prism-line-numbers.min.css"></link>
    </Head>
  )
}
