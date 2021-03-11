import { DialogFlowRequest, UserPayload } from "./api/dialogflow-request";
import cryptoJS from "crypto-js";

export class User {
  id: number;
  firstName: string = "";
  lastName: string = "";
  email: string = "";
  createdDateTime: string = "";
  country: string = "";
  accessToken: string;
  storage: object = {};

  constructor(request: DialogFlowRequest) {
    const user: UserPayload = request.originalDetectIntentRequest.payload.user;
    this.accessToken = user.accessToken;
    this.id = parseInt(decrypt(this.accessToken));
    this.storage = JSON.parse(user.userStorage);
  }
}

function decrypt(encryptedCipherText: string) {
 return 'decrypted text'
}
