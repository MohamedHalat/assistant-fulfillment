import { Output } from "./output";
import { OutputComponent } from "./output-component";


export class LinkOutSuggestion implements OutputComponent {
  addtoOutput(output: Output) {
    output.linkOutSuggestion = this;
  }
}
