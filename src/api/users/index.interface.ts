export interface IUsers {
    users:IUser[]
    page:number
}

export interface IUserId {
  userId: string
}

export interface IUserCreate {
  name: string
  email: string
}

export interface IUserUpdate extends IUserId {
  name?: string
  email?: string
}

export interface IUser extends IUserCreate {
  id: string
}

