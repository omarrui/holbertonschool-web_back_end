export default function cleanSet(set, startString) {
  // Edge case: if startString is empty or invalid, return empty string
  if (!startString || typeof startString !== 'string') {
    return '';
  }
  
  // Convert set to array, filter, transform, join
  return Array.from(set)
    .filter((value) => value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}