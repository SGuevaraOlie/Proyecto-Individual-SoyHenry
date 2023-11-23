// Router
import { Link } from "react-router-dom";
// React
import { useState, useEffect } from 'react';
// Styles
import styles from './Landing.module.css'
// Helpers
import PATHROUTES from '../../helpers/PathRoutes.helper'
// Img
import img from '../../images/countries.png'

const Landing = () => {
    const textoBienvenida = ["Bienvenido", "Welcome", "ようこそ", "Benveuto", "환영", "Bem-vindo", "受欢迎", "Willkommen", "Bienvenu", "مَرْحَباً", "добро пожаловать"]
    const [ textoIndex, setTextoIndex ] = useState(0);
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTextoIndex((prevIndex) => (prevIndex + 1) % textoBienvenida.length);
        }, 2000);
        return () => clearInterval(intervalId);
    }, [textoBienvenida])
    return (
        <div className={styles.body}>
            <div className={styles.textDiv}>
            <h1 className={styles.changinTitle}>{textoBienvenida[textoIndex]}</h1>
            <h2>Este es mi PI, en el que podrás buscar paises con sus datos.</h2>
            <h2>Ademas podrás crear, almacenar y clasificar actividades por pais</h2>
            <Link to={PATHROUTES.HOME}>
                <button className={styles.btn}>►Ingresa a la aplicación◄</button>
            </Link>
            </div>
            <img src={img} alt='' className={styles.img}></img>
        </div>
    )
}

export default Landing;