/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom-add-card.js":
/*!*****************************!*\
  !*** ./src/dom-add-card.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domAddCard": () => (/* binding */ domAddCard)
/* harmony export */ });
function domAddCard(selected) {
    selected.sort(function(a, b) {
        return a.title.localeCompare(b.title)
    })

    const anchor = document.getElementById('anchor')
    while (anchor.hasChildNodes()) {
        anchor.removeChild(anchor.firstChild)
    }

    let numberOfProjects = selected.length

    for (let i = 0; i < numberOfProjects; i++) {

        const card = document.createElement('div');
        card.classList.add('card');
        anchor.appendChild(card);

        const idTodo = document.createElement('div');
        idTodo.classList.add('idTodo');
        idTodo.textContent = selected[i].idTodo;
        card.appendChild(idTodo);

        const title = document.createElement('div');
        title.classList.add('title');
        title.textContent = selected[i].title;
        card.appendChild(title);

        const description = document.createElement('div');
        description.classList.add('description');
        description.textContent = selected[i].description;
        card.appendChild(description);

        const dueDate = document.createElement('div');
        dueDate.textContent = selected[i].dueDate;
        card.appendChild(dueDate);

        const project = document.createElement('div');
        const projectWithoutSpaces = selected[i].project.replaceAll(' ', '_')
        project.classList.add(projectWithoutSpaces);
        project.textContent = selected[i].project;
        card.appendChild(project);

        const priority = document.createElement('div');
        priority.textContent = selected[i].priority;
        card.appendChild(priority);

        const deleteTodo = document.createElement('button');
        deleteTodo.classList.add('delete')
        deleteTodo.id = `delete${i}`;
        deleteTodo.textContent = 'Delete';
        card.appendChild(deleteTodo);
    }
}

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dom_add_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-add-card */ "./src/dom-add-card.js");


let idGlobal = 0;

let projects = {
    'Default Project': [],
}

const todo =  (idTodo, title, description, dueDate, project, priority) => {
    return {idTodo, title, description, dueDate, project, priority}
}

const addToDo = () => {
    const submit = document.getElementById('submit')
    submit.addEventListener('click', () => {
        const idTodo = idGlobal ++
        const getTitle = document.getElementById('title').value;
        const getDescription = document.getElementById('description').value;
        const getDueDate = document.getElementById('dueDate').value;
        const getProject = document.getElementById('project').value;
        const getPriority = document.getElementById('priority').value;
        const entry = todo(idTodo, getTitle, getDescription, getDueDate, getProject, getPriority)
        if (projects.hasOwnProperty(getProject) === true){
            projects[getProject].push(entry)
            ;(0,_dom_add_card__WEBPACK_IMPORTED_MODULE_0__.domAddCard)(projects[getProject])
        }
        console.log(projects)
    })
}

const addProject = () => {
    const btn = document.getElementById('addProject')
    const anchor = document.getElementById('inputAnchor')
    const projectNameInput = document.createElement('input')
    projectNameInput.setAttribute('type', 'text')
    projectNameInput.id = 'inputProjectID'
    projectNameInput.classList.add('inputProjectHidden')
    
    const btnCreateConfirm = document.createElement('button')
    btnCreateConfirm.classList.add('btnConfirmHidden')
    btnCreateConfirm.id = 'btnConfirmID'

    anchor.appendChild(projectNameInput)
    anchor.appendChild(btnCreateConfirm)

    btn.addEventListener('click', () => {
        projectNameInput.classList.replace('inputProjectHidden','inputProjectShown')
        btnCreateConfirm.classList.replace('btnConfirmHidden', 'btnConfirmShown')
    })

    const btnX = document.getElementById('btnConfirmID')
    btnX.addEventListener('click', () => {
        let inputValue = document.getElementById('inputProjectID');
        if (inputValue.value.trim() === '') {
            alert('The project name is invalid');
            inputValue.value = '';
        } else {
            projects[inputValue.value] = []
            projectNameInput.classList.replace('inputProjectShown', 'inputProjectHidden')
            btnCreateConfirm.classList.replace('btnConfirmShown', 'btnConfirmHidden')
            showProjectsOnSidebar()
            inputValue.value = ''
            projectsDropDown()
        }
    })
}

const showProjectsOnSidebar = () => {
    const anchor = document.getElementById('projectAnchor')
    const lastProject = Object.keys(projects).slice(-1)
    const lastProjectWithoutSpaces = lastProject[0].replaceAll(' ', '')
    const listProject = document.createElement('div')
    
    listProject.id = lastProjectWithoutSpaces
    listProject.textContent = lastProject

    anchor.appendChild(listProject)
}

const projectsOnWorkspace = () => {
    const anchor = document.getElementById('projectAnchor')
    const projectPressed = e => {
        const isProject = e.target.nodeName === 'DIV'
        if(!isProject) {
            return
        } 
        (0,_dom_add_card__WEBPACK_IMPORTED_MODULE_0__.domAddCard)(projects[e.target.innerHTML])
        
    }
    anchor.addEventListener('click', projectPressed)
}

const showAllProjectsOnWorkspace = () => {
    const all = document.getElementById('navigation')
    const optionPressed = e => {
        const isOption = e.target.nodeName === 'DIV'
        if (!isOption) {
            return
        }
        if (e.target.id === 'all') {
            const keyValues = Object.values(projects).flat()
            ;(0,_dom_add_card__WEBPACK_IMPORTED_MODULE_0__.domAddCard)(keyValues)
        }
    }
    all.addEventListener('click', optionPressed)
}

const projectsDropDown = () => {
    const projectAnchor = document.getElementById('project');
    const allProjects = Object.keys(projects)
    while (projectAnchor.firstChild) {
        projectAnchor.removeChild(projectAnchor.firstChild)
    }
    for (let i = 0; i < allProjects.length; i++) {
        let newProject = document.createElement('option')
        newProject.textContent = allProjects[i]
        projectAnchor.appendChild(newProject)
    }
}

const deleteTodo = () => {
    window.addEventListener('click', (e) => {
        if (e.target.nodeName === 'BUTTON' && e.target.className === 'delete') {
            const todoId = e.target.parentNode.childNodes[0].innerText
            const todoProject = e.target.parentNode.childNodes[4].innerText
            const todoIndex = projects[todoProject].findIndex(todo => todo.idTodo == todoId)
            projects[todoProject].splice(todoIndex, 1)
            ;(0,_dom_add_card__WEBPACK_IMPORTED_MODULE_0__.domAddCard)(projects[todoProject])
            console.log(todoIndex);
        }
    })
}



addToDo()
addProject()
showProjectsOnSidebar()
showAllProjectsOnWorkspace()
projectsOnWorkspace()
deleteTodo()




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLHNCQUFzQjs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsaUNBQWlDLEVBQUU7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ3JEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTjJDOztBQUUzQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBVTtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLHlEQUFVO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBVTtBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvZG9tLWFkZC1jYXJkLmpzIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9vZGluLXRvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL29kaW4tdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGRvbUFkZENhcmQoc2VsZWN0ZWQpIHtcbiAgICBzZWxlY3RlZC5zb3J0KGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGEudGl0bGUubG9jYWxlQ29tcGFyZShiLnRpdGxlKVxuICAgIH0pXG5cbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYW5jaG9yJylcbiAgICB3aGlsZSAoYW5jaG9yLmhhc0NoaWxkTm9kZXMoKSkge1xuICAgICAgICBhbmNob3IucmVtb3ZlQ2hpbGQoYW5jaG9yLmZpcnN0Q2hpbGQpXG4gICAgfVxuXG4gICAgbGV0IG51bWJlck9mUHJvamVjdHMgPSBzZWxlY3RlZC5sZW5ndGhcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZQcm9qZWN0czsgaSsrKSB7XG5cbiAgICAgICAgY29uc3QgY2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjYXJkLmNsYXNzTGlzdC5hZGQoJ2NhcmQnKTtcbiAgICAgICAgYW5jaG9yLmFwcGVuZENoaWxkKGNhcmQpO1xuXG4gICAgICAgIGNvbnN0IGlkVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBpZFRvZG8uY2xhc3NMaXN0LmFkZCgnaWRUb2RvJyk7XG4gICAgICAgIGlkVG9kby50ZXh0Q29udGVudCA9IHNlbGVjdGVkW2ldLmlkVG9kbztcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChpZFRvZG8pO1xuXG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRpdGxlLmNsYXNzTGlzdC5hZGQoJ3RpdGxlJyk7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gc2VsZWN0ZWRbaV0udGl0bGU7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQodGl0bGUpO1xuXG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLmNsYXNzTGlzdC5hZGQoJ2Rlc2NyaXB0aW9uJyk7XG4gICAgICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gc2VsZWN0ZWRbaV0uZGVzY3JpcHRpb247XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZGVzY3JpcHRpb24pO1xuXG4gICAgICAgIGNvbnN0IGR1ZURhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZHVlRGF0ZS50ZXh0Q29udGVudCA9IHNlbGVjdGVkW2ldLmR1ZURhdGU7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQoZHVlRGF0ZSk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25zdCBwcm9qZWN0V2l0aG91dFNwYWNlcyA9IHNlbGVjdGVkW2ldLnByb2plY3QucmVwbGFjZUFsbCgnICcsICdfJylcbiAgICAgICAgcHJvamVjdC5jbGFzc0xpc3QuYWRkKHByb2plY3RXaXRob3V0U3BhY2VzKTtcbiAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHNlbGVjdGVkW2ldLnByb2plY3Q7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJpb3JpdHkudGV4dENvbnRlbnQgPSBzZWxlY3RlZFtpXS5wcmlvcml0eTtcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChwcmlvcml0eSk7XG5cbiAgICAgICAgY29uc3QgZGVsZXRlVG9kbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVUb2RvLmNsYXNzTGlzdC5hZGQoJ2RlbGV0ZScpXG4gICAgICAgIGRlbGV0ZVRvZG8uaWQgPSBgZGVsZXRlJHtpfWA7XG4gICAgICAgIGRlbGV0ZVRvZG8udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZWxldGVUb2RvKTtcbiAgICB9XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBkb21BZGRDYXJkIH0gZnJvbSBcIi4vZG9tLWFkZC1jYXJkXCJcblxubGV0IGlkR2xvYmFsID0gMDtcblxubGV0IHByb2plY3RzID0ge1xuICAgICdEZWZhdWx0IFByb2plY3QnOiBbXSxcbn1cblxuY29uc3QgdG9kbyA9ICAoaWRUb2RvLCB0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3QsIHByaW9yaXR5KSA9PiB7XG4gICAgcmV0dXJuIHtpZFRvZG8sIHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHl9XG59XG5cbmNvbnN0IGFkZFRvRG8gPSAoKSA9PiB7XG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBpZFRvZG8gPSBpZEdsb2JhbCArK1xuICAgICAgICBjb25zdCBnZXRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBjb25zdCBnZXREdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZ2V0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGdldFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gdG9kbyhpZFRvZG8sIGdldFRpdGxlLCBnZXREZXNjcmlwdGlvbiwgZ2V0RHVlRGF0ZSwgZ2V0UHJvamVjdCwgZ2V0UHJpb3JpdHkpXG4gICAgICAgIGlmIChwcm9qZWN0cy5oYXNPd25Qcm9wZXJ0eShnZXRQcm9qZWN0KSA9PT0gdHJ1ZSl7XG4gICAgICAgICAgICBwcm9qZWN0c1tnZXRQcm9qZWN0XS5wdXNoKGVudHJ5KVxuICAgICAgICAgICAgZG9tQWRkQ2FyZChwcm9qZWN0c1tnZXRQcm9qZWN0XSlcbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhwcm9qZWN0cylcbiAgICB9KVxufVxuXG5jb25zdCBhZGRQcm9qZWN0ID0gKCkgPT4ge1xuICAgIGNvbnN0IGJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhZGRQcm9qZWN0JylcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaW5wdXRBbmNob3InKVxuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgcHJvamVjdE5hbWVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAndGV4dCcpXG4gICAgcHJvamVjdE5hbWVJbnB1dC5pZCA9ICdpbnB1dFByb2plY3RJRCdcbiAgICBwcm9qZWN0TmFtZUlucHV0LmNsYXNzTGlzdC5hZGQoJ2lucHV0UHJvamVjdEhpZGRlbicpXG4gICAgXG4gICAgY29uc3QgYnRuQ3JlYXRlQ29uZmlybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgYnRuQ3JlYXRlQ29uZmlybS5jbGFzc0xpc3QuYWRkKCdidG5Db25maXJtSGlkZGVuJylcbiAgICBidG5DcmVhdGVDb25maXJtLmlkID0gJ2J0bkNvbmZpcm1JRCdcblxuICAgIGFuY2hvci5hcHBlbmRDaGlsZChwcm9qZWN0TmFtZUlucHV0KVxuICAgIGFuY2hvci5hcHBlbmRDaGlsZChidG5DcmVhdGVDb25maXJtKVxuXG4gICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBwcm9qZWN0TmFtZUlucHV0LmNsYXNzTGlzdC5yZXBsYWNlKCdpbnB1dFByb2plY3RIaWRkZW4nLCdpbnB1dFByb2plY3RTaG93bicpXG4gICAgICAgIGJ0bkNyZWF0ZUNvbmZpcm0uY2xhc3NMaXN0LnJlcGxhY2UoJ2J0bkNvbmZpcm1IaWRkZW4nLCAnYnRuQ29uZmlybVNob3duJylcbiAgICB9KVxuXG4gICAgY29uc3QgYnRuWCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5Db25maXJtSUQnKVxuICAgIGJ0blguYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGxldCBpbnB1dFZhbHVlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0UHJvamVjdElEJyk7XG4gICAgICAgIGlmIChpbnB1dFZhbHVlLnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdUaGUgcHJvamVjdCBuYW1lIGlzIGludmFsaWQnKTtcbiAgICAgICAgICAgIGlucHV0VmFsdWUudmFsdWUgPSAnJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2plY3RzW2lucHV0VmFsdWUudmFsdWVdID0gW11cbiAgICAgICAgICAgIHByb2plY3ROYW1lSW5wdXQuY2xhc3NMaXN0LnJlcGxhY2UoJ2lucHV0UHJvamVjdFNob3duJywgJ2lucHV0UHJvamVjdEhpZGRlbicpXG4gICAgICAgICAgICBidG5DcmVhdGVDb25maXJtLmNsYXNzTGlzdC5yZXBsYWNlKCdidG5Db25maXJtU2hvd24nLCAnYnRuQ29uZmlybUhpZGRlbicpXG4gICAgICAgICAgICBzaG93UHJvamVjdHNPblNpZGViYXIoKVxuICAgICAgICAgICAgaW5wdXRWYWx1ZS52YWx1ZSA9ICcnXG4gICAgICAgICAgICBwcm9qZWN0c0Ryb3BEb3duKClcbiAgICAgICAgfVxuICAgIH0pXG59XG5cbmNvbnN0IHNob3dQcm9qZWN0c09uU2lkZWJhciA9ICgpID0+IHtcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEFuY2hvcicpXG4gICAgY29uc3QgbGFzdFByb2plY3QgPSBPYmplY3Qua2V5cyhwcm9qZWN0cykuc2xpY2UoLTEpXG4gICAgY29uc3QgbGFzdFByb2plY3RXaXRob3V0U3BhY2VzID0gbGFzdFByb2plY3RbMF0ucmVwbGFjZUFsbCgnICcsICcnKVxuICAgIGNvbnN0IGxpc3RQcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcbiAgICBcbiAgICBsaXN0UHJvamVjdC5pZCA9IGxhc3RQcm9qZWN0V2l0aG91dFNwYWNlc1xuICAgIGxpc3RQcm9qZWN0LnRleHRDb250ZW50ID0gbGFzdFByb2plY3RcblxuICAgIGFuY2hvci5hcHBlbmRDaGlsZChsaXN0UHJvamVjdClcbn1cblxuY29uc3QgcHJvamVjdHNPbldvcmtzcGFjZSA9ICgpID0+IHtcbiAgICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEFuY2hvcicpXG4gICAgY29uc3QgcHJvamVjdFByZXNzZWQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgaXNQcm9qZWN0ID0gZS50YXJnZXQubm9kZU5hbWUgPT09ICdESVYnXG4gICAgICAgIGlmKCFpc1Byb2plY3QpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9IFxuICAgICAgICBkb21BZGRDYXJkKHByb2plY3RzW2UudGFyZ2V0LmlubmVySFRNTF0pXG4gICAgICAgIFxuICAgIH1cbiAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwcm9qZWN0UHJlc3NlZClcbn1cblxuY29uc3Qgc2hvd0FsbFByb2plY3RzT25Xb3Jrc3BhY2UgPSAoKSA9PiB7XG4gICAgY29uc3QgYWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdmlnYXRpb24nKVxuICAgIGNvbnN0IG9wdGlvblByZXNzZWQgPSBlID0+IHtcbiAgICAgICAgY29uc3QgaXNPcHRpb24gPSBlLnRhcmdldC5ub2RlTmFtZSA9PT0gJ0RJVidcbiAgICAgICAgaWYgKCFpc09wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKGUudGFyZ2V0LmlkID09PSAnYWxsJykge1xuICAgICAgICAgICAgY29uc3Qga2V5VmFsdWVzID0gT2JqZWN0LnZhbHVlcyhwcm9qZWN0cykuZmxhdCgpXG4gICAgICAgICAgICBkb21BZGRDYXJkKGtleVZhbHVlcylcbiAgICAgICAgfVxuICAgIH1cbiAgICBhbGwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvcHRpb25QcmVzc2VkKVxufVxuXG5jb25zdCBwcm9qZWN0c0Ryb3BEb3duID0gKCkgPT4ge1xuICAgIGNvbnN0IHByb2plY3RBbmNob3IgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdCcpO1xuICAgIGNvbnN0IGFsbFByb2plY3RzID0gT2JqZWN0LmtleXMocHJvamVjdHMpXG4gICAgd2hpbGUgKHByb2plY3RBbmNob3IuZmlyc3RDaGlsZCkge1xuICAgICAgICBwcm9qZWN0QW5jaG9yLnJlbW92ZUNoaWxkKHByb2plY3RBbmNob3IuZmlyc3RDaGlsZClcbiAgICB9XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhbGxQcm9qZWN0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBsZXQgbmV3UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gICAgICAgIG5ld1Byb2plY3QudGV4dENvbnRlbnQgPSBhbGxQcm9qZWN0c1tpXVxuICAgICAgICBwcm9qZWN0QW5jaG9yLmFwcGVuZENoaWxkKG5ld1Byb2plY3QpXG4gICAgfVxufVxuXG5jb25zdCBkZWxldGVUb2RvID0gKCkgPT4ge1xuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5ub2RlTmFtZSA9PT0gJ0JVVFRPTicgJiYgZS50YXJnZXQuY2xhc3NOYW1lID09PSAnZGVsZXRlJykge1xuICAgICAgICAgICAgY29uc3QgdG9kb0lkID0gZS50YXJnZXQucGFyZW50Tm9kZS5jaGlsZE5vZGVzWzBdLmlubmVyVGV4dFxuICAgICAgICAgICAgY29uc3QgdG9kb1Byb2plY3QgPSBlLnRhcmdldC5wYXJlbnROb2RlLmNoaWxkTm9kZXNbNF0uaW5uZXJUZXh0XG4gICAgICAgICAgICBjb25zdCB0b2RvSW5kZXggPSBwcm9qZWN0c1t0b2RvUHJvamVjdF0uZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZFRvZG8gPT0gdG9kb0lkKVxuICAgICAgICAgICAgcHJvamVjdHNbdG9kb1Byb2plY3RdLnNwbGljZSh0b2RvSW5kZXgsIDEpXG4gICAgICAgICAgICBkb21BZGRDYXJkKHByb2plY3RzW3RvZG9Qcm9qZWN0XSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRvZG9JbmRleCk7XG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5cblxuYWRkVG9EbygpXG5hZGRQcm9qZWN0KClcbnNob3dQcm9qZWN0c09uU2lkZWJhcigpXG5zaG93QWxsUHJvamVjdHNPbldvcmtzcGFjZSgpXG5wcm9qZWN0c09uV29ya3NwYWNlKClcbmRlbGV0ZVRvZG8oKVxuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9