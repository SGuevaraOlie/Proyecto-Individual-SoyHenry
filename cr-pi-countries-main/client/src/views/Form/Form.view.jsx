// React
import { useState } from "react";
// Axios 
import axios from "axios";
// Redux
import { useSelector } from "react-redux";
// Components
import Filter from "../../components/Filters/Filter";
// Styles
import styles from './Form.module.css';

const Form = () => {
  const [values, setValues] = useState({
    name: "",
    dificultad: 1,
    duracion: 1,
    temporada: "",
    countries: [],
  });
  const countryNames = useSelector((state) => state.countries.map((country) => country.name));
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSelectChange = (event) => {
    const selectedCountries = Array.from(
      event.target.selectedOptions,
      (option) => option.value
    );
    setValues({
      ...values,
      countries: selectedCountries,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!values.name || /[^a-zA-Z ]/.test(values.name)){
      alert('El nombre de la actividad es obligatorio y no puede contener números.');
      return;
    }
    try {
      const response = await axios.post(
        'http://localhost:3001/activities',
        values
      )
      const successfulMessage = `Se ha creado la nueva actividad turística: ${values.name}`;
      alert(successfulMessage);
      setValues({
        name: "",
        dificultad: "",
        duracion: "",
        temporada: "",
        countries: []
      });
    } catch (error) {
      if (error.response && error.response.data) alert('Ya existe una actividad con ese nombre.');
      else console.error(error);
    }
  };
  return (
    <div className={styles.formDiv}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Nombre: <input className={styles.input} type="text" name="name" value={values.name} onChange={handleChange} required />
        </label>
        <label className={styles.label}>
          Dificultad: <input className={styles.input} type="number" min="1" max="5" name="dificultad" value={values.dificultad} onChange={handleChange} required />
        </label>
        <label className={styles.label}>
          Duracion (hs): <input className={styles.input} type="number" min="0" name="duracion" value={values.duracion} onChange={handleChange} />
        </label>
          Temporada: 
        <select className={styles.select} name="temporada" value={values.temporada} onChange={handleChange} required>
            <option value="">Selecciona una temporada</option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
        Continente:
        <Filter />
        <label className={styles.label}>
          Países: (aprieta CTRL para seleccionar varios)
          <select className={styles.input} name="countries" multiple value={values.countries} onChange={handleSelectChange}>
            {countryNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className={styles.btn}>Crear actividad turística</button>
      </form>
    </div>
  )
}

export default Form;