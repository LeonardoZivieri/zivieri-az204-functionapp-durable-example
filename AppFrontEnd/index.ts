import * as df from "durable-functions";
import {
  AzureFunction,
  Context,
  HttpRequest,
  HttpResponseSimple,
} from "@azure/functions";
import { readFile } from "fs/promises";
import { join } from "path";

let html = readFile(join(__dirname, "..", "..", "index.html")).then((b) =>
  b.toString()
);
const httpStart: AzureFunction = async function (
  context: Context,
  req: HttpRequest
): Promise<any> {
  return <HttpResponseSimple>{
    body: await html,
    headers: {
        "Content-Type": "text/html"
    }
  };
};

export default httpStart;
