import { domAddCard } from "./dom-add-card"

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
    window.addEventListener('click', (e) => {
        if (e.target.nodeName === 'BUTTON' && e.target.className === 'delete') {
            const todoId = e.target.parentNode.childNodes[0].innerText
            const todoProject = e.target.parentNode.childNodes[4].innerText
            const todoIndex = projects[todoProject].findIndex(todo => todo.idTodo == todoId)
            projects[todoProject].splice(todoIndex, 1)
            domAddCard(projects[todoProject])
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



