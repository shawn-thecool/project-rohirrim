/**
 * id : string
 * name : string
 * email : string
 */
class Users {
  userIdx = 0
  users = []

  createSelfId() {
    return `user_id_${++this.userIdx}`
  }
  read() {
    return {
      users: this.users,
      page: this.users.length,
    }
  }
  readById(userId) {
    return this.users.find(({ id }) => id === userId)
  }
  create({ name, email }) {
    const id = this.createSelfId()
    const created = { id, name, email }
    this.users = [created, ...this.users]
    return created
  }
  update(userId, { name, email }) {
    let updated = null
    this.users = this.users.map((user) => {
      updated = { ...user, name, email }
      return user.id === userId ? updated : user
    })
    return updated
  }
  delete(userId) {
    const deleted = this.users.filter((user) => user.id === userId)
    this.users = this.users.filter((user) => user.id !== userId)
    return deleted
  }
}

const users = new Users()

module.exports = users
