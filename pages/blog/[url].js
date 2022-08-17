import Layout from "../../components/Layout"
//import { useRouter } from 'next/router';

import Image from "next/image";
import style from "../../styles/SinglePost.module.css";
import { formatDate } from "../../helpers";


export default function SingleBlog({ single }) {
    //const router = useRouter();

    const { contenido, createdAt, titulo, imagen } = single[0];

    return (
            <Layout pagina={titulo} titleHero={titulo} isSingle="titleHero">
                <div className={` ${style.singlePost}`}>

                    <Image src={`${process.env.NEXT_PUBLIC_API_URL}${imagen?.url}`}
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
    const { url } = query;
    const urlNew = `${process.env.API_URL}/blogs?url=${url}`;
    const response = await fetch(urlNew);
    const responseJson = await response.json();
    return {
        props: {
            single: responseJson
        }
    }
}