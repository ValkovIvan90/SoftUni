function makeADictionary(input) {
  let obj = {};

  for (const key of input) {
    let text = JSON.parse(key);
    let array = Object.entries(text);
    if (obj.hasOwnProperty(array[0][0])) {
      obj[array[0][0]] = array[0][1];
    } else {
      obj[array[0][0]] = array[0][1];
    }

  }
  let result = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));
  for (let[term,definition] of result) {
    console.log(`Term: ${term} => Definition: ${definition}`);
    
  }

}
makeADictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
  '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
  '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
  '{"Coffee":"A hot drinsadasdgTTTk made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]);