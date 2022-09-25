import { AxiosPromise } from 'axios'

import { makeRequest } from '@/core'

import { END_POINT_USERS } from '.'
import { IUser, IUserCreate, IUserId, IUserUpdate } from './index.interface'

export const reqCreateUser = (data: IUserCreate): AxiosPromise<IUser> =>
  makeRequest({ method: 'post', url: `${END_POINT_USERS}/`, data })

export const reqUpdateUser = ({ userId, ...rest }: IUserUpdate): AxiosPromise<IUser> =>
  makeRequest({ method: 'patch', url: `${END_POINT_USERS}/${userId}/`, data: rest })

export const reqDeleteUser = ({ userId }: IUserId): AxiosPromise<IUser[]> =>
  makeRequest({ method: 'delete', url: `${END_POINT_USERS}/${userId}/` })
