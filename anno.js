
function setTriggers () {
  var i;
  var triggers = document.getElementsByClassName('trigger');
  var notes = document.getElementsByTagName('aside');
  console.log(triggers);
  for (i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener('click', toggleNote, false);
  }
  for (i = 0; i < notes.length; i++) {
    notes[i].addEventListener('click', toggleNote, false);
  }
  
}

function nextAside (node) {
  var here = node;
  console.log('in nextAside; here = ', here);
  while (here && here.tagName != 'ASIDE') {
    console.log('in while loop; here = ', here);
    here = here.nextSibling();
  }
  console.log('done with while loop; here = ', here);
  return here;
}



function toggleNote () {
  var note;
  console.log("clicked; this = ", this, this.tagName);
  if (this.tagName === 'aside') {
    note = this;
    console.log('In toggleNote; note = ', note);
  }
  else {
    note = nextAside(this);
  }
  if (note.style.display === 'none') {
    if (note.classList.contains('block')) {
      note.style.display = 'block';
    }
    else {
      note.style.display = 'inline';
    }
  }
  else {
    note.style.display = 'none';
  }
}

setTriggers();