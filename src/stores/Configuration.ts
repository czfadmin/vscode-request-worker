import {makeObservable, observable} from 'mobx';

export class Configuration {
  /**
   * 请求地址
   */
  address: string;
  
  constructor() {
    this.address = '';
    makeObservable(this, {
      address: observable,
    });
  }  
}
