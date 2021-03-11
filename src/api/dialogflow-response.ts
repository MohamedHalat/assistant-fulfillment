export class DialogFlowResponse {
  status: number;
  message: string | JSON;
  response: any;

  constructor(response: any) {
    this.status = 200;
    this.message = "OK";
    this.response = response;
  }

  send(): void {
    if (typeof this.message === "object") {
      this.response.status(this.status).json(this.message);
    } else {
      this.response.status(this.status).send(this.message);
    }
  }
}