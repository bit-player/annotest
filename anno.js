


var ALL_SHOW = false;

window.addEventListener("load", init, false);


function setTriggers() {
  var i, note;
  var triggers = document.getElementsByClassName('trigger');
  for (i = 0; i < triggers.length; i++) {
    triggers[i].addEventListener('click', toggleNote, false);
    if (triggers[i].classList.contains('hover-preview')) {
      triggers[i].addEventListener('mouseenter', toggleNote, false);
      triggers[i].addEventListener('mouseleave', toggleNote, false);
    }
    note = triggers[i].nextSibling;
    if (note.classList.contains('note')) {
      note.addEventListener('click', toggleNote, false);
    }
  }  
}

function toggleAllNotes() {
  if (ALL_SHOW) {
    hideAllNotes();
  }
  else {
    showAllNotes();
  }
}



function hideAllNotes() {
  var i, btn;
  var notes = document.getElementsByClassName('note');
  for (i = 0; i < notes.length; i++) {
    notes[i].style.display = 'none';
  }
  ALL_SHOW = false;
  btn = document.getElementById('global-toggle');
  btn.innerHTML = 'Show All';
}

function showAllNotes() {
  var i, notes;
  hideAllNotes();
  notes = document.getElementsByClassName('note');
  for (i = 0; i < notes.length; i++) {
    toggleNote(notes[i]);
  }
  ALL_SHOW = true;
  btn = document.getElementById('global-toggle');
  btn.innerHTML = 'Hide All';
}


function toggleNote(arg) {
  var note;
  if (arg.nodeType && arg.classList.contains('note')) {
    note = arg;
  }
  else {
    if (this.classList.contains('note')) {
      note = this;
    }
      else {
        note = this.nextSibling;
      }
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

function init() {
  setTriggers();
  hideAllNotes();  
}
