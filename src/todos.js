import { generateGUID, isNullOrEmpty } from "./utilities";

class ToDoList {
    itemId = generateGUID();
    createdOn = new Date();
    isComplete = false;
    constructor(project, description){
        this.projectName = !isNullOrEmpty(project) ? project.displayName : defaultsFolder.displayName;
        this.projectId = project.projectId;
        project.toDos.push(this);
        this.description = description;
    }

    changeCompletionStatus = function() {
        if(this.isComplete) {
            this.isComplete = false;
        } else {
            this.isComplete = true;
        }
    }

    changePriority = function(priority) {
        this.priority = priority;
        // update DOM accordingly -> change color depending on priority + show in UI -> this should only be a refresh function;
    }
}


export {ToDoList}