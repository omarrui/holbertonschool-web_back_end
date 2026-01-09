// Export this function as the default export of this module
export default function guardrail(mathFunction) {
    // Create a new empty array called 'queue' to store results
    const queue = [];
    
    // Try to execute the code block below; if an error occurs, jump to catch block
    try {
      // Execute the mathFunction (call it) and store the returned value in 'result'
      const result = mathFunction();
      // Add the result to the end of the queue array
      queue.push(result);
    } 
    // If an error is thrown in the try block, catch it and execute this block
    catch (err) {
      // Convert the error object to a string and add it to the end of the queue array
      queue.push(`${err}`);
    } 
    // This block always executes, regardless of whether an error occurred or not
    finally {
      // Add the string 'Guardrail was processed' to the end of the queue array
      queue.push('Guardrail was processed');
    }
    
    // Return the queue array containing all the collected values
    return queue;
  }