const displayEvent = function(){
    const displayButton = document.getElementById('save');
    displayButton.addEventListener('click', displayNote);
}
const checkStorage = function(){
    if (typeof(Storage) !== "undefined") {
        return(true);
    } else {
        alert("Web storage is not available")  
    }
}

const saveNote = function(){
    var notes = {title: document.getElementById('title').value,
                 body: document.getElementById('body').value};
    myNote = JSON.stringify(notes);
    localStorage.setItem("JSONnote", myNote);
}

const displayNote = function(){
    saveNote();
    savedNote = localStorage.getItem("JSONnote");
    display = JSON.parse(savedNote);
    document.getElementById('note').innerHTML = "Note title: " + display.title + "<br />" + "Note Body" + "<br />" +display.body;
    clear();
}

const clear = function(){
    document.getElementById('title').value = '';
    document.getElementById('body').value = '';
}
displayEvent();