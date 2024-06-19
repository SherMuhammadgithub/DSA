const palindromes = (str) => str.split("").reverse().join("") === str;

console.log(palindromes("cddc"));