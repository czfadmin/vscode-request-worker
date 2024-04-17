import {
  CancellationToken,
  Event,
  ProviderResult,
  TreeDataProvider,
  TreeItem,
} from 'vscode';

export class RequestWorkerTreeItem extends TreeItem {}

export class RequestWorkerTreeProvider
  implements TreeDataProvider<RequestWorkerTreeItem>
{
  onDidChangeTreeData?:
    | Event<
        | void
        | RequestWorkerTreeItem
        | RequestWorkerTreeItem[]
        | null
        | undefined
      >
    | undefined;
  getTreeItem(element: RequestWorkerTreeItem): TreeItem | Thenable<TreeItem> {
    return element;
  }
  getChildren(
    element?: RequestWorkerTreeItem | undefined,
  ): ProviderResult<RequestWorkerTreeItem[]> {
    return [];
  }

  resolveTreeItem?(
    item: TreeItem,
    element: RequestWorkerTreeItem,
    token: CancellationToken,
  ): ProviderResult<TreeItem> {
    return item;
  }
}
