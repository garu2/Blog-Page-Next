import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={`container  ${styles.menuLogo}`}>
                <Link href="/">
                    <a>
                        <Image src="/logo.svg" width={170} height={60} alt="Image Logo" />
                    </a>
                </Link>
                <nav>
                    <Link href="/">Home</Link>
                    <Link href="/about">About</Link>
                    <Link href="/blog">Blog</Link>
                    <Link href="/contact">Contact</Link>
                </nav>
            </div>
            <div className={`container ${styles.bigTitle}`}>
                <h2>Blog Page</h2>
            </div>
        </header>
    )
}

export default Header;