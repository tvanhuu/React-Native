export interface User {
   accessToken?: string
   avatar?: string
   displayName?: string
   email?: string
   expiredTime?: number
   id?: string
   language?: string
   refreshToken?: string
   role?: ROLE
   timezone?: string
}

export enum ROLE {
   ADMIN,
   USERS,
}
