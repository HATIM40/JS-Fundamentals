const args = process.argv.slice(2);

const word1 = args[0] || "undefined";
const word2 = args[1] || "undefined";

console.log(`${word1} is ${word2}`);
