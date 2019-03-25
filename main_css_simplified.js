/* Auxiliar functions to get the elements we need */
const grabElement = (string) =>{
  return document.getElementById(string);
}

const grabMany = (string) => {
  return document.getElementsByName(string);
}

/* Function that apply the changes to the text */
const applyChanges = () => {
  let source = grabElement('output');
  source.innerHTML = grabElement('input_text').value;
  source.style.width = setWidth();
  source.style.textAlign = setAlign();
  source.style.textTransform = setTextTransform();
}

/* Functions that returns the values we will apply to the text */
const setWidth = () => {
  return grabElement('input_width').value.toString() +'px';
}

const setAlign = () => {
  const radios = grabMany('alignment');
  return Array.from(radios).filter(r => r.checked)[0].value;
}

const setTextTransform = () => {
  if (grabElement('upper').checked) return "uppercase";
  else return "none";
}
