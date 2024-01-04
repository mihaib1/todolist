import { generateGUID, isNullOrEmpty } from "./utilities";


class Project {
    projectId = generateGUID();
    toDos = [];
    constructor(displayName){
        this.displayName = displayName;
    }

    changeDisplayName = function(newDisplayName){
        this.displayName = newDisplayName;
    }

    getToDoList = function(){
        return this.toDos;
    }
}

let projectsArray = [];

function createProject(paramDisplayName) {
    let newProject = new Project(paramDisplayName);
    projectsArray.push(newProject);
    return newProject;
}

export {projectsArray, createProject};