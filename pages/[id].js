import Layout from "../components/Layout"
import { useRouter } from 'next/router';

import Image from "next/image";
import style from "../styles/SinglePost.module.css";
import { formatDate } from "../helpers";
export default function SingleBlog({ single }) {
    const router = useRouter();
    console.log(single);
    const { contenido, createdAt, titulo, imagen: {url} } = single;
 
    console.log('url: ', url);
    return (
            <Layout pagina={titulo} titleHero={titulo} isSingle="titleHero">
                <div className={` ${style.singlePost}`}>

                    <Image src={`http://localhost:1337${url}`}
                        alt={titulo}
                        width={800}
                        height={400}
                    />
                    <p>{ formatDate(createdAt) }</p>
                    <p>{ contenido }</p>
                </div>

            </Layout>
    )
}

export async function getServerSideProps({ query }) {
    //console.log("query: ", query);
    const { id } = query;
    const url = `http://localhost:1337/blogs/${id}`;
    const response = await fetch(url);
    const responseJson = await response.json();
    return {
        props: {
            single: responseJson
        }
    }
}