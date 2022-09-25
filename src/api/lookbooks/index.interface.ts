export interface ILookbooks {
  lookbooks: ILookbook[]
  page: number
}

export interface ILookbookId {
  lookbookId: string
}

export interface ILookbookCreate {
  title: string
  desc: string
  imgs?: any[]
  likes?: any[]
  views?: any[]
  comments?: any[]
  products?: any[]
}

export interface ILookbookUpdate extends ILookbookId {
  title?: string
  desc?: string
  imgs?: any[]
  likes?: any[]
  views?: any[]
  comments?: any[]
  products?: any[]
}

export interface ILookbook extends ILookbookCreate {
  id: string
}
