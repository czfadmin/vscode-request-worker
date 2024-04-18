import {ExtensionContext} from 'vscode';
import {registerContext, useExtensionContext} from './context';
import {
  WithCommandOptions,
  WithTextCommandOptions,
  WithActiveOptions,
} from './types';
import {internnalRegisterCommand} from './utils';

export function withCommand(options: WithCommandOptions) {
  return function (handler: (...args: any[]) => void) {
    if (!handler.name || (options && !options.name)) {
      console.error('command name is null');
      return;
    }
    const cmdName = handler.name;

    internnalRegisterCommand({cmdName, handler}, options);
  };
}

export function withTextCommand(options: WithTextCommandOptions) {
  return function (handler: (...args: any[]) => void) {
    if (!handler.name || (options && !options.name)) {
      console.error('command name is null');
      return;
    }
    const cmdName = handler.name;

    internnalRegisterCommand(
      {cmdName, handler},
      {
        ...options,
        textEditor: true,
      },
    );
  };
}

type ExtensionActivateHandler = (context: ExtensionContext) => void;

export function withExtensionContext(
  handler?: (context: ExtensionContext, ...args: any[]) => any,
) {
  return function (...args: any[]) {
    const context = useExtensionContext();
    handler?.(context, ...args);
  };
}

/**
 * 必须要在激活的时候
 * @param options
 * @returns
 */
export function withActivate(
  options: WithActiveOptions,
): (handler: ExtensionActivateHandler) => ExtensionActivateHandler {
  return function (handler: ExtensionActivateHandler) {
    return function (ctx: ExtensionContext) {
      registerContext({
        ...options,
        context: ctx,
      });
      handler?.(ctx);
    };
  };
}
