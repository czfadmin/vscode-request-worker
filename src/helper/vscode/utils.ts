import {
  TextEditor,
  TextEditorEdit,
  commands,
  Disposable,
} from 'vscode';
import {useCommands, useExtensionContext, useExtensionId} from './context';
import {CommandOptions} from './types';

export function internnalRegisterCommand(
  params: {
    cmdName: string;
    handler:
      | ((...args: any[]) => void)
      | ((editor: TextEditor, edit: TextEditorEdit, ...args: any[]) => void);
  },
  options?: CommandOptions,
) {
  const [cmds, addCommand] = useCommands();
  const context = useExtensionContext();
  const extensionId = useExtensionId();

  let cmdName: string = params.cmdName;
  if (!context) {
    console.error('[${norimalizeCmdName}]: 注册命令失败: ');
    return;
  }

  if (options) {
    cmdName = options.name || params.cmdName;
  }

  const norimalizeCmdName = `${extensionId}.${cmdName}`;

  if (cmds.includes(norimalizeCmdName)) {
    console.error(`[${norimalizeCmdName}]: 此命令已经注册, 注册失败`);
    return;
  }

  let disposer: Disposable;
  if (options && options.textEditor) {
    disposer = commands.registerTextEditorCommand(
      norimalizeCmdName,
      params.handler,
    );
  } else {
    disposer = commands.registerCommand(norimalizeCmdName, params.handler);
  }

  if (!disposer) {
    return;
  }
  context.subscriptions.push(disposer);
  addCommand(norimalizeCmdName);
  console.log(`[${norimalizeCmdName}]: 注册成功`);
}
