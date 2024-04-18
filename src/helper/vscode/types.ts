import {ExtensionContext} from 'vscode';

export interface CommandOptions {
  /**
   * @zh 自定义命令名称, 否则使用函数的名字
   * @en
   */
  name?: string;
  /**
   * @zh 是否注册为`TextEditor` 命令
   */
  textEditor?: boolean;

  /**
   * @zh 获取插件运行上下文方法
   */
  context?: ExtensionContext | (() => ExtensionContext);
}

export interface TextEditorCommandOptions
  extends Omit<CommandOptions, 'textEditor'> {}

export interface WithCommandOptions extends CommandOptions {}

export interface WithTextCommandOptions extends WithCommandOptions {}

export interface WithActiveOptions {
  extensionId: string;
}
