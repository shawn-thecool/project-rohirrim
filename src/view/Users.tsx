import { useUserCreate, useUserDelete, useUsers, useUserUpdate } from '@/api'

export default function PageUsers() {
  const { data: res = null } = useUsers()
  const createUser = useUserCreate()
  const updateUser = useUserUpdate()
  const deleteUser = useUserDelete()

  return (
    <div>
      <h2>list of users</h2>
      <section>
        <span>page length : {res?.page}</span>
        <button type="button" onClick={() => createUser.mutateAsync({ name: 'shawn', email: '123@email.com' })}>
          (+) create user
        </button>
      </section>
      <section>
        <ul>
          {res?.users.map((user) => (
            <li key={user.id}>
              <button
                type="button"
                onClick={() =>
                  updateUser.mutateAsync({ userId: user.id, name: 'shawn.updated', email: '123.updated@email.com' })
                }
              >
                update user
              </button>
              <button type="button" onClick={() => deleteUser.mutateAsync({ userId: user.id })}>
                delete user
              </button>
              <pre>{JSON.stringify(user, null, 2)}</pre>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
