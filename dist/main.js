/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://my-webpack-project/./src/style.css?");

/***/ }),

/***/ "./src/domActions.js":
/*!***************************!*\
  !*** ./src/domActions.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateGrid: () => (/* binding */ generateGrid),\n/* harmony export */   generateProjectAndChildrenTree: () => (/* binding */ generateProjectAndChildrenTree),\n/* harmony export */   showHideElement: () => (/* binding */ showHideElement)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n\n\n\nlet appContainer = document.createElement(\"div\");\nappContainer.classList.add(\"container\");\n\nlet sidebar = document.createElement(\"div\");\nsidebar.classList.add(\"sidebar\");\n\nclass Button {\n    constructor(rowData){\n        this.rowData = rowData;\n        this.element = document.createElement(\"button\");\n    }\n\n    setDeleteAction() {\n        let rowData = this.rowData;\n        this.element.textContent = \"❌\";\n        this.element.classList.add(\"deleteBtn\");\n        //this.element.addEventListener(\"click\", function(event){console.log(rowData)}) -> could add eventListener directly here;\n        // event listener to show modal maybe?\n        // other features specific to delete btn?\n    }\n\n    setEditAction() {\n        this.element.textContent = \"✏️\";\n        this.element.addEventListener(\"click\", function(event){console.log(\"clicked EDIT\")})\n    }\n\n    setCompleteAction() {\n        let rowData = this.rowData;\n        this.element.textContent = '✅'\n        this.element.classList.add(\"edit-btn\");\n        this.element.addEventListener(\"click\", function(event){\n            rowData.changeCompletionStatus();\n            generateGrid();\n        })\n    }\n}\n\n\n\nfunction generateGrid() {\n\n    let container = document.getElementById(\"grid-container\");\n    container.innerHTML = \"\";\n    let wrapper = document.createElement(\"div\");\n    wrapper.classList.add(\"wrapper\");\n\n    let projectsList = document.createElement(\"div\")\n    projectsList.classList.add(\"projects-list\");\n\n    let noteDetails = document.createElement(\"div\");\n    noteDetails.classList.add(\"note-screen\");\n\n    wrapper.append(projectsList, noteDetails);\n    let listDataDiv = createProjectsList();\n    projectsList.append(listDataDiv);\n    container.append(wrapper);\n    addTitleBehaviour();\n}\n\nfunction createProjectsList () {\n    let listDiv = document.createElement(\"div\");\n    if(!(0,_utilities__WEBPACK_IMPORTED_MODULE_0__.isNullOrEmpty)(_projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray)){\n        _projects__WEBPACK_IMPORTED_MODULE_1__.projectsArray.forEach(function(project){\n            let projectFolder = generateProjectAndChildrenTree(project);\n            listDiv.append(projectFolder);\n        });\n    } else {\n        alert(\"No projects found!\");\n    }\n    return listDiv;\n}\n\nfunction generateProjectAndChildrenTree(projectFolder) {\n\n    let projectContainer = document.createElement(\"div\");\n    projectContainer.classList.add(\"project-container\");\n\n    let projectTitleWrapper = document.createElement(\"div\");\n    projectTitleWrapper.classList.add(\"project-title\");\n\n    projectTitleWrapper.textContent = projectFolder.displayName;\n\n    projectContainer.append(projectTitleWrapper);\n\n    let notesList = document.createElement(\"ul\");\n    notesList.classList.add(\"to-dos\", \"hidden\");\n\n    let toDoList = projectFolder.getToDoList();\n\n    toDoList.forEach(function(element){\n        let listElement = document.createElement(\"div\");\n        listElement.classList.add(\"list-element\");\n\n        let title = document.createElement(\"div\");\n        title.classList.add(\"note-title\");\n        title.textContent = element.title;\n\n        let buttonsContainer = createButtonsContainer(element);\n\n        if(element.isComplete){\n            listElement.classList.add(\"complete\");\n        }  \n\n        listElement.append(title, buttonsContainer);\n        notesList.appendChild(listElement);\n    });\n    projectContainer.append(notesList);\n    return projectContainer;\n}\n\nfunction createButtonsContainer(rowData) {\n    let buttonsContainer = document.createElement(\"div\");\n    buttonsContainer.classList.add(\"btnContainer\");\n\n    let deleteBtn = new Button(rowData);\n    deleteBtn.setDeleteAction();\n    deleteBtn.element.addEventListener(\"click\", function(event){\n        console.log(\"Are you sure you want to delete note \" + deleteBtn.rowData.title + \" from folder \" + deleteBtn.rowData.projectName);\n    });\n\n    let completeBtn = new Button(rowData);\n    completeBtn.setCompleteAction();\n    buttonsContainer.append(deleteBtn.element, completeBtn.element);\n\n    return buttonsContainer;\n}\n\nfunction showHideElement(element){\n    let elementClassList = getAllHTMLClasses(element);\n    if(!(0,_utilities__WEBPACK_IMPORTED_MODULE_0__.isNullOrEmpty)(elementClassList)){\n        if(elementClassList.indexOf(\"hidden\") > -1){\n            element.classList.remove(\"hidden\")\n        } else {\n            element.classList.add(\"hidden\");\n        }\n    } else {\n        console.error(\"No element class found!\");\n    }\n}\n\nfunction getAllHTMLClasses(selector){\n    let htmlClassesArray = [];\n    if(!(0,_utilities__WEBPACK_IMPORTED_MODULE_0__.isNullOrEmpty)(selector)){\n        let classes = selector.classList\n        let objKeys = Object.keys(classes);\n        objKeys.forEach(function(key){\n            htmlClassesArray.push(classes[key]);\n        });\n    } else console.error(\"No selector found!\");\n\n    return htmlClassesArray;\n}\n\nfunction addTitleBehaviour(){\n    let titles = document.querySelectorAll(\"div.project-title\");\n    titles.forEach(function(title){\n        title.addEventListener(\"click\", function(event){\n            deselectRow(titles);\n            event.target.classList.add(\"selected\");\n            let toDolist = event.target.nextSibling;\n            showHideElement(toDolist);\n        })\n    })\n}\n\nfunction deselectRow(selector){\n    selector.forEach(function(element){\n        element.classList.remove(\"selected\");\n    })\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/domActions.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n/* harmony import */ var _variables__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables */ \"./src/variables.js\");\n/* harmony import */ var _projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projects */ \"./src/projects.js\");\n/* harmony import */ var _todos__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todos */ \"./src/todos.js\");\n/* harmony import */ var _domActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./domActions */ \"./src/domActions.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n\n// index,js should act as a controller for all the other modules\n\n\n// *** DATA FOR TESTING HERE ***\n\nlet defaultsFolder = (0,_projects__WEBPACK_IMPORTED_MODULE_2__.createProject)(\"My Projects\");\nlet todolist = new _todos__WEBPACK_IMPORTED_MODULE_3__.ToDoList(defaultsFolder);\ntodolist.title = \"Titlu proiect lorem ipsum asakdbsadbsajkdsnaladsalda sandldnal lsdladljl\";\ntodolist.isComplete = true;\nlet newtodo = new _todos__WEBPACK_IMPORTED_MODULE_3__.ToDoList(defaultsFolder);\nnewtodo.title = \"bebababa\"\n\nlet school = (0,_projects__WEBPACK_IMPORTED_MODULE_2__.createProject)(\"School\");\nlet too = new _todos__WEBPACK_IMPORTED_MODULE_3__.ToDoList(school);\ntoo.title = \"aaa\";\nlet poo = new _todos__WEBPACK_IMPORTED_MODULE_3__.ToDoList(school);\npoo.title = \"bb\";\n\n\n// *** STOP DATA FOR TESTING\n\n(0,_domActions__WEBPACK_IMPORTED_MODULE_4__.generateGrid)();\n\nfunction createNote() {\n    // get the selected folder (IF ANY) -> will be stored in a variable called selectedFolder; -> need to use HTML here\n    // if no folder is selected, the defaultFolder will be used. \n    // let toToDlist = new ToDolist(selectedFolder);\n    // add \"selected class to the newly created note and remove the class from any other list element.\"\n}\n\nfunction updateNote() {\n    // get selected note \n    // IMPORTANT:\n    // IF CHANGING THE FOLDER, FIRST REMOVE IT FROM THE CURRENT FOLDER THEN ADD THE NOTE TO THE NEW FOLDER\n    // how to? \n    //      let toDosList = project.toDos\n    //      let index = project.toDos.indexOf(elemToBeRemoved)\n    //      toDosList = toDosList.splice(index, 1);\n    // update note with the new project folder id;\n}\n\n// event la click pe un folder / o notita -> sessionStorage.selectedFolder = ID folder selectat. \n//                                           sessionStorage.selectedNote = ID notita selectata.\n// Solutie: eventListener pe fiecare container care va apela functia de mai sus\n\n\n// Have a HTML class \"selected\" on the current folder and when inserting, check for the selected folder and store its name in a variable\n\n\n// OPTION 1: \n// Create a new ToDoList object containing only the folder; \n// add eventListener for each field; On each keystroke update the object data \n// attributes will be added and updated at each keystroke. \n\n/* for updating data\n\nfield.addEventListener(\"keyup\", function(element){\n    // get selected note; \n    // note.fieldName = element.value;\n})\n\n*/\n\n\n\n\n\n// should do the sorting using JS and objects, not in HTML\n\n/// **** must-have features\n\n// 1. Folder rename / delete / creation\n// 2. To do list element update / delete / creation\n\n\nlet testbtn = document.createElement('button');\ntestbtn.textContent = \"test\";\ntestbtn.addEventListener(\"click\", function(event){\n    console.log(todolist);\n})\ndocument.body.append(testbtn);\n\n//# sourceURL=webpack://my-webpack-project/./src/index.js?");

/***/ }),

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createProject: () => (/* binding */ createProject),\n/* harmony export */   projectsArray: () => (/* binding */ projectsArray)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n\n\n\nclass Project {\n    projectId = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.generateGUID)();\n    toDos = [];\n    constructor(displayName){\n        this.displayName = displayName;\n    }\n\n    changeDisplayName = function(newDisplayName){\n        this.displayName = newDisplayName;\n    }\n\n    getToDoList = function(){\n        return this.toDos;\n    }\n}\n\nlet projectsArray = [];\n\nfunction createProject(paramDisplayName) {\n    let newProject = new Project(paramDisplayName);\n    projectsArray.push(newProject);\n    return newProject;\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/projects.js?");

/***/ }),

/***/ "./src/todos.js":
/*!**********************!*\
  !*** ./src/todos.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ToDoList: () => (/* binding */ ToDoList)\n/* harmony export */ });\n/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilities */ \"./src/utilities.js\");\n\n\nclass ToDoList {\n    itemId = (0,_utilities__WEBPACK_IMPORTED_MODULE_0__.generateGUID)();\n    createdOn = new Date();\n    isComplete = false;\n    constructor(project, description){\n        this.projectName = !(0,_utilities__WEBPACK_IMPORTED_MODULE_0__.isNullOrEmpty)(project) ? project.displayName : defaultsFolder.displayName;\n        this.projectId = project.projectId;\n        project.toDos.push(this);\n        this.description = description;\n    }\n\n    changeCompletionStatus = function() {\n        if(this.isComplete) {\n            this.isComplete = false;\n        } else {\n            this.isComplete = true;\n        }\n    }\n\n    changePriority = function(priority) {\n        this.priority = priority;\n        // update DOM accordingly -> change color depending on priority + show in UI -> this should only be a refresh function;\n    }\n}\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/todos.js?");

/***/ }),

/***/ "./src/utilities.js":
/*!**************************!*\
  !*** ./src/utilities.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   generateGUID: () => (/* binding */ generateGUID),\n/* harmony export */   isNullOrEmpty: () => (/* binding */ isNullOrEmpty)\n/* harmony export */ });\nlet isNullOrEmpty = function(value) {\n    if(value === null || value === undefined){\n        return true;\n    }\n\n    if(value == \"null\" || value == \"undefined\"){\n        return true;\n    }\n\n    if(value.hasOwnProperty('length') && value.length === 0) {\n        return true;\n    }\n\n    if(value = \"\") {\n        return true;\n    }\n\n    if(value === NaN){\n        return true;\n    }\n\n    if(value.constructor === Object && Object.keys(value).length === 0){\n        return true;\n    }\n\n    return false;\n}\n\nlet generateGUID = function () {\n    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'\n    .replace(/[xy]/g, function (c) {\n        const r = Math.random() * 16 | 0, \n            v = c == 'x' ? r : (r & 0x3 | 0x8);\n        return v.toString(16);\n    });\n}\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/utilities.js?");

/***/ }),

/***/ "./src/variables.js":
/*!**************************!*\
  !*** ./src/variables.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   priorities: () => (/* binding */ priorities)\n/* harmony export */ });\nconst priorities = {\n    CRITICAL: 0,\n    VERY_IMPORTANT: 1,\n    IMPORTANT: 2,\n    MODERATELY_IMPORTANT: 3,\n    LITTLE_IMPORTANCE: 4,\n    UNIMPORTANT: 5,\n    IRRELEVANT: 6\n};\n\n\n\n\n//# sourceURL=webpack://my-webpack-project/./src/variables.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;