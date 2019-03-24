const text =
  "Lorem ipsum dolor sit amet consectetur adipiscing elit, vestibulum risus mus ridiculus ornare enim, class a ut varius litora condimentum. Pharetra ut etiam nam erat aptent, dictumst urna euismod cum et, hendrerit luctus habitasse ultrices. Ligula ullamcorper eleifend porttitor ante fames metus lectus, et vel eu penatibus commodo tempor, elementum consequat sed etiam id purus. Vestibulum turpis quisque montes malesuada class ac ultrices aptent, donec tristique feugiat vehicula orci dapibus molestie dictum nec, porttitor aliquet quis mauris nostra justo sociosqu. Imperdiet conubia torquent non tristique arcu turpis, urna nisl facilisi praesent quam augue rhoncus, tincidunt at condimentum mi aliquet. Rhoncus interdum porttitor rutrum himenaeos tortor aenean habitant ultrices nascetur sociosqu class, risus a habitasse commodo primis lacus eleifend ullamcorper aptent.";
const width = 100;

const splitLines = (text, maxWidth) => {
  let texts = [];
  while (text.length > width) {
    let i = text.lastIndexOf(" ", width - 1);
    let sub = text.substring(0, i - 1);
    text = text.substring(i + 1);
    texts.push(sub);
  }
  return texts;
};

/*
  padFunction can be loadash pad, padStart and padEnd
*/
const formatText = formatFunction => (text, width) => {
  return splitLines(text, width)
    .map(line => formatFunction(line))
    .join("\n");
};

/* Currying pad functions*/
const padCurried = (padFunction, w) => line => padFunction(line, w);

/* Function composition to create more complex format functions*/
const capitalizeCenter = line => {
  return padCurried(_.pad, width)(_.upperCase(line));
};

// Partial applications with already applied format function
const formatLeft = formatText(padCurried(_.padEnd, width));
const formatRight = formatText(padCurried(_.padStart, width));
const formatCenter = formatText(padCurried(_.pad, width));

const formatCapitalize = formatText(_.upperCase);

// Now using a more complex function composed with capitalize and pad
const formatCapitalizeCenter = formatText(capitalizeCenter);

function main() {
  // Test our functions
  console.log("LEFT:");
  console.log(formatLeft(text, width));
  console.log("RIGHT:");
  console.log(formatRight(text, width));
  console.log("CENTER:");
  console.log(formatCenter(text, width));

  console.log("CAPITALIZE:");
  console.log(formatCapitalize(text, width));

  console.log("CAPITALIZE CENTER:");
  console.log(formatCapitalizeCenter(text, width));
}

main();
