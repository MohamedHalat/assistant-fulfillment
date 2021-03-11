import { Output } from "../outputs/output";
import { SuggestionChip } from "../outputs/suggestion-chips";
import { Session } from "../session";
import { Intent } from "./intents";

export class WelcomeIntent extends Intent {
  public static actionNames: string[] = ["Default Welcome Intent", 'ask_for_sign_in_confirmation'];
  activeAction?: string
  description?: string | undefined;

  constructor(session: Session, output: Output) {
    super(session, session.request, output);
  }

  async call(): Promise<Output> {
    if (this.activeAction === "ask_for_sign_in_confirmation") {
      console.log(`New User ${this.user}`);
    }

    this.welcome();
    return this.output;
  }

  welcome() {
    this.output
      .addText(
        "Welcome. I'm you're Google Assistant! How can I help you?"
      )
      .addTextToSpeech(
        "Welcome. I'm you're Google Assistant! How can I help you?"
      )
      .add(
        new SuggestionChip([
          "Hello",
          "Cancel",
        ])
      );
  }
}
