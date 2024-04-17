import registerCommands from './commands';
import { RequestWorkerTreeView } from './views/RequestWorkerTreeView';

export function bootstrap() {
  new RequestWorkerTreeView();
  registerCommands();
}
