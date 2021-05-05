import AuthStore from "./auth";
import UserStore from "./user";

export default class RootStore {
  auth: AuthStore;
  user: UserStore;
  constructor() {
    this.auth = new AuthStore(this);
    this.user = new UserStore(this);
  }
}
