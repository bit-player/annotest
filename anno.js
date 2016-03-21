
function setTriggers() {
  var i, note;
  var triggers = document.getElementsByClassName('trigger');
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
  if (this.classList.contains('note')) {
    note = this;
  }
  else {
    note = this.nextSibling;
  }
  if (note.style.display === 'none') {
    if (note.classList.contains('nieman')) {
      note.style.display = 'inline';
    }
    else {
      note.style.display = 'inline-block';
    }
  }
  else {
    note.style.display = 'none';
  }
}

setTriggers();
hideAllNotes();