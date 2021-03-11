import { Output } from "./output";
import { OutputComponent } from "./output-component";

export class SuggestionChip implements OutputComponent {
  chips: string[] | string;

  constructor(chips: string[] | string) {
    this.chips = chips;
  }

  addtoOutput(output: Output) {
    output.suggestionChip = this;
    output.json.payload.google.richResponse.suggestions = [];

    if (Array.isArray(this.chips)) {
      this.chips.forEach((value) => {
        if (value)
          output.json.payload.google.richResponse.suggestions.push({
            title: value,
          });
      });
    } else {
      output.json.payload.google.richResponse.suggestions.push({
        title: this.chips,
      });
    }
  }
}
