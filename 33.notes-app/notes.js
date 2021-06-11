const addBtn = document.getElementById("addnote");
const noteContainer = document.getElementById("note-container")

// Click event listener for addNote button
addBtn.addEventListener('click', () => { addNewNote() });

// Initialize the page based on localStorage
let savedData = JSON.parse(localStorage.getItem("notes"));
if(savedData && savedData.length !== 0){
    savedData.forEach((noteContent) => { addNewNote(noteContent, false) });
} else {
    addNewNote(`# Markups!\n\n- Markups can be applied\n- so you can format your notes\n- easily\n\nhttps://marked.js.org/`,false)
}


function addNewNote(text = "", editMode = true){
    // Creating the note element
    let note = document.createElement("div");
    note.classList.add('note');
    note.innerHTML = `
    <div class="note-bar">
        <button class="edit"><i class="fas fa-edit"></i></button>
        <button class="delete"><i class="fas fa-trash-alt"></i></button>
    </div>

    <div class="showcase hidden"></div>
    <textarea></textarea>
    `;

    // Extract inner components of the added note
    const deleteBtn = note.querySelector(".delete");
    const editBtn = note.querySelector(".edit");
    const showcase = note.querySelector(".showcase");
    const textArea = note.querySelector("textarea");

    // Write initial text to both textarea and showcase (with marked)
    showcase.innerHTML = marked(text);  // marked = enable marked.js format
    textArea.value = text;

    // Edit functionality -- toggle edit mode & initial settings
    let toggleEdit = function(){
        showcase.classList.toggle('hidden');
        textArea.classList.toggle('hidden');
    };

    editBtn.addEventListener('click', () => { toggleEdit() });
    note.addEventListener('dblclick', () => { toggleEdit() });
    if(!editMode){ toggleEdit() }

    // The delete functionality
    deleteBtn.addEventListener('click', () => {
        note.remove();
        updateLocalStorage();
    });

    // Input functionality -- update showcase text to textarea text
    textArea.addEventListener('input', (e) => {
        updateLocalStorage();

        let { value } = e.target;
        showcase.innerHTML = marked(value);
    })

    // Put note to the DOM
    noteContainer.appendChild(note);
}

function updateLocalStorage(){
    // Detect content by getting all textarea
    let createdNotes = [...document.querySelectorAll(".note > textarea")];
    // and storing their values
    let noteData = [];
    createdNotes.forEach((note) => { noteData.push(note.value); });
    
    // Upload the note data to localStorage storage
    localStorage.setItem('notes', JSON.stringify(noteData));
}