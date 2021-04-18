import { DialogFlowRequest } from "./api/dialogflow-request";
import { Output } from "./outputs/output";
import { Intent } from "./intents/intents";
import { User } from "./user";
import { DialogFlowResponse } from "./api/dialogflow-response";
import { IntentMapper } from "./intents/intentMap";

export class Session {
  id: number = -1
  dialogflowId: string;
  request: DialogFlowRequest;
  response: DialogFlowResponse;
  user: User;
  output: Output = new Output();
  action: string;
  intent: Intent;

  constructor(user: User, request: DialogFlowRequest, response: DialogFlowResponse) {
    this.request = request;
    this.action = request.queryResult.intent.displayName
    this.response = response;
    this.dialogflowId = request.session
    this.user = user;
    this.intent = (new IntentMapper(this.action, this, this.output)).intent
  }

  async start(): Promise<DialogFlowResponse> {
    if (this.user.isValidUser()) {
      this.response.message = "Invalid user";
      this.response.status = 401;
      return this.response;
    }

    try {
      this.output = await this.intent.call();
    } catch (error) {
      this.output.crash(error);
      this.response.status = 500;
    }

    this.response.message = this.output.toJSON();
    return this.response
  }
}