import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'

import { END_POINT_USERS } from '.'
import { IUser, IUserId, IUsers } from './index.interface'
import { reqCreateUser, reqDeleteUser, reqUpdateUser } from './index.request'

export const useUsers = () => useQuery<IUsers, Error>([`${END_POINT_USERS}/`])

export const useUserById = ({ userId }: IUserId) => useQuery<IUser, Error>([`${END_POINT_USERS}/${userId}/`])

export const useUserCreate = () => {
  const qc = useQueryClient()
  return useMutation(reqCreateUser, {
    onSuccess: () => qc.invalidateQueries(),
    onError: ({ response }) => console.log(response),
  })
}

export const useUserUpdate = () => {
  const qc = useQueryClient()
  return useMutation(reqUpdateUser, {
    onSuccess: () => qc.invalidateQueries(),
    onError: ({ response }) => console.log(response),
  })
}

export const useUserDelete = () => {
  const qc = useQueryClient()
  return useMutation(reqDeleteUser, {
    onSuccess: () => qc.invalidateQueries(),
    onError: ({ response }) => console.log(response),
  })
}
