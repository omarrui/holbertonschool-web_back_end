export default function updateUniqueItems(map) {
    // Check if argument is a Map
    if (!(map instanceof Map)) {
      throw new Error('Cannot process');
    }
    
    // Loop through each entry
    for (const [key, value] of map) {
      // If quantity is 1, update to 100
      if (value === 1) {
        map.set(key, 100);
      }
    }
  }