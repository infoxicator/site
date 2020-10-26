import Alert from '../components/alert';
import Footer from '../components/footer';
import Meta from '../components/meta';
import Header from '../components/header';

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div id="site-content" className="theme-blue">
      <div className="min-h-screen">
        <Alert preview={preview} />
        <Header />
        <main className="text-default bg-default">{children}</main>
      </div>
      <Footer />
      </div>
    </>
  )
}
