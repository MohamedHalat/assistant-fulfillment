import { BasicCard } from "./basic-card";
import { LinkOutSuggestion } from "./link-out-suggestion";
import { SuggestionChip } from "./suggestion-chips";
import { TableCard } from "./tableCard";

export class Output {
  text: string = "";
  textToSpeech: string = "";
  enableUserResponse: boolean = true;
  suggestionChip?: SuggestionChip;
  linkOutSuggestion?: LinkOutSuggestion;
  tableCard?: TableCard;
  basicCard?: BasicCard;
  // public outputContext?: OutputContext;
  // public userStorage?: UserStorage

  json: any = {
    fulfillmentText: "",
    fulfillmentMessages: [],
    payload: {
      google: {
        expectUserResponse: true,
        richResponse: {
          items: [
            {
              simpleResponse: {
                textToSpeech: "",
                displayText: "",
              },
            },
          ],
        },
      },
    },
  };

  add(addition: BasicCard | TableCard | SuggestionChip | LinkOutSuggestion): Output {
    addition.addtoOutput(this);
    return this;
  }

  addSuggestions(suggestion: string[]) {
    if (suggestion.length > 0) new SuggestionChip(suggestion).addtoOutput(this);
    return this;
  }
  setSuggestions(suggestion: string[]) {
    if (suggestion.length > 0) new SuggestionChip(suggestion).addtoOutput(this);
    return this;
  }

  setOutputContext(outputContexts: any[]) {
    return this;
  }

  toJSON(): any {
    if (this.text) this.addText();
    if (this.textToSpeech) this.addTextToSpeech();
    if (this.suggestionChip) this.suggestionChip.addtoOutput(this);
    return this.json;
  }

  toString(): string {
    return JSON.stringify(this.toJSON());
  }

  addText(text: string = this.text) {
    this.text = text;
    this.json.fulfillmentMessages = [{ text: { text: [text] } }];
    this.json.payload.google.richResponse.items[0].simpleResponse.displayText = text;
    return this;
  }

  addTextToSpeech(textToSpeech: string = this.textToSpeech) {
    this.textToSpeech = textToSpeech;
    this.json.fulfillmentText = textToSpeech;
    this.json.payload.google.richResponse.items[0].simpleResponse.textToSpeech = textToSpeech;
    return this;
  }

  crash(error: any) {
    this.addText('Method not implemented. crash')
    .addTextToSpeech('Method not implemented. crash');
  }

  signIn() {
    this.addText('Method not implemented. signIn')
    .addTextToSpeech('Method not implemented. signIn');
  }
}

interface Google {
  expectUserResponse: boolean;
  richResponse: RichResponse;
}

interface Items {
  simpleResponse: SimpleResponse;
}

interface Payload {
  google: Google;
}

interface RichResponse {
  items: Items[];
}

export interface OutputJson {
  fulfillmentText: string;
  fulfillmentMessages: any[];
  payload: Payload;
}

interface SimpleResponse {
  textToSpeech: string;
  displayText: string;
}
