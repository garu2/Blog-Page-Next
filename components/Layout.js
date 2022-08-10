import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, pagina }) => {
  return (
    <div>
        <Head>
            <title>Blog - {pagina}</title>
            <meta name="description" content="Blog page" />
        </Head>

        <Header/>
        { children }
        <Footer/>
    </div>
    
  )
}

export default Layout;