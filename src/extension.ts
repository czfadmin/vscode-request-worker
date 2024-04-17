import 'reflect-metadata';
import Container from 'typedi';

import * as vscode from 'vscode';
import { bootstrap } from './bootstrap';

export function activate(context: vscode.ExtensionContext) {
  Container.set('extension', context);

  bootstrap();
}

// This method is called when your extension is deactivated
export function deactivate() {}
