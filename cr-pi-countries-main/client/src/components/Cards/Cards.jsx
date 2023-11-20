// Components
import Card from '../Card/Card';
// Styles
import styles from './Cards.module.css';

const Cards = ({currentCards}) => {
    return (
        <div className={styles.container}>
            <div className={styles.cards}>
                {currentCards.map((country) => (
                    <Card
                    key={country?.ID}
                    id={country?.ID}
                    name={country?.name}
                    image={country?.image}
                    continente={country?.continente} />
                ))}
            </div>
        </div>
    )
}

export default Cards;