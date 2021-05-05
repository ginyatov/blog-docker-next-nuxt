import { makeAutoObservable, flow } from "mobx";
import RootStore from "./rootStore";
import { UserEntity } from "@api/fetchers";

export default class UserStore {
  private readonly rootStore;
  private user: UserEntity;
  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;

    makeAutoObservable(this, {
      init: flow,
    });

    this.user = null;
  }

  init(user: UserEntity) {
    this.user = user;
  }
}
