import { Output } from "../outputs/output";
import { SuggestionChip } from "../outputs/suggestion-chips";
import { Session } from "../session";
import { Intent } from "./intents";

export class FallbackIntent extends Intent {
  public static actionNames: string[] = ["Default Fallback Intent"];
  activeAction?: string
  description?: string | undefined;

  constructor(session: Session, output: Output) {
    super(session, session.request, output);
  }

  async call(): Promise<Output> {
    switch (this.activeAction) {
      default:
        this.fallback();
    }
    return this.output
  }

  fallback() {
    this.output
      .addText(
        "There seems to have been an error assigning your request. " + this.activeAction
      )
      .addTextToSpeech(
        "There seems to have been an error assigning your request. "  + this.activeAction
      )
      .add(
        new SuggestionChip([
          "Try Something Else",
          "Cancel",
        ])
      );
  }
}
