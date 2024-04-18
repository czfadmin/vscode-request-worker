import 'reflect-metadata';

import {ExtensionContext} from 'vscode';
import {EXTENSION_NAME} from './constants';
import { withActivate } from './helper/vscode';

export const activate = withActivate({
  extensionId: EXTENSION_NAME,
})(async function (context: ExtensionContext) {
  console.log("插件激活")
  // @ts-ignore
  await import("./commands")
});

// This method is called when your extension is deactivated
export function deactivate() {}
