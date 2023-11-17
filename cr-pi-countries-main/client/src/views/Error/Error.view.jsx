// Router
import { Link } from 'react-router-dom'
// Helpers
import PATHROUTES from '../../helpers/PathRoutes.helper'
// Styles
import styles from './Error.module.css'

const Error = () => {
  return (
    <div className={styles.body}>
      <div className={styles.divText}>
        <h1 className={styles.titulo}>¡Oops!</h1>
        <p className={styles.parrafo}>Parece que te has perdido. ¿Qué intentabas buscar? 🤨</p>
        <p className={styles.parrafo}>Haz clic en este enlace para volver: </p>
        <Link to={PATHROUTES.HOME} className={styles.link}>Llévame al inicio.</Link>
      </div>
    </div>
  )
}

export default Error