
function setTriggers () {
  var i, note;
  var triggers = document.getElementsByClassName('trigger');
  console.log(triggers);
  for (i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener('click', toggleNote, false);
    note = triggers[i].nextSibling;
    if (note.classList.contains('note')) {
      note.addEventListener('click', toggleNote, false);
    }
  }  
}




function toggleNote () {
  var note;
  console.log("clicked; this = ", this, this.tagName);
  if (this.classList.contains === 'note') {
    note = this;
    console.log('In toggleNote; note = ', note);
  }
  else {
    note = this.nextSibling;
  }
  if (note.style.display === 'none') {
    note.style.display = 'inline-block';
    }
  else {
    note.style.display = 'none';
  }
}

setTriggers();