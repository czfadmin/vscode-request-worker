import { makeObservable } from 'mobx';
import Container from 'typedi';



class RootStore {
  constructor() {
    makeObservable(this, {});
  }
}

const rootStore = new RootStore();
Container.set('rootStore', rootStore);
