// Test1: Take one word input to take out first two letters that is "q" "u";
// Code: 
// Text: "queen";
// pigLatin(text);
// Expected Results: 1;

let text = "queen";

function pigLatin(text) {
  const exception = ["q", "u"];
  if ((text[0] + text[1]) === (exception[0] + exception[1])) {
    return text.substring(2);
  }
  return -1
}

// Test2: Take letters "q" "u", put it in the back of inputted string + "ay"; 
// Code: 
// Text: "queen";
// pigLatin(text);
// Expected Results: "eenquay";

let text = "queen";

function pigLatin(text) {
  const exception = ["q", "u"];
  if ((text[0] + text[1]) === (exception[0] + exception[1])) {
    return text.substring(2) + text[0] + text[1] + "ay";
  }
  return -1
}

// Test3: Take multiple words, check if "q" "u" is first two letters, only manipulate those words; 
// Code: 
// Text: "queen tree";
// pigLatin(text);
// Expected Results: "eenquay tree";

let text = "queen tree";

function pigLatin(text) {
  let textArray = text.split(" ");

  const exception = ["q", "u"];
  let newTextArray = [];

  for (let i = 0; i < textArray.length; i++) {
    if ((textArray[i][0] + textArray[i][1]) === (exception[0] + exception[1])) {
      let newText = textArray[i].substring(2) + exception[0] + exception[1] + "ay";
      newTextArray.push(newText);
    } else {
      newTextArray.push(textArray[i]);
    }
  }
  return newTextArray.join(" ");
}