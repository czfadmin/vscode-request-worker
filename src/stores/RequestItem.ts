import { action, computed, makeObservable, observable } from 'mobx';
import { ThemeIcon } from 'vscode';

export enum RequestStatus {
  Running,
  Success,
  Fail,
  Empty,
}

export class RequestItem {
  path: string = '';

  status: RequestStatus = RequestStatus.Empty;

  constructor(path: string, status: RequestStatus = RequestStatus.Empty) {
    this.path = path;
    this.status = status;
    makeObservable(this, {
      path: observable,
      status: observable,
      icon: computed,
      changeState: action,
      setPath: action,
    });
  }

  setPath(path: string) {
    this.path = path;
  }

  changeState(status: RequestStatus) {
    this.status = status;
  }

  get icon() {
    switch (this.status) {
      case RequestStatus.Running:
        return new ThemeIcon('sync~spin');
      case RequestStatus.Success:
        return new ThemeIcon('issue-closed');
      case RequestStatus.Fail:
        return new ThemeIcon('error');
      case RequestStatus.Empty:
        return new ThemeIcon('globe');
    }
  }
}
