import Link from 'next/link';
import Image from 'next/image';

import styles from "../styles/CardPost.module.css";
import  { formatDate } from '../helpers';

const CardPost = ({ title, summary, id, image, date }) => {

    return (
        <Link href={`/${id}`}>
            <article className={styles.cardPost}>
                
                <Image  
                    width={400}
                    height={200}
                    src={`http://localhost:1337${image}`} 
                    alt={title} 
                />
                <div>
                    <h3>{ title }</h3>
                    <p>{ formatDate(date) }</p>
                    <p>{ summary }</p>
                </div>
            </article>
        </Link>
    )
}

export default CardPost;