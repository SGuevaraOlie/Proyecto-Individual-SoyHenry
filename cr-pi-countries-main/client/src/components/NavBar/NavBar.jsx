// Routing
import { Link, Route, Routes, useLocation } from 'react-router-dom';
// Actions
import { resetCountries } from '../../redux/actions';
// Components
import SearchBar from '../SearchBar/SearchBar';
// Helpers
import PATHROUTES from '../../helpers/PathRoutes.helper';
// Styles
import styles from './NavBar.module.css'
// Redux
import { useDispatch } from 'react-redux';

const NavBar = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const handleHomeClick = () => {
        if (location.pathname === PATHROUTES.HOME){
            dispatch(resetCountries())
        }
    }
    return (
        <div className={styles.navMain}>
            <div className={styles.links}>
                <Link to={PATHROUTES.LANDING} className={styles.title}><h1>Countries APP</h1></Link>
                <Link to={PATHROUTES.HOME} className={styles.title} onClick={handleHomeClick}><h1>Home</h1></Link>
                <Link to={PATHROUTES.FORM} className={styles.title}><h1>Crear Actividades</h1></Link>
            </div>
            <Routes>
                <Route path={PATHROUTES.HOME} element={<SearchBar />} />
            </Routes>
        </div>
    )
}

export default NavBar;