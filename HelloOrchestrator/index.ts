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

const orchestrator = df.orchestrator(function* (context) {
    const outputs = [];

    console.log("Before, ", outputs);
    
    // Replace "Hello" with the name of your Durable Activity Function.
    outputs.push(yield context.df.callActivity("Hello", "Tokyo"));
    console.log("Ran 1 output, ", outputs);
    outputs.push(yield context.df.callActivity("Hello", "Seattle"));
    console.log("Ran 2 output, ", outputs);
    outputs.push(yield context.df.callActivity("Hello", "London"));
    console.log("Ran 3 output, ", outputs);

    // returns ["Hello Tokyo!", "Hello Seattle!", "Hello London!"]
    return outputs;
});

export default orchestrator;
