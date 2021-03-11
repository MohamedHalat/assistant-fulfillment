import app from './app';
import { dialogFlowFirebaseFulfillment } from './index'
const port = 8080;

app.listen(port, () => {
  console.log(`App Started on ${port}`);
});

app.post("/", (req: any, res: any) => {
  dialogFlowFirebaseFulfillment(req, res);
})

app.get("/", (req: any, res: any) => {
  res.status(200).send("Ok");
})