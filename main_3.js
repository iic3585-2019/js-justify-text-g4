const applyChanges = () => {
  let source = grabElement('output');
  source.innerHTML = grabElement('input_text').value;
  source.style.width = setWidth();
  source.style.textAlign = setAlign();
}

const grabElement = (string) =>{
  return document.getElementById(string);
}

const grabMany = (string) => {
  return document.getElementsByName(string);
}

const setWidth = () => {
  return grabElement('input_width').value.toString() +'px';
}

const setAlign = () => {
  const radios = grabMany('alignment');
  return Array.from(radios).filter(r => r.checked)[0].value;
}
