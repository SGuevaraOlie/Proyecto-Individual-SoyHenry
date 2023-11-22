// Redux
import { useDispatch } from "react-redux";
// React
import { useEffect, useState } from "react";
// Actions
import { resetCountries, filterCountriesByActivity } from "../../redux/actions";
// Axios
import axios from "axios";

const ActivityFilter = () => {
    const dispatch = useDispatch();
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        const fetchActivities = async() => {
            const response = await axios.get("http://localhost:3001/activities");
            const activityNames = response.data.map((activity) => activity.name);
            setActivities(activityNames);
        };
        fetchActivities();
    }, []);
    const handleActivityChange = (event) => {
        const activity = event.target.value;
        dispatch(filterCountriesByActivity(activity))
    };
    return (
        <div>
            <select onChange={handleActivityChange}>
                <option value="all">Todas las actividades</option>
                {activities.map(activity => (
                    <option key={activity} value={activity}>{activity}</option>
                ))}
            </select>
        </div>
    )
}

export default ActivityFilter;