let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

let newDescription = munstersDescription[0].toUpperCase() +
  munstersDescription.toLowerCase().slice(1);

console.log(newDescription);