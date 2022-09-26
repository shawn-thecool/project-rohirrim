const router = require('express').Router()
const lookbooks = require('../db/lookbooks')
const users = require('../db/users')

router.get('/', (req, res) => {
  return res.json(lookbooks.read())
})

router.get('/:lookbookId', (req, res) => {
  const { lookbookId } = req.params
  return res.json(lookbooks.readById(lookbookId))
})

router.post('/', (req, res) => {
  const { title, desc } = req.body
  return res.json(lookbooks.create({ title, desc }))
})

router.patch('/:lookbookId', (req, res) => {
  const { lookbookId } = req.params
  const { title, desc } = req.body
  return res.json(lookbooks.update(lookbookId, { title, desc }))
})
router.patch('/:lookbookId/likes/:userId', (req, res) => {
  const { lookbookId, userId } = req.params
  return res.json(lookbooks.updateLikes(lookbookId, { userId }))
})

router.delete('/:lookbookId', (req, res) => {
  const { lookbookId } = req.params
  return res.json(lookbooks.delete(lookbookId))
})

module.exports = router
