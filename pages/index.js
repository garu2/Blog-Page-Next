
import Layout from '../components/Layout';
import styles from '../styles/Home.module.css'
import CardPost from '../components/CardPost';

export default function Home({ posts }) {
  console.log("Post: ", posts);
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
  const url = 'http://localhost:1337/blogs';
  //const url = 'http://localhost:1337/blogs/62f664ee9362ba3f00884ba2';
  const response = await fetch(url);
  const responseJson = await response.json();
  //console.log("res: ", responseJson);   

  return {
    props: {
      posts: responseJson
    }

  }
}
