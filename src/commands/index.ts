import {command, withCommand} from '../decorators';

class CommandUtils {
  @command()
  sendRequest() {}

  @command({
    name: 'sendRequest',
  })
  sendRequest2() {}
}

export default CommandUtils;
