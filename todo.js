
var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editIndex = null;
function saveTask() {
    let input = document.querySelector("#inputText").value;
    tasks.push(input);
    if (input) {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        document.querySelector("#inputText").value = "";
        showTask();
    }
}

function showTask() {
    const taskList = document.querySelector("#taskList");
    taskList.innerHTML = "";
    tasks.forEach((element, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<p>${index + 1
            }</p>${element}<div><button onclick="deleteTask(${index})">Delete</button> <button onclick="EditTask(${index})">Edit</button></div>`;
        taskList.appendChild(li);
    });
}

function deleteTask(index) {
    tasks.splice(index, 1);
    localStorage.setItem("tasks", JSON.stringify(tasks));
    showTask();
}

function EditTask(index) {
    document.querySelector("#inputText").value = tasks[index];
    document.querySelector("#add").style.display = "none";
    document.querySelector("#update").style.display = "block";
    editIndex = index;

    document.querySelector("#update").addEventListener('click', () => {
        if(editIndex !== null){

        tasks[editIndex] = document.querySelector("#inputText").value;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        document.querySelector("#add").style.display = "block";
        document.querySelector("#update").style.display = "none";
        document.querySelector("#inputText").value ="";
        editIndex = null;
        showTask();
        }
       
    })

}



showTask();