export interface DialogFlowRequest {
  responseId: string;
  queryResult: QueryResult;
  originalDetectIntentRequest: OriginalDetectIntentRequest;
  session: string;
  // alternativeQueryResults: AlternativeQueryResults[];
}


interface AlternativeQueryResults {
  queryText: string;
  outputContexts: Capabilities[];
  languageCode: string;
}

interface Arguments {
  name: string;
  rawText: string;
  textValue: string;
}

interface Capabilities {
  name: string;
}

interface Conversation {
  conversationId: string;
  type: string;
  conversationToken: string;
}

interface FulfillmentMessages {
  text: FulfillmentMessages;
}

interface Inputs {
  intent: string;
  rawInputs: RawInputs[];
  arguments: Arguments[];
}

interface Intent {
  name: string;
  displayName: string;
  endInteraction: boolean;
}

interface OriginalDetectIntentRequest {
  source: string;
  version: string;
  payload: Payload;
}

// export interface Parameters {

// }

interface Payload {
  user: UserPayload;
  conversation: Conversation;
  inputs: Inputs[];
  surface: Surface;
  isInSandbox: boolean;
  requestType: string;
}

interface QueryResult {
  queryText: string;
  parameters: object;// Parameters; make the data an interface
  allRequiredParamsPresent: boolean;
  fulfillmentText: string;
  fulfillmentMessages: FulfillmentMessages[];
  outputContexts: any[];
  intent: Intent;
  intentDetectionConfidence: number;
  languageCode: string;
}

interface RawInputs {
  inputType: string;
  query: string;
}

interface Surface {
  capabilities: Capabilities[];
}

export interface UserPayload {
  accessToken: string;
  locale: string;
  lastSeen: string;
  userStorage: string;
  userVerificationStatus: string;
}

