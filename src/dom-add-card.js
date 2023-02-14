export function domAddCard(selected) {
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