// Router
import { useParams } from 'react-router-dom';
// React
import { useState, useEffect } from 'react'
// Axios
import axios from 'axios';
// Styles
import styles from './Detail.module.css'

const Detail = () => {
    const [country, setCountry] = useState({});
    const { id } = useParams();
    useEffect(() => {
        axios(`http://localhost:3001/countries/${id}`)
        .then((res) => {
            setCountry(res.data);
            console.log(res)
        })
        .catch((err) => {
            console.log(err)
            alert('Hubo un error al buscar el país.')
        })
    }, [id]);
    return (
        <div className={styles.mainDiv}>
            <div className={styles.dataDiv}>
                <div className={styles.titleDiv}>
                    <h2>{country?.ID}</h2>
                    <h1>{country?.name}</h1>
                </div>
                <div className={styles.bodyDiv}>
                    <h2>Continente:{country?.continente}</h2>
                    <h2>Capital:{country?.capital}</h2>
                    <h2>Subregion:{country?.subregion}</h2>
                    <h2>Área:{country?.area}</h2>
                    <h2>Población:{country?.poblacion}</h2>
                </div>
                <img src={country?.image} alt='' className={styles.image} />
            </div>
        </div>
    )
}

export default Detail