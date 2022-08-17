import Layout from "../components/Layout";
import style from "../styles/NotFound.module.css";

export default function NotFound() {

    return (
        <Layout pagina="NotFound" titleHero="404">
            <div className={`container ${style.notFound}`}>

                <h1>Not Found Page</h1>
            </div>
        </Layout>
    )
}