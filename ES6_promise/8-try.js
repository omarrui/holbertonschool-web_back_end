// Export this function as the default export of this module
export default function divideFunction(numerator, denominator) {
    // Check if the denominator (bottom number in division) is equal to 0
    if (denominator === 0) {
      // If denominator is 0, throw (create and send) a new Error object with the message 'cannot divide by 0'
      throw new Error('cannot divide by 0');
    }
    // If denominator is not 0, perform the division: divide numerator by denominator and return the result
    return numerator / denominator;
  }