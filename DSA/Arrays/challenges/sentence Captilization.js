const capitilizedSentence = (str) => {
  const sentence = str.toLowerCase();
  return sentence
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
};

console.log(capitilizedSentence(("sher muhammad, the legend")));