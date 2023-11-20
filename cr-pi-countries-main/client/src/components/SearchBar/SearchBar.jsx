// React
import { useState } from 'react'
// Redux
import { useDispatch } from 'react-redux'
// Actions
import { searchCountries } from '../../redux/actions'
// Styles
import styles from './SearchBar.module.css'

const SearchBar = () => {
    const [name, setName] = useState('');
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const {value} = e.target;
        setName(value)
    };
    const onSearch = (name) => {
        dispatch(searchCountries(name));
    };
    return (
        <div>
            <input type='search' onChange={handleChange} className={styles.searchBar} placeholder='Escribe el nombre de un país 🔍'/>
            <button onClick={() => onSearch(name)}>Buscar</button>
        </div>
    )
}

export default SearchBar;