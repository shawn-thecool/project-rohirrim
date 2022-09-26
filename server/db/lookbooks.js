/**
 * id : string
 * title : string
 * desc : string
 * imgs : img[]
 * likes : like[]
 * views : view[]
 * comments : comment[]
 * products : product[]
 */
class Lookbooks {
  lookbookIdx = 0
  lookbooks = []

  createSelfId() {
    return `lookbook_id_${++this.lookbookIdx}`
  }
  read() {
    return {
      lookbooks: this.lookbooks,
      page: this.lookbooks.length,
    }
  }
  readById(lookbookId) {
    return this.lookbooks.find(({ id }) => id === lookbookId)
  }
  create({ title, desc }) {
    const id = this.createSelfId()
    const options = {
      imgs: ['img_url_1', 'img_url_2'],
      likes: ['user_id_1', 'user_id_2'],
      views: ['user_id_1', 'user_id_2'],
      comments: ['user_id_1', 'user_id_2'],
      products: ['product_id_1', 'product_id_2'],
    }
    const created = { id, title, desc, ...options }
    this.lookbooks = [created, ...this.lookbooks]
    return created
  }
  update(lookbookId, { title, desc }) {
    let updated = null
    this.lookbooks = this.lookbooks.map((lookbook) => {
      updated = { ...lookbook, title, desc }
      return lookbook.id === lookbookId ? updated : lookbook
    })
    return updated
  }
  updateLikes(lookbookId, { userId }) {
    let updated = null
    this.lookbooks = this.lookbooks.map((lookbook) => {
      if (lookbook.id !== lookbookId) return lookbook
      if (lookbook.likes.find((like) => like === userId)) return lookbook
      updated = lookbook
      updated.likes = [userId, ...updated.likes]
      return updated
    })
    return updated
  }
  delete(lookbookId) {
    const deleted = this.lookbooks.filter((lookbook) => lookbook.id === lookbookId)
    this.lookbooks = this.lookbooks.filter((lookbook) => lookbook.id !== lookbookId)
    return deleted
  }
}

const lookbooks = new Lookbooks()

module.exports = lookbooks
