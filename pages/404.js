import Container from '../components/container'
import Layout from '../components/layout'
import Link from 'next/link';

export default function Custom404() {
    return (
        <Layout>
            <Container>
            <div className="flex h-screen">
                <div className="m-auto text-center">
                <h1 className="text-8xl">:(</h1>
                <h2 className="text-5xl">Uncaught TypeError: undefined is not a function</h2>
                <h3>Just kidding, you probably found a dead link...</h3>
                <div className="mt-5 flex justify-center w-auto h-auto">
                <Link href="/">
                    <a><img src="/gohome.jpg" alt="go home" /></a>
                </Link>
                </div>
                </div>
            </div>
            </Container>
        </Layout>)
  }