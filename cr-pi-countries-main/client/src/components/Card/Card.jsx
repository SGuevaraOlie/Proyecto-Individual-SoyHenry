// Router
import { Link } from 'react-router-dom';
// Styles
import styles from './Card.module.css'

const Card = ({ id, nombre, image }) => {
    return (
        <div>
            <Link to={`/detail/${id}`}>
                <div>
                    <h2>{id}</h2>
                    <img src={image} alt="" className={styles.image} />
                    <h1>{nombre}</h1>
                </div>
            </Link>
        </div>
    )
}

export default Card;