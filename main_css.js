function applyChanges(name, alignment, width, dest){
  renderText(dest, name);
  const source = grabElement(dest);
  const e = setWidth(changeAlignment(source, alignment), width);
  source.style.width = e.style.width;
  source.style.textAlign = e.style.textAlign;
}

function grabElement(string){
  return document.getElementById(string);
}

function grabMany(string){
  return document.getElementsByName(string);
}

function setWidth(e, number) {
  const element = e.cloneNode(false);
  const n = grabElement(number).value;
  element.style.width = n.toString()+'px';
  return element;
}

function changeAlignment(e, string) {
  const element = e.cloneNode(false);
  const radios = grabMany(string);
  const s = Array.from(radios).filter(r => r.checked)[0].value;

  if (s == 'left' || s == 'right' || s == 'center' || s == 'justify') {
    element.style.textAlign = s;
  }

  return element;

}

function renderText(dest, source){
  grabElement(dest).innerHTML = grabElement(source).value;
}