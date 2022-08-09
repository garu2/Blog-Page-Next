import Image from 'next/image';
import Link from 'next/link';
import Layout from '../components/Layout';

export default function About() {

    return (
        <div className="container">
            <Layout pagina="About">
                <h2>Desde el home</h2>
                <Link href="/">Ir Home</Link>
            </Layout>
            
        </div>
    )
} 