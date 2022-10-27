// Test1: Take one word input to take out first two letters that is "q" "u";
// Code: 
// Text: "queen";
// pigLatin(text);
// Expected Results: 1;

const text = "queen";

function pigLatin(text) {
  const exception = ["q", "u"];
  if ((text[0] + text[1]) === (exception[0] + exception[1])) {
    return 1
  }
  return -1
}
