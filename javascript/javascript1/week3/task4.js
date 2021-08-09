// note taking app

const notes = [];

function saveNote(content, id, status) {
    const noteTamplate = {
        'content': content,
        'id': id,
        'status': status,
    }
    notes.push(noteTamplate);
}

saveNote("Pick up groceries", 1, 'checked');
saveNote("Do laundry", 2, 'to-do');
saveNote("Go to gym", 3, 'checked');
saveNote("Do homework", 4, 'to-do');

console.log(notes); // [{content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}]

function getNote(id) {

    for (let i = 0; i < notes.length; i++) {
        if (typeof id === 'number' && id === notes[i].id) {
            return console.log(notes[i]);
        } else {
            return 'Error';
        }
    }
}
const firstNote = getNote(1);
console.log(firstNote);

function logOutNotesFormatted() {
    for (const i in notes) {
        console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}`);
    };
};

logOutNotesFormatted()

let checkStatus = notes.filter(item => item.status === 'to-do');

console.log(`You have ${checkStatus.length} more items left on the to-do list.`)