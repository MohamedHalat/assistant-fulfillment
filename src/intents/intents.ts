import { Database } from "../database/database";
import { DialogFlowRequest } from "../api/dialogflow-request";
import { Output } from "../outputs/output";
import { Session } from "../session";
import { User } from "../user";


export abstract class Intent {
  abstract description?: string
  output: Output = new Output();
  user: User
  parameters: object;
  request: DialogFlowRequest
  subIntents?: Intent[]
  activeAction?: string;

  constructor(session: Session, request: DialogFlowRequest, output: Output) {
    this.request = request;
    this.output = output;
    this.user = session.user;
    this.parameters = request.queryResult.parameters;
  }

  abstract call(): Promise<Output>
}