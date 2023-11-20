// Routing
import { Link, Route, Routes } from 'react-router-dom';
// Components
import SearchBar from '../SearchBar/SearchBar';
// Helpers
import PATHROUTES from '../../helpers/PathRoutes.helper';
// Styles
import styles from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={styles.navMain}>
            <div className={styles.links}>
                <Link to={PATHROUTES.LANDING}><h1>Landing</h1></Link>
                <Link to={PATHROUTES.HOME}><h1>Home</h1></Link>
                <Link to={PATHROUTES.FORM}><h1>Crear Actividades</h1></Link>
            </div>
            <Routes>
                <Route path={PATHROUTES.HOME} element={<SearchBar />} />
            </Routes>
        </div>
    )
}

export default NavBar;