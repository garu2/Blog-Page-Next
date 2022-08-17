
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'
import CardPost from '../components/CardPost';

export default function Home({ posts }) {

  return (
    <div >

      <Layout pagina="Home" titleHero="BlogPage">


        <div className='container'>
          <div className={styles.contentCard}>
          {
            posts.map(item => (
              <CardPost
                key={item._id}
                id={item._id}
                date={item.createdAt}
                image={item.imagen.formats.small.url}
                summary={item.resumen}
                title={item.titulo}
                url={item.url}
              />
            ))
          }
          </div>
        </div>
        
      </Layout>
      
    </div>
  )
}

export async function getServerSideProps() {
  const url = `${process.env.API_URL}/blogs`;
  //const url = 'http://localhost:1337/blogs/62f664ee9362ba3f00884ba2';
  const response = await fetch(url);
  const responseJson = await response.json();
  //console.log("URL:URL ", responseJson);   

  return {
    props: {
      posts: responseJson
    }

  }
}
