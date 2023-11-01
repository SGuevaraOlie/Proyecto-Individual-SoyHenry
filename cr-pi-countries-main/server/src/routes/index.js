const { Router } = require("express");
// Activities
const getActivities = require('../controllers/activities/getActivities')
const postActivities = require('../controllers/activities/postActivities')
// Countries
const getCountries = require('../controllers/countries/getCountries')
const getCountriesById = require('../controllers/countries/getCountriesById')
const getCountriesByName = require('../controllers/countries/getCountriesByName')

const router = Router();

router.get('/countries', getCountries)
router.get('/countries/:idPais', getCountriesById)
router.get('/countries/name?="..."', getCountriesByName)

router.get('/activities', getActivities)
router.post('/activities', postActivities)

module.exports = router;
