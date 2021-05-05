import Cookies from 'js-cookie'
import jwtDecode from 'jwt-decode'
import { makeAutoObservable, flow } from 'mobx'
import RootStore from './rootStore'

export const ACCESS = 'access'
export const TOKEN_REFRESH = 'tokenRefresh'

export default class GlobalStore {
  private readonly rootStore
  readonly template
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore
    this.template = 'main'
  }
}
