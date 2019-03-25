/* Auxiliar functions to get the elements */
const grabMany = (string) => {
  return document.getElementsByName(string);
}

const grabElement = (string) =>{
  return document.getElementById(string);
}

/* Auxiliar functions to format the text */
const splitLines = (text, maxWidth) => {
  let texts = [];
  while (text.length > maxWidth) {
    let i = text.lastIndexOf(" ", maxWidth - 1);
    let sub = text.substring(0, i);
    text = text.substring(i + 1);
    texts.push(sub);
  }
  texts.push(text);
  return texts;
};

const formatText = formatFunction => (text, width) => {
  return splitLines(text, width)
    .map(line => formatFunction(line))
    .join("\n");
};

const formatReverse = string => string.split('').reverse().join('');

/* Currying pad functions to fix the width in the scope */
const padCurried = (padFunction, w) => line => padFunction(line, w);

/* Pipe the changes */
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

/* Function that gets the values and format the text */
const selector = (string, format, reverse, width) => {
  let array = [];

  const formatUpperCase = _.upperCase;
  const formatLowerCase = _.lowerCase;
  const formatCapitalCase = _.capitalize;

  const formatLeft = padCurried(_.padEnd, width);
  const formatRight = padCurried(_.padStart, width);
  const formatCenter = padCurried(_.pad, width);

  if (reverse) {
    array.push(formatReverse)
  }
  if (format == "upper") {
    array.push(formatUpperCase);
  }
  if (format == "lower") {
    array.push(formatLowerCase);
  }
  if (format == "capitalize") {
    array.push(formatCapitalCase);
  }
  if(string == "center") {
    array.push(formatCenter);
  }
  if(string == "right") {
    array.push(formatRight);
  }
  if(string == "left") {
    array.push(formatLeft);
  }
  return formatText(pipe(...array));
}

/* Main function, called from the website */
const applyChanges = () => {

  /* Input and output elements */
  const text = grabElement('input_text').value;
  let source = grabElement('output');

  /* Values selected */
  const width = grabElement('input_width').value;
  const aling_radios = grabMany('alignment');
  const alignment = Array.from(aling_radios).filter(r => r.checked)[0].value;
  const format_radios = grabMany('format');
  const format = Array.from(format_radios).filter(r => r.checked)[0].value;
  const reversed = grabElement('reverse').checked;

  /* Apply changes to the output */
  source.innerHTML = selector(alignment, format, reversed, width)(text, width);
}
