const router = require('express').Router()
const users = require('../db/users')

router.get('/', (req, res) => {
  return res.json(users.read())
})

router.get('/:userId', (req, res) => {
  const { userId } = req.params
  return res.json(users.readById(userId))
})

router.post('/', (req, res) => {
  const { name, email } = req.body
  return res.json(users.create({ name, email }))
})

router.patch('/:userId', (req, res) => {
  const { userId } = req.params
  const { name, email } = req.body
  return res.json(users.update(userId, { name, email }))
})

router.delete('/:userId', (req, res) => {
  const { userId } = req.params
  return res.json(users.delete(userId))
})

module.exports = router
