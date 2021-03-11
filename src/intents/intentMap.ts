import { Output } from "../outputs/output";
import { Session } from "../session";
import { Intent } from "./intents";
import { intentList, defaultIntent } from "./intentLibrary";

export class IntentMapper {
  action: string;
  intent: Intent;
  session: Session;
  output: Output;

  constructor(action: string, session: Session, output: Output) {
    this.action = action;
    this.session = session;
    this.output = output;
    this.intent = this.getIntent();
    this.intent.activeAction = action;
  }

  getIntent(action: string = this.action): Intent {
    const intent = intentList.find(item => {
      return item.actionNames?.find(name => name.indexOf(action) === 0);
    }) || defaultIntent;
    return new intent(this.session, this.output);
  }

}