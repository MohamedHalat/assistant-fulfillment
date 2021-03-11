import { Output } from "../outputs/output";
import { Session } from "../session";
import { Intent } from "./intents";

export class SignInIntent extends Intent {
  public static actionNames: string[] = ["SignIn"];
  activeAction?: string;
  description?: string;

  constructor(session: Session, output: Output) {
    super(session, session.request, output);
  }

  async call(): Promise<Output> {
    this.output.signIn();
    return this.output;
  }

}