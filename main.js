const text =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu condimentum augue. Etiam neque neque, congue eget vehicula eget, molestie nec ligula. Integer a eros dapibus risus congue gravida. Morbi dapibus, dolor a volutpat blandit, sem tellus fringilla ante, ac imperdiet odio urna suscipit ipsum. Donec congue elementum feugiat.";
const width = 100;

const splitLines = (text, maxWidth) => {
  // TODO:
  // split text into words
  // traverse words and add to a new string (forEach)
  // - return array of strings with max
  // lenght of maxWidth
};

/*
  padFunction can be loadash pad, padStart and padEnd
*/
const formatText = padFunction => (text, width) => {
  // TODO:
  // - split text into lines
  // - apply padFunction to each line (map)
  // - join lines to form text again
  // - return formated text
  return splitLines(text, width)
    .map(line => padFunction(line, width))
    .join("\n");
};

// Partial applications with already applied pad option
const formatLeft = formatText(_.padStart);
const formatRight = formatText(_.padEnd);
const formatCenter = formatText(_.pad);

function main() {
  // Test our functions
  console.log(formatLeft(text, width));
  console.log(formatRight(text, width));
  console.log(formatCenter(text, width));
}
