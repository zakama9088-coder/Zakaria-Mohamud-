

//  To do list manager
const taskInput = document.querySelector('#todo-List');
const addBtn = document.querySelector('.addBtn');
const tasksContainor = document.querySelector('.tasks-con');

    taskInput.addEventListener('keydown', e => {
        if(e.key === 'Enter'){
            addBtn.click()
        }
    })
    
        
    function createElements(task){
        const taskRow = document.createElement('div');
        taskRow.className = 'row'
        const par = document.createElement('p');
        par.textContent = task.text;
        taskRow.appendChild(par);

        if (task.complete) {         
            par.style.textDecoration = 'line-through';
            par.style.color = 'darkgray';
        }
    
        const buttonsCon = document.createElement('div');
        buttonsCon.className = 'button';

        const completeIcon = document.createElement('i');
        completeIcon.className = 'fa-solid fa-check'
        buttonsCon.appendChild(completeIcon);

        const deleteIcon  = document.createElement('i');
        deleteIcon.className = 'fa-solid fa-trash-can'
        buttonsCon.appendChild(deleteIcon);       

        taskRow.appendChild(buttonsCon);
        tasksContainor.appendChild(taskRow);

        taskInput.value = ''

        deleteIcon.addEventListener('click', () => {
            const index = tasks.indexOf(task);   

            if (index > -1) tasks.splice(index, 1);

            localStorage.setItem('Task', JSON.stringify(tasks));
            taskRow.remove();
        });

        completeIcon.addEventListener('click', () => {
            task.complete = !task.complete;
            par.style.textDecoration = task.complete ? 'line-through' : 'none';
            par.style.color = task.complete ? 'darkgray' : '';

            localStorage.setItem('Task', JSON.stringify(tasks));
        });

        
    }

    let tasks = JSON.parse(localStorage.getItem('Task')) || [];

    addBtn.addEventListener('click', e => {
        if(taskInput.value.trim() === '') return
        const task  = {text: taskInput.value, complete:false}
        tasks.push(task);
        localStorage.setItem('Task', JSON.stringify(tasks))
        createElements(task)
        taskInput.value = ''
    });

    tasks.forEach(task => {
        createElements(task)
    });


    

 