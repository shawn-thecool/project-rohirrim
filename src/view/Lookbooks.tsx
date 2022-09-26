import { useLookbookCreate, useLookbookDelete, useLookbooks, useLookbookUpdate, useLookbookUpdateLikes } from '@/api'

export default function PageLookbooks() {
  const { data: res = null } = useLookbooks()
  const createLookbook = useLookbookCreate()
  const updateLookbook = useLookbookUpdate()
  const updateLookbookLikes = useLookbookUpdateLikes()
  const deleteLookbook = useLookbookDelete()

  return (
    <div>
      <h2>list of lookbooks</h2>
      <section>
        <span>page length : {res?.page}</span>
        <button
          type="button"
          onClick={() =>
            createLookbook.mutateAsync({
              title: 'title',
              desc: 'desc',
            })
          }
        >
          (+) create lookbook
        </button>
      </section>
      <section>
        <ul>
          {res?.lookbooks.map((lookbook) => (
            <li key={lookbook.id}>
              <button
                type="button"
                onClick={() =>
                  updateLookbook.mutateAsync({
                    lookbookId: lookbook.id,
                    title: 'title.updated',
                    desc: 'desc.updated',
                  })
                }
              >
                update lookbook
              </button>
              <button type="button" onClick={() => deleteLookbook.mutateAsync({ lookbookId: lookbook.id })}>
                delete lookbook
              </button>
              <button type="button" onClick={() => updateLookbookLikes.mutateAsync({lookbookId:lookbook.id, userId:'user_id_3'})}>
                add like lookbook
              </button>
              <button type="button" onClick={() => alert('TODO:')}>
                add view lookbook
              </button>
              <button type="button" onClick={() => alert('TODO:')}>
                add img lookbook
              </button>
              <button type="button" onClick={() => alert('TODO:')}>
                add comment lookbook
              </button>
              <pre>{JSON.stringify(lookbook, null, 2)}</pre>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
