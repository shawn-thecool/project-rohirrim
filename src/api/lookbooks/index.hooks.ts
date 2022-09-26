import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { END_POINT_LOOKBOOKS, ILookbook, ILookbookId, ILookbooks } from '.'
import { reqCreateLookbook, reqDeleteLookbook, reqUpdateLookbook, reqUpdateLookbookLikes } from './index.request'

export const useLookbooks = () => useQuery<ILookbooks, Error>([`${END_POINT_LOOKBOOKS}/`])

export const useLookbookById = ({ lookbookId }: ILookbookId) =>
  useQuery<ILookbook, Error>([`${END_POINT_LOOKBOOKS}/${lookbookId}/`])

export const useLookbookCreate = () => {
  const qc = useQueryClient()
  return useMutation(reqCreateLookbook, {
    onSuccess: () => qc.invalidateQueries(),
    onError: ({ response }) => console.log(response),
  })
}

export const useLookbookUpdate = () => {
  const qc = useQueryClient()
  return useMutation(reqUpdateLookbook, {
    onSuccess: () => qc.invalidateQueries(),
    onError: ({ response }) => console.log(response),
  })
}

export const useLookbookUpdateLikes = () => {
  const qc = useQueryClient()
  return useMutation(reqUpdateLookbookLikes, {
    onSuccess: () => qc.invalidateQueries(),
    onError: ({ response }) => console.log(response),
  })
}

export const useLookbookDelete = () => {
  const qc = useQueryClient()
  return useMutation(reqDeleteLookbook, {
    onSuccess: () => qc.invalidateQueries(),
    onError: ({ response }) => console.log(response),
  })
}
