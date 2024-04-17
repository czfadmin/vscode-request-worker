import { action, computed, makeObservable } from 'mobx';

import BaseRequestGroup from './BaseRequestGroup';

export class RequestGroup extends BaseRequestGroup {

  constructor(label: string) {
    super(label);
    
    makeObservable(this, {
      updateLabel: action,
    });
  }
  updateLabel(label: string) {
    this.label = label;
  }
}
