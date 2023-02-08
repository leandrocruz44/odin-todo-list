/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
let projects = {
    'Default Project': [],
}
    
const todo =  (title, description, dueDate, project, priority) => {
    return {title, description, dueDate, project, priority}
}

const addToDo = () => {
    const submit = document.getElementById('submit')
    submit.addEventListener('click', () => {
        const getTitle = document.getElementById('title').value;
        const getDescription = document.getElementById('description').value;
        const getDueDate = document.getElementById('dueDate').value;
        const getProject = document.getElementById('project').value;
        const getPriority = document.getElementById('priority').value;
        const entry = todo(getTitle, getDescription, getDueDate, getProject, getPriority)
        if (getProject === '') {
            projects['Default Project'].push(entry)
            domAddCard(projects['Default Project'])
        } else if (projects.hasOwnProperty(getProject) === true){
            projects[getProject].push(entry)
            domAddCard(projects[getProject])
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
        domAddCard(projects[e.target.innerHTML])
        
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
            domAddCard(keyValues)
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

}

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
        project.textContent = selected[i].project;
        card.appendChild(project);

        const priority = document.createElement('div');
        project.textContent = selected[i].priority;
        card.appendChild(priority);

        const deleteTodo = document.createElement('button');
        deleteTodo.classList.add('delete');
        deleteTodo.textContent = 'Delete';
        card.appendChild(deleteTodo);
    }
}

addToDo()
addProject()
showProjectsOnSidebar()
showAllProjectsOnWorkspace()
projectsOnWorkspace()




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsb0JBQW9CLHNCQUFzQjs7QUFFMUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vb2Rpbi10b2RvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsibGV0IHByb2plY3RzID0ge1xuICAgICdEZWZhdWx0IFByb2plY3QnOiBbXSxcbn1cbiAgICBcbmNvbnN0IHRvZG8gPSAgKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHkpID0+IHtcbiAgICByZXR1cm4ge3RpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdCwgcHJpb3JpdHl9XG59XG5cbmNvbnN0IGFkZFRvRG8gPSAoKSA9PiB7XG4gICAgY29uc3Qgc3VibWl0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpXG4gICAgc3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBnZXRUaXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0aXRsZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBnZXREZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZXNjcmlwdGlvbicpLnZhbHVlO1xuICAgICAgICBjb25zdCBnZXREdWVEYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2R1ZURhdGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZ2V0UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGdldFByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gICAgICAgIGNvbnN0IGVudHJ5ID0gdG9kbyhnZXRUaXRsZSwgZ2V0RGVzY3JpcHRpb24sIGdldER1ZURhdGUsIGdldFByb2plY3QsIGdldFByaW9yaXR5KVxuICAgICAgICBpZiAoZ2V0UHJvamVjdCA9PT0gJycpIHtcbiAgICAgICAgICAgIHByb2plY3RzWydEZWZhdWx0IFByb2plY3QnXS5wdXNoKGVudHJ5KVxuICAgICAgICAgICAgZG9tQWRkQ2FyZChwcm9qZWN0c1snRGVmYXVsdCBQcm9qZWN0J10pXG4gICAgICAgIH0gZWxzZSBpZiAocHJvamVjdHMuaGFzT3duUHJvcGVydHkoZ2V0UHJvamVjdCkgPT09IHRydWUpe1xuICAgICAgICAgICAgcHJvamVjdHNbZ2V0UHJvamVjdF0ucHVzaChlbnRyeSlcbiAgICAgICAgICAgIGRvbUFkZENhcmQocHJvamVjdHNbZ2V0UHJvamVjdF0pXG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cocHJvamVjdHMpXG4gICAgfSlcbn1cblxuY29uc3QgYWRkUHJvamVjdCA9ICgpID0+IHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYWRkUHJvamVjdCcpXG4gICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0QW5jaG9yJylcbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKVxuICAgIHByb2plY3ROYW1lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ3RleHQnKVxuICAgIHByb2plY3ROYW1lSW5wdXQuaWQgPSAnaW5wdXRQcm9qZWN0SUQnXG4gICAgcHJvamVjdE5hbWVJbnB1dC5jbGFzc0xpc3QuYWRkKCdpbnB1dFByb2plY3RIaWRkZW4nKVxuICAgIFxuICAgIGNvbnN0IGJ0bkNyZWF0ZUNvbmZpcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKVxuICAgIGJ0bkNyZWF0ZUNvbmZpcm0uY2xhc3NMaXN0LmFkZCgnYnRuQ29uZmlybUhpZGRlbicpXG4gICAgYnRuQ3JlYXRlQ29uZmlybS5pZCA9ICdidG5Db25maXJtSUQnXG5cbiAgICBhbmNob3IuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVJbnB1dClcbiAgICBhbmNob3IuYXBwZW5kQ2hpbGQoYnRuQ3JlYXRlQ29uZmlybSlcblxuICAgIGJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgcHJvamVjdE5hbWVJbnB1dC5jbGFzc0xpc3QucmVwbGFjZSgnaW5wdXRQcm9qZWN0SGlkZGVuJywnaW5wdXRQcm9qZWN0U2hvd24nKVxuICAgICAgICBidG5DcmVhdGVDb25maXJtLmNsYXNzTGlzdC5yZXBsYWNlKCdidG5Db25maXJtSGlkZGVuJywgJ2J0bkNvbmZpcm1TaG93bicpXG4gICAgfSlcblxuICAgIGNvbnN0IGJ0blggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYnRuQ29uZmlybUlEJylcbiAgICBidG5YLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsZXQgaW5wdXRWYWx1ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdpbnB1dFByb2plY3RJRCcpO1xuICAgICAgICBpZiAoaW5wdXRWYWx1ZS52YWx1ZS50cmltKCkgPT09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCgnVGhlIHByb2plY3QgbmFtZSBpcyBpbnZhbGlkJyk7XG4gICAgICAgICAgICBpbnB1dFZhbHVlLnZhbHVlID0gJyc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9qZWN0c1tpbnB1dFZhbHVlLnZhbHVlXSA9IFtdXG4gICAgICAgICAgICBwcm9qZWN0TmFtZUlucHV0LmNsYXNzTGlzdC5yZXBsYWNlKCdpbnB1dFByb2plY3RTaG93bicsICdpbnB1dFByb2plY3RIaWRkZW4nKVxuICAgICAgICAgICAgYnRuQ3JlYXRlQ29uZmlybS5jbGFzc0xpc3QucmVwbGFjZSgnYnRuQ29uZmlybVNob3duJywgJ2J0bkNvbmZpcm1IaWRkZW4nKVxuICAgICAgICAgICAgc2hvd1Byb2plY3RzT25TaWRlYmFyKClcbiAgICAgICAgICAgIGlucHV0VmFsdWUudmFsdWUgPSAnJ1xuICAgICAgICAgICAgcHJvamVjdHNEcm9wRG93bigpXG4gICAgICAgIH1cbiAgICB9KVxufVxuXG5jb25zdCBzaG93UHJvamVjdHNPblNpZGViYXIgPSAoKSA9PiB7XG4gICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RBbmNob3InKVxuICAgIGNvbnN0IGxhc3RQcm9qZWN0ID0gT2JqZWN0LmtleXMocHJvamVjdHMpLnNsaWNlKC0xKVxuICAgIGNvbnN0IGxhc3RQcm9qZWN0V2l0aG91dFNwYWNlcyA9IGxhc3RQcm9qZWN0WzBdLnJlcGxhY2VBbGwoJyAnLCAnJylcbiAgICBjb25zdCBsaXN0UHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgXG4gICAgbGlzdFByb2plY3QuaWQgPSBsYXN0UHJvamVjdFdpdGhvdXRTcGFjZXNcbiAgICBsaXN0UHJvamVjdC50ZXh0Q29udGVudCA9IGxhc3RQcm9qZWN0XG5cbiAgICBhbmNob3IuYXBwZW5kQ2hpbGQobGlzdFByb2plY3QpXG59XG5cbmNvbnN0IHByb2plY3RzT25Xb3Jrc3BhY2UgPSAoKSA9PiB7XG4gICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3RBbmNob3InKVxuICAgIGNvbnN0IHByb2plY3RQcmVzc2VkID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IGlzUHJvamVjdCA9IGUudGFyZ2V0Lm5vZGVOYW1lID09PSAnRElWJ1xuICAgICAgICBpZighaXNQcm9qZWN0KSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBcbiAgICAgICAgZG9tQWRkQ2FyZChwcm9qZWN0c1tlLnRhcmdldC5pbm5lckhUTUxdKVxuICAgICAgICBcbiAgICB9XG4gICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcHJvamVjdFByZXNzZWQpXG59XG5cbmNvbnN0IHNob3dBbGxQcm9qZWN0c09uV29ya3NwYWNlID0gKCkgPT4ge1xuICAgIGNvbnN0IGFsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZpZ2F0aW9uJylcbiAgICBjb25zdCBvcHRpb25QcmVzc2VkID0gZSA9PiB7XG4gICAgICAgIGNvbnN0IGlzT3B0aW9uID0gZS50YXJnZXQubm9kZU5hbWUgPT09ICdESVYnXG4gICAgICAgIGlmICghaXNPcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldC5pZCA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlcyA9IE9iamVjdC52YWx1ZXMocHJvamVjdHMpLmZsYXQoKVxuICAgICAgICAgICAgZG9tQWRkQ2FyZChrZXlWYWx1ZXMpXG4gICAgICAgIH1cbiAgICB9XG4gICAgYWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3B0aW9uUHJlc3NlZClcbn1cblxuY29uc3QgcHJvamVjdHNEcm9wRG93biA9ICgpID0+IHtcbiAgICBjb25zdCBwcm9qZWN0QW5jaG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Byb2plY3QnKTtcbiAgICBjb25zdCBhbGxQcm9qZWN0cyA9IE9iamVjdC5rZXlzKHByb2plY3RzKVxuICAgIHdoaWxlIChwcm9qZWN0QW5jaG9yLmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgcHJvamVjdEFuY2hvci5yZW1vdmVDaGlsZChwcm9qZWN0QW5jaG9yLmZpcnN0Q2hpbGQpXG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYWxsUHJvamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGV0IG5ld1Byb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICBuZXdQcm9qZWN0LnRleHRDb250ZW50ID0gYWxsUHJvamVjdHNbaV1cbiAgICAgICAgcHJvamVjdEFuY2hvci5hcHBlbmRDaGlsZChuZXdQcm9qZWN0KVxuICAgIH1cbn1cblxuY29uc3QgZGVsZXRlVG9kbyA9ICgpID0+IHtcblxufVxuXG5mdW5jdGlvbiBkb21BZGRDYXJkKHNlbGVjdGVkKSB7XG4gICAgc2VsZWN0ZWQuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgICAgIHJldHVybiBhLnRpdGxlLmxvY2FsZUNvbXBhcmUoYi50aXRsZSlcbiAgICB9KVxuXG4gICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FuY2hvcicpXG4gICAgd2hpbGUgKGFuY2hvci5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgICAgYW5jaG9yLnJlbW92ZUNoaWxkKGFuY2hvci5maXJzdENoaWxkKVxuICAgIH1cblxuICAgIGxldCBudW1iZXJPZlByb2plY3RzID0gc2VsZWN0ZWQubGVuZ3RoXG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mUHJvamVjdHM7IGkrKykge1xuXG4gICAgICAgIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY2FyZC5jbGFzc0xpc3QuYWRkKCdjYXJkJyk7XG4gICAgICAgIGFuY2hvci5hcHBlbmRDaGlsZChjYXJkKTtcblxuICAgICAgICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0aXRsZS5jbGFzc0xpc3QuYWRkKCd0aXRsZScpO1xuICAgICAgICB0aXRsZS50ZXh0Q29udGVudCA9IHNlbGVjdGVkW2ldLnRpdGxlO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkZXNjcmlwdGlvbi5jbGFzc0xpc3QuYWRkKCdkZXNjcmlwdGlvbicpO1xuICAgICAgICBkZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IHNlbGVjdGVkW2ldLmRlc2NyaXB0aW9uO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgICAgICBjb25zdCBkdWVEYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGR1ZURhdGUudGV4dENvbnRlbnQgPSBzZWxlY3RlZFtpXS5kdWVEYXRlO1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKGR1ZURhdGUpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHNlbGVjdGVkW2ldLnByb2plY3Q7XG4gICAgICAgIGNhcmQuYXBwZW5kQ2hpbGQocHJvamVjdCk7XG5cbiAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgcHJvamVjdC50ZXh0Q29udGVudCA9IHNlbGVjdGVkW2ldLnByaW9yaXR5O1xuICAgICAgICBjYXJkLmFwcGVuZENoaWxkKHByaW9yaXR5KTtcblxuICAgICAgICBjb25zdCBkZWxldGVUb2RvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbGV0ZVRvZG8uY2xhc3NMaXN0LmFkZCgnZGVsZXRlJyk7XG4gICAgICAgIGRlbGV0ZVRvZG8udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgY2FyZC5hcHBlbmRDaGlsZChkZWxldGVUb2RvKTtcbiAgICB9XG59XG5cbmFkZFRvRG8oKVxuYWRkUHJvamVjdCgpXG5zaG93UHJvamVjdHNPblNpZGViYXIoKVxuc2hvd0FsbFByb2plY3RzT25Xb3Jrc3BhY2UoKVxucHJvamVjdHNPbldvcmtzcGFjZSgpXG5cblxuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=