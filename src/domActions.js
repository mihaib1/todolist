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

        let buttonsContainer = document.createElement("div");
        buttonsContainer.classList.add("btnContainer");
        buttonsContainer.textContent = "btnPlaceholder";

        listElement.append(title, buttonsContainer);
        notesList.appendChild(listElement);
    });
    projectContainer.append(notesList);
    return projectContainer;
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