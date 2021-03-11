import { Output } from "../outputs/output";
import { Session } from "../session";
import { Intent } from "./intents";

export class TestIntent extends Intent implements Intent {
  public static actionNames: string[] = ["test"];
  description?: string | undefined;
  activeAction?: string

  constructor(session: Session, output: Output) {
    super(session, session.request, output);
  }

  async call(): Promise<Output> {
    this.test();
    return this.output;
  }

  test(): Output {
    this.output.text = "Hello World";
    this.output.textToSpeech = "Hello World";
    return this.output
  }
}
