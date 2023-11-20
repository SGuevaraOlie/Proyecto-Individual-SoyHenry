// React
import { useEffect } from 'react';
// Redux
import { useDispatch, useSelector } from 'react-redux';
// Actions
import { getCountries, setCurrentPage } from '../../redux/actions';
// Components
import Cards from '../../components/Cards/Cards';
import Filter from '../../components/Filters/Filter';
import ActivityFilter from '../../components/Filters/ActivityFilter';
import Sort from '../../components/Sort/Sort';
// Styles
import styles from './Home.module.css';

const Home = () => {
    const dispatch = useDispatch();
    const countries = useSelector((state) => state.countries);
    const currentPage = useSelector((state) => state.currentPage);
    const cardsPorPagina = 10;
    const indexUltimaCarta = currentPage*cardsPorPagina;
    const indexPrimerCarta = indexUltimaCarta - cardsPorPagina;
    const currentCards = countries.slice(indexPrimerCarta, indexUltimaCarta);
    const primerPagina = () => dispatch(setCurrentPage(1));
    const siguientePagina = () => dispatch(setCurrentPage(currentPage+1));
    const anteriorPagina = () => dispatch(setCurrentPage(currentPage-1));
    useEffect (() => {
        dispatch(getCountries());
    }, [dispatch]);
    return(
        <div className={styles.mainDiv}>
            <div className={styles.sortDiv}>
                <Sort />
            </div>
            <div className={styles.filtersDiv}>
                <Filter />
                <ActivityFilter />
            </div>
            <div className={styles.Cards}>
                <Cards currentCards={currentCards} />
            </div>
            <div className={styles.paginado}>
                <button onClick={primerPagina} disabled={currentPage===1}>Primer página</button>
                <button onClick={anteriorPagina} disabled={currentPage===1}>Página Anterior</button>
                <button onClick={siguientePagina} disabled={indexUltimaCarta >= countries.length}>Página siguiente</button>
            </div>
        </div>
    )
}

export default Home