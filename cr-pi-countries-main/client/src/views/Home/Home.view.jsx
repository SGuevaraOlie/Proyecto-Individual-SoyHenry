// Router
import { Link } from 'react-router-dom';
// Styles
import styles from './Home.module.css'
// Helpers
import PATHROUTES from '../../helpers/PathRoutes.helper';

const home = () => {
    return (
        <div>
            <h1>hola soy la queso</h1>
            <Link to={PATHROUTES.DETAIL}>Aca vas al detail</Link>
            <Link to={PATHROUTES.FORM}>Aca vas al formulario</Link>
        </div>
    )
}

export default home;