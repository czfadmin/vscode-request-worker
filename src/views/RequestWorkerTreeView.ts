import { TreeDragAndDropController, TreeView, window } from 'vscode';
import {
  RequestWorkerTreeItem,
  RequestWorkerTreeProvider,
} from '../provider/RequestWorkerTreeProvider';
import { EXTENSION_VIEW_ID } from '../constants';

const dndMimeType = `application/vnd.code.tree.${EXTENSION_VIEW_ID}`;
export class RequestWorkerTreeView {
  private _treeView: TreeView<RequestWorkerTreeItem>;
  private _provider: RequestWorkerTreeProvider;
  private _draggingSource: RequestWorkerTreeItem[] = [];
  private _dndController:
    | TreeDragAndDropController<RequestWorkerTreeItem>
    | undefined;
  constructor() {
    this._provider = new RequestWorkerTreeProvider();
    this._dndController = this._buildDndController();

    this._treeView = window.createTreeView(EXTENSION_VIEW_ID, {
      treeDataProvider: this._provider,
      showCollapseAll: true,
      canSelectMany: false,
      dragAndDropController: this._dndController,
    });
  }
  private _buildDndController() {
    const self = this;

    return {
      dragMimeTypes: [dndMimeType],
      dropMimeTypes: [dndMimeType],
      handleDrag(source, dataTransfer, token) {
        self._draggingSource = [...source];
      },
      handleDrop(target, dataTransfer, token) {
        // TODO
        return;
      },
    };
  }
}
