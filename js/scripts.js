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

// Test4: If inputted words has first letter as a vowel; 
// Code: 
// Text: "queen tree u";
// pigLatin(text);
// Expected Results: "eenquay tree u"

let text = "queen tree u";

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

// Test5: If inputted word is vowel, add + way to end of inputted word; 
// Code: 
// Text: "queen tree umbrella";
// pigLatin(text);
// Expected Results: "eenquay tree umbrellaway";

// Test6: If first letter of word is not q or vowels return that string
// Code: 
// Text: "queen tree umbrella";
// pigLatin(text);
// Expected Results: "eenquay tree umbrellaway";

let text = "queen tree umbrella";

function pigLatin(text) {
  let textArray = text.split(" ");
  const vowels = ["a", "e", "i", "o", "u"];
  const exception = ["q", "u"];
  let newTextArray = [];

  for (let i = 0; i < textArray.length; i++) {
    if ((textArray[i][0] + textArray[i][1]) === (exception[0] + exception[1])) {
      let newText = textArray[i].substring(2) + exception[0] + exception[1] + "ay";
      newTextArray.push(newText);
    } else if (vowels.includes(textArray[i][0])) {
      newTextArray.push(textArray[i] + "way");
    } else {
      newTextArray.push(textArray[i]);
    }
  }
  return newTextArray.join(" ");
}

// Test7: Inputted word that doesn't have q or vowels, take first letter and add it to the back + "ay" ;
// Code: 
// Text: "queen tree umbrella";
// pigLatin(text);
// Expected Results: "eenquay eetray umbrellaway";

let text = "queen tree umbrella";

function pigLatin(text) {
  let textArray = text.split(" ");
  const vowels = ["a", "e", "i", "o", "u"];
  const exception = ["q", "u"];
  let newTextArray = [];

  for (let i = 0; i < textArray.length; i++) {
    if ((textArray[i][0] + textArray[i][1]) === (exception[0] + exception[1])) {
      let newText = textArray[i].substring(2) + exception[0] + exception[1] + "ay";
      newTextArray.push(newText);
    } else if (vowels.includes(textArray[i][0])) {
      newTextArray.push(textArray[i] + "way");
    } else {
      let subStringText = textArray[i].substring(1);
      let newText = subStringText + textArray[i][0] + "ay"
      newTextArray.push(newText);
    }
  }
  return newTextArray.join(" ");
}
// Test8: Take first letters for consonant words not including q or vowels, add to back + "ay"; 
// Code: 
// Text: "queen tree umbrella";
// pigLatin(text);
// Expected Results: "eenquay eetray umbrellaway";

let text = "queen tree umbrella";

function pigLatin(text) {
  let textArray = text.split(" ");
  const vowels = ["a", "e", "i", "o", "u"];
  const exception = ["q", "u"];
  let newTextArray = [];
  let counter = 0;

  for (let i = 0; i < textArray.length; i++) {
    if ((textArray[i][0] + textArray[i][1]) === (exception[0] + exception[1])) {
      let newText = textArray[i].substring(2) + exception[0] + exception[1] + "ay";
      newTextArray.push(newText);
      console.log(1);
    } else if (vowels.includes(textArray[i][0])) {
      newTextArray.push(textArray[i] + "way");
    } else {
      console.log("here");
      for (let index = 0; index < textArray[i].length; index++) {
        if (!vowels.includes(textArray[i][index])) {
          counter += 1;
          console.log(counter);
        } else {
          newTextArray.push(textArray[i].substring(counter) + textArray[i].substring(0, counter) + "ay");
          break;
        }
      }
    }
  }
  return newTextArray.join(" ");
}
, . / /, ,
string[string.length - 1] 

"Hello"["Hello".length - 1];
'o'