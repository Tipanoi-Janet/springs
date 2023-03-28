// Matching items
//count how many times the following appear in the string variable
//const story = "The quick brown fox jumps over the lazy dog"
const story = "The quick brown fox jumps over the lazy dog";
const l = story.match(/brown/g).length;
console.log(l);

const p = story.match(/the/g).length;
console.log(p);

const r = story.match(/jumps/g).length;
console.log(r);

//find the following strings
const string1 = "We are  now going to school";
const m = string1.search("now");
console.log(m);

const string2 = "The child was sitting on the table before it fells";
const j = string2.search("sitting");
console.log(j);
