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

withCommand({name: 'sendRequest3'})(function sendRequest3() {
  console.log('sendRequest3');
});
