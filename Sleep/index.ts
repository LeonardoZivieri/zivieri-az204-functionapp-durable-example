import { AzureFunction, Context } from "@azure/functions";
import { setTimeout } from "timers/promises";

const activityFunction: AzureFunction = async function (
  context: Context
): Promise<string> {
  const sleepTime = context.bindings.time || Math.ceil(Math.random() * 4000);
  await setTimeout(sleepTime);
  return sleepTime;
};

export default activityFunction;
