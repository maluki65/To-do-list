const text =  document.getElementById("textIn");
const AddTaskbtn = document.getElementById('submitbtn');
const taskList = document.querySelector('.output ul');

const AddTask = ()=>{
    AddTaskbtn.addEventListener('click', function(e){
        e.preventDefault();
        const inputValue = text.value.trim();
        if (inputValue === '' ){
            alert("Enter a value")
        } else { 

            // On creating a <li> element
            const li = document.createElement('li');
            li.textContent = inputValue;

            const completebtn = document.createElement('button')
            completebtn.textContent = 'Complete';
            completebtn.classList.add('complete');
            //On marking a task as complete
            const markAsComplete = () =>{
                completebtn.addEventListener('click', function(e){
                    e.preventDefault();
                    li.classList.add('done');
                })
            }
            markAsComplete();

            const delbtn = document.createElement('button')
            delbtn.textContent = 'Delete';
            completebtn.classList.add('deletetask');
            // On deleting a task
            const deleteTask = () => {
                delbtn.addEventListener('click', function(e){
                    e.preventDefault();
                    li.remove();
                })
            } 
            deleteTask();

            // On appending buttons to <li>
            li.appendChild(completebtn);
            li.appendChild(delbtn);

            // On appending li to ul
            taskList.appendChild(li);

            text.value = ''
        }
    });
}

AddTask();