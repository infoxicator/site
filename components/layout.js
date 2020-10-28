import { useEffect } from 'react';
import Prism from "Prismjs";
import "prismjs/components/prism-jsx.min";
import "prismjs/components/prism-json.min";
import "prismjs/components/prism-bash.min";

import Footer from '../components/footer';
import Meta from '../components/meta';
import Header from '../components/header';

export default function Layout({ preview, children }) {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  
  return (
    <>
      <Meta />
      <div id="site-content" className="theme-blue">
      <div className="min-h-screen">
        <Header />
        <main className="text-default bg-default">{children}</main>
      </div>
      <Footer />
      </div>
    </>
  )
}
