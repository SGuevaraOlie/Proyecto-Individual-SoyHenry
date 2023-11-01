const { Activity } = require ('../../db');

const getActivities = async (req,res) => {
    try {
        const allActivities = await Activity.findAll();
        if (allActivities.length === 0) return res.status(404).json('No se encontraron actividades');
        return res.status(200).json(allActivities)
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}

module.exports = getActivities;