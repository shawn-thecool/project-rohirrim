import { AxiosPromise } from 'axios'

import { makeRequest } from '@/core'

import { END_POINT_LOOKBOOKS, ILookbook, ILookbookCreate, ILookbookId, ILookbookUpdate, ILookbookUpdateLikes } from '.'

export const reqCreateLookbook = (data: ILookbookCreate): AxiosPromise<ILookbook> =>
  makeRequest({ method: 'post', url: `${END_POINT_LOOKBOOKS}/`, data })

export const reqUpdateLookbook = ({ lookbookId, ...rest }: ILookbookUpdate): AxiosPromise<ILookbook> =>
  makeRequest({ method: 'patch', url: `${END_POINT_LOOKBOOKS}/${lookbookId}/`, data: rest })

export const reqUpdateLookbookLikes = ({ lookbookId, userId }: ILookbookUpdateLikes): AxiosPromise<ILookbook> =>
  makeRequest({ method: 'patch', url: `${END_POINT_LOOKBOOKS}/${lookbookId}/likes/${userId}` })

export const reqDeleteLookbook = ({ lookbookId }: ILookbookId): AxiosPromise<ILookbook[]> =>
  makeRequest({ method: 'delete', url: `${END_POINT_LOOKBOOKS}/${lookbookId}/` })
