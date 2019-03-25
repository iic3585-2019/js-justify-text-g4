/* Auxiliar functions to get the elements we need */
const grabElement = (string) =>{
  return document.getElementById(string);
}

const grabMany = (string) => {
  return document.getElementsByName(string);
}

/* Auxiliar functions that returns the values we will apply to the text */
const setWidth = () => {
  return grabElement('input_width').value.toString() +'px';
}

const setAlign = () => {
  const radios = grabMany('alignment');
  return Array.from(radios).filter(r => r.checked)[0].value;
}

const setTextTransform = () => {
  const radios = grabMany('format');
  return Array.from(radios).filter(r => r.checked)[0].value;
}

const setDirection = () => {
  if (grabElement('reverse').checked) return "rtl";
  else return "ltr";
}

/* Main function that apply the changes to the text */
const applyChanges = () => {
  let source = grabElement('output');
  source.innerHTML = grabElement('input_text').value;
  source.style.width = setWidth();
  source.style.textAlign = setAlign();
  source.style.textTransform = setTextTransform();
  source.style.unicodeBidi = "bidi-override";
  source.style.direction = setDirection();
}
