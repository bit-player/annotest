
function setTriggers() {
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

function hideAllNotes() {
  var i;
  var notes = document.getElementsByClassName('note');
  for (i = 0; i < notes.length; i++) {
    notes[i].style.display = 'none';
  }
}


function toggleNote() {
  var note;
  console.log("clicked; this = ", this);
  if (this.classList.contains('note')) {
    note = this;
    console.log('In toggleNote; note = ', note);
  }
  else {
    note = this.nextSibling;
    console.log('In else clause; note = ', note);
  }
  if (note.style.display === 'none') {
    note.style.display = 'inline-block';
    }
  else {
    note.style.display = 'none';
  }
}

setTriggers();
hideAllNotes();