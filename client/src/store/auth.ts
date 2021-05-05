import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import { makeAutoObservable, flow } from "mobx";
import RootStore from "./rootStore";

export const ACCESS = "access";
export const TOKEN_REFRESH = "tokenRefresh";

export default class AuthStore {
  private readonly rootStore;
  readonly isAuth;
  isInitialized;
  token: string;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this);

    this.isAuth = false;
    this.token = "";
    this.isInitialized = false;

    this.isInitialized = true;
    this.isAuth = false;
  }
}
