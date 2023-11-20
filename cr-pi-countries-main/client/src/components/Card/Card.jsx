// Router
import { Link } from 'react-router-dom';
// Styles
import styles from './Card.module.css'

const Card = ({ id, name, image, continente }) => {
    return (
        <div className={styles.card}>
            <Link to={`/detail/${id}`}>
                <div>
                    <h2>{id}</h2>
                    <img src={image} alt="" className={styles.image} />
                    <h1>{name}</h1>
                    <h1>{continente}</h1>
                </div>
            </Link>
        </div>
    )
}

export default Card;