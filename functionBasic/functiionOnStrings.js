const s1 = "Hello \nWorld";
const s2 = 'Hi\tHow are you?';
const s3 = `\nBye`;


console.log(`s1`,s2,s3);
console.log("------------");
const str = "\"Hello World\" \t \"How are you?\" \t\`12345\`";
console.log(str)
console.log("------------");

console.log(s1 + s2);
console.log("Fawwaz" + "Sadath")

const name1 = "fawwaz";
console.log(name1.concat("$$","Sadath"));
console.log("------------");

console.log(name1.length);
console.log(name1.toUpperCase());
console.log(name1.toLowerCase());
console.log(name1.charAt(0).toUpperCase() + name1.slice(1));
console.log(name1.slice(0,1).toUpperCase() + name1.slice(1));
console.log("------------");

const x1 = "abc";
const x2 = "def";
const x3 = "ghi";

// console.log(`${x1} ${x2} ${x3}`);
let result = "";
result = result + x1 + x2 + x3;
console.log(result);
console.log("------------");