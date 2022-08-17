import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {

    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.flexFooter}`}>
                <Link href="/">
                    <a>
                        <Image src="/logo.svg" width={100} height={38} alt="Image logo"/>
                    </a>
                </Link>
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/contact">Contact</Link>
            </div>
            <div className="container">
                <p className="author">🪐 by <a href="https://github.com/garu2" target="_blank" rel="noopener noreferrer">GaryAT</a></p>
            </div>

        </footer>
    )
}

export default Footer;