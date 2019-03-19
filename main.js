function applyChanges(name, alignment, width, dest){
  renderText(dest, name);
  setWidth(changeAlignment(grabElement(dest), alignment), width);
}

function grabElement(string){
  return document.getElementById(string);
}

function grabMany(string){
  return document.getElementsByName(string);
}

function setWidth(e, number) {
  n = grabElement(number).value;
  e.style.width = n.toString()+'px';
  return e;
}

function changeAlignment(e, string) {
  let radios = grabMany(string);
  let s = '';
  for (let i = 0, length = radios.length; i < length; i++)
    {
    if (radios[i].checked){
      s = radios[i].value
      

      // only one radio can be logically checked, don't check the rest
      break;
    }
    }
  if (s == 'left') {
    return toTheLeft(e);
  }
  if (s == 'right') {
    return toTheRight(e);
  }
  if (s == 'center') {
    return toTheCenter(e);
  }

  if (s == 'justify') {
    return justify(e);
  }

}

function toTheLeft(e){
  e.style.textAlign = "left";
  return e;
}

function toTheRight(e){
  e.style.textAlign = "right";
  return e;
}

function toTheCenter(e){
  e.style.textAlign = "center";
  return e;
}

function justify(e) {
  e.style.textAlign = "justify";
  return e
}


function renderText(dest, source){
  grabElement(dest).innerHTML = grabElement(source).value;
}