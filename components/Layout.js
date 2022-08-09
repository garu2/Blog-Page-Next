import Head from 'next/head';
import Header from './Header';

const Layout = ({ children, pagina }) => {
  return (
    <div>
        <Head>
            <title>Blog - {pagina}</title>
            <meta name="description" content="Blog page" />
        </Head>

        <Header/>
        { children }
    </div>
    
  )
}

export default Layout;