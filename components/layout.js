import Footer from '../components/footer';
import Meta from '../components/meta';
import Header from '../components/header';

export default function Layout({ children }) { 
  return (
    <>
      <Meta />
      <div id="site-content">
      <div className="min-h-screen">
        <Header />
        <main className="text-default bg-default">{children}</main>
      </div>
      <Footer />
      </div>
    </>
  )
}
