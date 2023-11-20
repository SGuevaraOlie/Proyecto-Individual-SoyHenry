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
    countries: []
  });
  const countryNames = useSelector((state) => state.countries.map((country) => country.name));
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handleSelectChange = (event) => {
    setValues({
      ...values,
      countries: Array.from(
        event.target.selectedOptions,
        (option) => option.value
      )
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!values.nombre || /[^a-zA-Z ]/.test(values.nombre)){
      alert('El nombre de la actividad es obligatorio y no puede contener números.');
      return;
    }
    try {
      const response = await axios.post(
        'https://localhost:3001/activities',
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
        <label>
          Nombre: <input type="text" name="Nombre" value={values.name} onChange={handleChange} required />
        </label>
        <label>
          Dificultad: <input type="number" min="1" max="5" name="Dificultad" value={values.dificultad} onChange={handleChange} required />
        </label>
        <label>
          Duracion (hs): <input type="number" min="0" name="Duracion" value={values.duracion} onChange={handleChange} />
        </label>
        <label>
          Temporada: <select name="Temporada" value={values.temporada} onChange={handleChange} required>
            <option value="">Selecciona una temporada</option>
            <option value="Verano">Verano</option>
            <option value="Otoño">Otoño</option>
            <option value="Invierno">Invierno</option>
            <option value="Primavera">Primavera</option>
          </select>
        </label>
        Continente:
        <Filter />
        <label>
          Países:
          <select name="countries" multiple value={values.countries} onChange={handleSelectChange}>
            {countryNames.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </select>
        </label>
        <button type="submit" className={styles.button}>Crear actividad turística</button>
      </form>
    </div>
  )
}

export default Form;