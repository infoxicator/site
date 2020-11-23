import { useContext, useEffect } from 'react';
import Footer from '../components/footer';
import Meta from '../components/meta';
import Header from '../components/header';
import ThemeContext from '../context/ThemeContext';

export default function Layout({ children }) { 
  const { theme, switchTheme } = useContext(ThemeContext);
  console.log('theme set', theme);
  return (
    <>
      <Meta />
      <div id="site-content" className="theme-twitter">
      <div className="min-h-screen">
        <Header />
        <main className="text-default bg-default">{children}</main>
      </div>
      <Footer />
      </div>
    </>
  )
}
