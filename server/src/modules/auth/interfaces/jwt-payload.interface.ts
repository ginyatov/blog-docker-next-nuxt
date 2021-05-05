import { Role } from '../../../enums/roles.enum'

export interface JWTPayload {
  id: number
  roles: Role[]
  username: string
}
