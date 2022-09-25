const router = require('express').Router()

/* 
id          string
title       string
desc        string
imgs        img[]
likes       like[]
views       view[]
comments    comment[]
products    product[]
*/

let lookbooks = []
let lookbookId = 0

router.get('/', (req, res) => {
  return res.json({
    lookbooks,
    page: lookbooks.length,
  })
})

router.get('/:lookbookId', (req, res) => {
  const { lookbookId } = req.params
  return res.json(lookbooks.find(({ id }) => id === lookbookId))
})

router.post('/', (req, res) => {
  const id = `lookbook_id_${++lookbookId}`
  const { title, desc } = req.body
  const options = {
    imgs: ['img_url_1', 'img_url_2'],
    likes: ['user_id_1', 'user_id_2'],
    views: ['user_id_1', 'user_id_2'],
    comments: ['user_id_1', 'user_id_2'],
    products: ['product_id_1', 'product_id_2'],
  }
  let createdLookbook = { id, title, desc, ...options }
  lookbooks = [createdLookbook, ...lookbooks]
  return res.json(createdLookbook)
})

router.patch('/:lookbookId', (req, res) => {
  const { lookbookId } = req.params
  const { title, desc } = req.body
  let updatedLookbook = null
  lookbooks = lookbooks.map((lookbook) => {
    updatedLookbook = { ...lookbook, title, desc }
    return lookbook.id === lookbookId ? updatedLookbook : lookbook
  })

  return res.json(updatedLookbook)
})

router.delete('/:lookbookId', (req, res) => {
  const { lookbookId } = req.params

  const deletedLookbook = lookbooks.filter((lookbook) => lookbook.id === lookbookId)
  lookbooks = lookbooks.filter((lookbook) => lookbook.id !== lookbookId)

  return res.json(deletedLookbook)
})

module.exports = router
