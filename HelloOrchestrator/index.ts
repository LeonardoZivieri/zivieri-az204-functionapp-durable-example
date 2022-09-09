/*
 * This function is not intended to be invoked directly. Instead it will be
 * triggered by an HTTP starter function.
 * 
 * Before running this sample, please:
 * - create a Durable activity function (default name is "Hello")
 * - create a Durable HTTP starter function
 * - run 'npm install durable-functions' from the wwwroot folder of your 
 *    function app in Kudu
 */

import * as df from "durable-functions"
import { faker } from "@faker-js/faker"

const orchestrator = df.orchestrator(function* (context) {
    const outputs = [];

    console.log("Before, ", outputs);
    
    // Replace "Hello" with the name of your Durable Activity Function.
    yield context.df.callActivity("Sleep")
    outputs.push(yield context.df.callActivity("Hello", faker.address.city()));
    outputs.push(yield context.df.callActivity("Hello", faker.address.city()));

    // returns ["Hello Tokyo!", "Hello Seattle!", "Hello London!"]
    return outputs;
});

export default orchestrator;
