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

/* Currying pad functions to fix the width in the scope */
const padCurried = (padFunction, w) => line => padFunction(line, w);

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);


const grabMany = (string) => {
  return document.getElementsByName(string);
}

const grabElement = (string) =>{
  return document.getElementById(string);
}

const applyChanges = () => {

  const text = grabElement('input_text').value;
  const width = grabElement('input_width').value;

  const formatLeft = padCurried(_.padEnd, width);
  const formatRight = padCurried(_.padStart, width);
  const formatCenter = padCurried(_.pad, width);

  const formatUpperCase = _.upperCase;
  const formatUpperCenter = pipe(
    formatUpperCase,
    formatCenter
  );

  const selector = (string, upper) => {
    if(string == "center") {
      if(upper == true) {
        return formatText(formatUpperCenter);
      }
      return formatText(formatCenter);
    }
    if(string == "right") {
      return formatText(formatRight);
    }
    if(string == "left") {
      return formatText(formatLeft);
    }
  }

  let source = grabElement('output');


  const radios = grabMany('alignment');
  const upper = grabElement('upper').checked;

  const alignment = Array.from(radios).filter(r => r.checked)[0].value;
  console.log(selector(alignment, upper)(text, width));
  source.innerHTML = selector(alignment, upper)(text, width);
}
