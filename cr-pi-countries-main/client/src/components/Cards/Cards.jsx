// Components
import Card from '../Card/Card';
// Styles
import styles from './Cards.module.css';

const Cards = ({currentCards}) => {
    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                {currentCards.map((country, index) => (
                    <Card
                    key={country?.id || index}
                    id={country?.id}
                    name={country?.name}
                    image={country?.image}
                    continente={country?.continente} />
                ))}
            </div>
        </div>
    )
}

export default Cards;