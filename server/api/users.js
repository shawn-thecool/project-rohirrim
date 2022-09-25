const router = require('express').Router()

/* 
id      string
name    string
email   string
*/

let users = []
let userId = 0

router.get('/', (req, res) => {
  return res.json({
    users,
    page: users.length,
  })
})

router.get('/:userId', (req, res) => {
  const { userId } = req.params
  return res.json(users.find(({ id }) => id === userId))
})

router.post('/', (req, res) => {
  const id = `user_id_${++userId}`
  const { name, email } = req.body
  let createdUser = { id, name, email }
  users = [createdUser, ...users]
  return res.json(createdUser)
})

router.patch('/:userId', (req, res) => {
  const { userId } = req.params
  let updatedUser = null
  users = users.map((user) => {
    const { name, email } = req.body
    updatedUser = { ...user, name, email }
    return user.id === userId ? updatedUser : user
  })

  return res.json(updatedUser)
})

router.delete('/:userId', (req, res) => {
  const { userId } = req.params

  const deletedUser = users.filter((user) => user.id === userId)
  users = users.filter((user) => user.id !== userId)

  return res.json(deletedUser)
})

module.exports = router
