import {isNullOrEmpty, generateGUID} from './utilities';
import {priorities} from './variables';
import { createProject, projectsArray } from './projects';
import { ToDoList } from './todos';
import { generateGrid, showHideElement } from './domActions';
import './style.css'

// index,js should act as a controller for all the other modules


// *** DATA FOR TESTING HERE ***

let defaultsFolder = createProject("My Projects");
let todolist = new ToDoList(defaultsFolder);
todolist.title = "Titlu proiect lorem ipsum asakdbsadbsajkdsnaladsalda sandldnal lsdladljl";
let newtodo = new ToDoList(defaultsFolder);
newtodo.title = "bebababa"

let school = createProject("School");
let too = new ToDoList(school);
too.title = "aaa";
let poo = new ToDoList(school);
poo.title = "bb";


// *** STOP DATA FOR TESTING

function createNote() {
    // get the selected folder (IF ANY) -> will be stored in a variable called selectedFolder; -> need to use HTML here
    // if no folder is selected, the defaultFolder will be used. 
    // let toToDlist = new ToDolist(selectedFolder);
    // add "selected class to the newly created note and remove the class from any other list element."
}

function updateNote() {
    // get selected note 
    // IMPORTANT:
    // IF CHANGING THE FOLDER, FIRST REMOVE IT FROM THE CURRENT FOLDER THEN ADD THE NOTE TO THE NEW FOLDER
    // how to? 
    //      let toDosList = project.toDos
    //      let index = project.toDos.indexOf(elemToBeRemoved)
    //      toDosList = toDosList.splice(index, 1);
    // update note with the new project folder id;
}

// event la click pe un folder / o notita -> sessionStorage.selectedFolder = ID folder selectat. 
//                                           sessionStorage.selectedNote = ID notita selectata.
// Solutie: eventListener pe fiecare container care va apela functia de mai sus


// Have a HTML class "selected" on the current folder and when inserting, check for the selected folder and store its name in a variable


// OPTION 1: 
// Create a new ToDoList object containing only the folder; 
// add eventListener for each field; On each keystroke update the object data 
// attributes will be added and updated at each keystroke. 

/* for updating data

field.addEventListener("keyup", function(element){
    // get selected note; 
    // note.fieldName = element.value;
})

*/





// should do the sorting using JS and objects, not in HTML

/// **** must-have features

// 1. Folder rename / delete / creation
// 2. To do list element update / delete / creation


generateGrid();


let titles = document.querySelectorAll("div.project-title");
titles.forEach(function(title){
    title.addEventListener("click", function(event){
        deselectRow(titles);
        event.target.classList.add("selected");
        let toDolist = event.target.nextSibling;
        showHideElement(toDolist);
        // should make this function so that it only toggles the display for the... for the what??
    })
})

function deselectRow(selector){
    selector.forEach(function(element){
        element.classList.remove("selected");
    })
}
