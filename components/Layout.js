import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, pagina, titleHero, isSingle }) => {
  return (
    <div>
        <Head>
            <title>Blog - {pagina}</title>
            <meta name="description" content="Blog page" />
        </Head>

        <Header titleHero={titleHero} isSingle={isSingle} />
          { children }
        <Footer/>
    </div>
    
  )
}

export default Layout;