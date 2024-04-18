import {action, computed, flow, makeObservable, observable} from 'mobx';
import {ThemeIcon} from 'vscode';

export enum RequestStatus {
  Running,
  Success,
  Fail,
  Empty,
}

export enum HttpMethodEnum {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
  PUT = 'PUT',
  ALL = 'ALL',
}

export const HttpMethodIcons = {};

export class RequestItem {
  path: string = '';

  method: HttpMethodEnum = HttpMethodEnum.GET;

  status: RequestStatus = RequestStatus.Empty;

  extra: any;

  constructor(
    path: string,
    method: HttpMethodEnum,
    extra: any,
    status: RequestStatus = RequestStatus.Empty,
  ) {
    this.path = path;
    this.status = status;
    this.method = method;
    this.extra = extra;
    makeObservable(this, {
      path: observable,
      status: observable,
      method: observable,
      extra: observable,
      icon: computed,
      statusIcon: computed,
      changeStatus: action,
      setPath: action,
      setMethod: action,
      fetch: flow,
    });
  }

  setPath(path: string) {
    this.path = path;
  }

  setMethod(method: HttpMethodEnum = HttpMethodEnum.GET) {
    this.method = method;
  }

  changeStatus(status: RequestStatus) {
    this.status = status;
  }

  get icon() {
    return HttpMethodIcons[this.method];
  }

  get statusIcon() {
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

  *fetch() {}
}
