import { DialogFlowResponse } from "./api/dialogflow-response";
import { DialogFlowRequest } from "./api/dialogflow-request";
import { Session } from "./session";
import { User } from "./user";

const API_PASSWORD = "";
const API_USERNAME = "";
const REQUIRE_API_CREDENTIALS = false;

export function dialogFlowFirebaseFulfillment(req: any, res: any) {
  if (REQUIRE_API_CREDENTIALS && !isValidApiRequest(req.headers.authorization)) {
    res.status(401).send("Invalid API credentials");
    return;
  }

  const request: DialogFlowRequest = req.body;
  const response = new DialogFlowResponse(res);
  const user = new User(request);
  const session = new Session(user, request, response);

  session.start()
    .then((result: DialogFlowResponse) => {
      result.send();
    });

  return;
}

function isValidApiRequest(authorizationHeader: string): boolean {
  const buff = Buffer.from(authorizationHeader.substring(6), "base64");
  const [username, password] = buff.toString("ascii").split(":");

  return username === API_USERNAME && password === API_PASSWORD;
}
