import Head from 'next/head'
import Container from '../../components/container'
import Layout from '../../components/layout'
import Intro from '../../components/intro';
import { SITE_TITLE } from '../../lib/constants'

const about = () => (
    <>
      <Layout>
        <Head>
          <title>{SITE_TITLE}</title>
        </Head>
        <Container className="text-secondary bg-secondary">
         <Intro />
        </Container>
      </Layout>
    </>
  )

export default about;