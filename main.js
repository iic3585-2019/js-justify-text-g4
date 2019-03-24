

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

function main() {
  const text =
    "Lorem ipsum dolor sit amet consectetur adipiscing elit, vestibulum risus mus ridiculus ornare enim, class a ut varius litora condimentum. Pharetra ut etiam nam erat aptent, dictumst urna euismod cum et, hendrerit luctus habitasse ultrices.";
  const duck = 100;

  /* Formatting options */
  const formatLeft = padCurried(_.padEnd, duck);
  const formatRight = padCurried(_.padStart, duck);
  const formatCenter = padCurried(_.pad, duck);

  const formatUpperCase = _.upperCase;
  const formatUpperCenter = pipe(
    formatUpperCase,
    formatCenter
  );

  // Testing
  console.log("INPUT TEXT:");
  console.log(text);

  console.log("LEFT:");
  console.log(formatText(formatLeft)(text, duck));
  console.log("RIGHT:");
  console.log(formatText(formatRight)(text, duck));
  console.log("CENTER:");
  console.log(formatText(formatCenter)(text, duck));

  console.log("CAPITALIZE:");
  console.log(formatText(formatUpperCase)(text, duck));

  console.log("CAPITALIZE CENTER:");
  console.log(formatText(formatUpperCenter)(text, duck));
}

main();
