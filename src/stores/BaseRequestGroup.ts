import { makeObservable, observable, computed, action } from 'mobx';
import { ThemeIcon } from 'vscode';
import { RequestItem } from './RequestItem';

export default class BaseRequestGroup {
  label: string = '';

  requestItems: RequestItem[];

  constructor(label: string) {
    this.label = label;
    this.requestItems = [];

    makeObservable(this, {
      label: observable,
      requestItems: observable,
      icon: computed,
      addRequestItem: action,
      addRequestItems: action,
    });
  }

  get icon() {
    return new ThemeIcon('folder');
  }

  addRequestItem(requestItem: RequestItem) {
    this.requestItems.push(requestItem);
  }

  addRequestItems(requestItems: RequestItem[]) {
    this.requestItems.push(...requestItems);
  }
}
