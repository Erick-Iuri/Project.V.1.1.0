
let InputItem = document.getElementById('Tarefa-input');
let container = document.getElementById('Task-container');
let ButtomADD = document.getElementById('add-js');

ButtomADD.addEventListener("click", function() {
    let novatask = document.createElement('li');
    container.appendChild(novatask);
    novatask.innerText = InputItem.value;
    InputItem.value = "";
})