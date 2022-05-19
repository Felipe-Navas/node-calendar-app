const { Router } = require('express')
const { check } = require('express-validator')
const {
  createUser,
  loginUser,
  revalidateToken,
} = require('../controllers/auth')
const router = Router()

router.post(
  '/new',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be at least 6 of length').isLength({
      min: 6,
    }),
  ],
  createUser
)

router.post(
  '/',
  [
    check('email', 'Email is required').isEmail(),
    check('password', 'Password must be at least 6 of length').isLength({
      min: 6,
    }),
  ],
  loginUser
)

router.get('/renew', revalidateToken)

module.exports = router
