import { Output } from "./output";
import { OutputComponent } from "./output-component";

export class TableCard implements OutputComponent {
  addtoOutput(output: Output) {
    output.tableCard = this;
  }
}

// Todo: finish this
