export default function createInt8TypedArray(length, position, value) {
  //checkin if position is valid
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }
  
  // create ArrayBuffer with the specified length
  const buffer = new ArrayBuffer(length);
  
  //create DataView to work with the buffer
  const view = new DataView(buffer);
  
  //set the Int8 value at the specified position
  view.setInt8(position, value);
  
  //return the DataView
  return view;
}