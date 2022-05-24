const { Router } = require('express')
const { check } = require('express-validator')
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events')
const { isDate } = require('../helpers/isDate')
const { validateFields } = require('../middlewares/validate-field')
const { validateJWT } = require('../middlewares/validate-jwt')

const router = Router()
router.use(validateJWT)

router.get('/', getEvents)

router.post(
  '/',
  [
    check('title', 'The title is mandatory').not().isEmpty(),
    check('start', 'The start date is mandatory').custom(isDate),
    check('end', 'The end date is mandatory').custom(isDate),
    validateFields,
  ],
  createEvent
)

router.put('/:id', updateEvent)

router.delete('/:id', deleteEvent)

module.exports = router
