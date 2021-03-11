import { Image } from './image';
import { Output } from './output';
import { OutputComponent} from './output-component';

export class BasicCard implements OutputComponent{
  title?: string
  subTitle?: string
  formattedText?: string
  displayOptions: DisplayOptions = DisplayOptions.WHITE
  image?: Image

  addtoOutput(output: Output) {
    output.basicCard = this;
  }

}

enum DisplayOptions {
  WHITE,

}
// Todo: finish this
