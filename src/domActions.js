import { isNullOrEmpty } from "./utilities";
import { projectsArray } from "./projects";

let appContainer = document.createElement("div");
appContainer.classList.add("container");

let sidebar = document.createElement("div");
sidebar.classList.add("sidebar");



/*  

projectsArray.forEach(function(element){
    generateProjectAndChildrenTree(projectFolder);
})

*** Acest forEach ar trebui dus in index.js ***

*/

class Button {
    constructor(rowData){
        this.rowData = rowData;
        this.element = document.createElement("button");
    }

    setDeleteAction() {
        let rowData = this.rowData;
        this.element.textContent = "❌";
        this.element.classList.add("deleteBtn");
        //this.element.addEventListener("click", function(event){console.log(rowData)}) -> could add eventListener directly here;
        // event listener to show modal maybe?
        // other features specific to delete btn?
    }

    setEditAction() {
        this.element.textContent = "✏️"
        this.element.addEventListener("click", function(event){console.log("click")})
    }

    setCompleteAction() {
        let rowData = this.rowData;
        this.element.textContent = '✅';
        this.element.addEventListener("click", function(event){
            if(rowData.isComplete) {
                rowData.isComplete = false;
                console.log("Changed to false");
            } else {
                rowData.isComplete = true;
                console.log("Changed complete status to true");
            }
        })
    }

}

function generateProjectAndChildrenTree(projectFolder) {

    let projectContainer = document.createElement("div");
    projectContainer.classList.add("project-container");

    let projectTitleWrapper = document.createElement("div");
    projectTitleWrapper.classList.add("project-title");

    projectTitleWrapper.textContent = projectFolder.displayName;

    projectContainer.append(projectTitleWrapper);

    let notesList = document.createElement("ul");
    notesList.classList.add("to-dos", "hidden");

    let toDoList = projectFolder.getToDoList();

    toDoList.forEach(function(element){
        let listElement = document.createElement("div");
        listElement.classList.add("list-element");

        let title = document.createElement("div");
        title.classList.add("note-title");
        title.textContent = element.title;

        let buttonsContainer = createButtonsContainer(element);

        listElement.append(title, buttonsContainer);
        notesList.appendChild(listElement);
    });
    projectContainer.append(notesList);
    return projectContainer;
}

function createButtonsContainer(rowData) {
    let buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("btnContainer");

    let deleteBtn = new Button(rowData);
    deleteBtn.setDeleteAction();
    deleteBtn.element.addEventListener("click", function(event){
        console.log("Are you sure you want to delete note " + deleteBtn.rowData.title + " from folder " + deleteBtn.rowData.projectName);
    });

    let completeBtn = new Button(rowData);
    completeBtn.setCompleteAction();
    buttonsContainer.append(deleteBtn.element, completeBtn.element);

    return buttonsContainer;
}



function generateGrid() {
    let wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");

    let projectsList = document.createElement("div")
    projectsList.classList.add("projects-list");

    let noteDetails = document.createElement("div");
    noteDetails.classList.add("note-screen");

    wrapper.append(projectsList, noteDetails);
    let listDataDiv = createProjectsList();
    projectsList.append(listDataDiv);
    document.body.append(wrapper); 
}

function createProjectsList () {
    let listDiv = document.createElement("div");
    if(!isNullOrEmpty(projectsArray)){
        projectsArray.forEach(function(project){
            let projectFolder = generateProjectAndChildrenTree(project);
            listDiv.append(projectFolder);
        });
    } else {
        alert("No projects found!");
    }
    return listDiv;
}

function showHideElement(element){
    let elementClassList = getAllHTMLClasses(element);
    if(!isNullOrEmpty(elementClassList)){
        if(elementClassList.indexOf("hidden") > -1){
            element.classList.remove("hidden")
        } else {
            element.classList.add("hidden");
        }
    } else {
        console.error("No element class found!");
    }
}

function getAllHTMLClasses(selector){
    let htmlClassesArray = [];
    if(!isNullOrEmpty(selector)){
        let classes = selector.classList
        let objKeys = Object.keys(classes);
        objKeys.forEach(function(key){
            htmlClassesArray.push(classes[key]);
        });
    } else console.error("No selector found!");

    return htmlClassesArray;
}

export {generateProjectAndChildrenTree, generateGrid, showHideElement};