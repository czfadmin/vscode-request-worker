import {WithActiveOptions} from './types';
import {EXTENSION_COMMANDS, EXTENSION_CONTEXT, EXTENSION_ID} from './constants';
import {ExtensionContext} from 'vscode';

const globalContext = new Map();

globalContext.set(EXTENSION_ID, '');
globalContext.set(EXTENSION_CONTEXT, null);
globalContext.set(EXTENSION_COMMANDS, [] as string[]);

export function useExtensionId() {
  return globalContext.get(EXTENSION_ID);
}

export function useExtensionContext() {
  return globalContext.get(EXTENSION_CONTEXT);
}

export function useCommands(): [
  string[],
  (name: string) => void,
  (name: string) => void,
] {
  let cmds = globalContext.get(EXTENSION_COMMANDS);
  function addCommand(name: string) {
    cmds.push(name);
  }
  function deleteCommand(name: string) {
    cmds = cmds.filter(it => it !== name);
    globalContext.set(EXTENSION_COMMANDS, cmds);
  }
  return [cmds, addCommand, deleteCommand];
}

interface RegisterContextOption extends WithActiveOptions {
  context: ExtensionContext;
}

export function registerContext(options: RegisterContextOption) {
  globalContext.set(EXTENSION_CONTEXT, options.context);
  globalContext.set(EXTENSION_ID, options.extensionId);
}
