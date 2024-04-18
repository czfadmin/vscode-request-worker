import {makeObservable, observable} from 'mobx';
import Container from 'typedi';
import {Configuration} from './Configuration';

class RootStore {
  configuration: Configuration;

  constructor() {
    this.configuration = new Configuration();

    makeObservable(this, {
      configuration: observable,
    });
  }
}

const store = new RootStore();

export default store;

Container.set('store', store);
