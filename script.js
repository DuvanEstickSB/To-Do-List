const Tarea = document.getElementById("formTarea");
const TablaTareas = document.getElementById("listaTareas");
const InputTexto = document.getElementById("inputTarea")

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function SaveTareas (){
    localStorage.setItem("tareas", JSON.stringify(tareas));
};

function AggTarea(textTarea) {
    const nuevaTarea = {
        texto: textTarea,
        completado: false
    };
    tareas.push(nuevaTarea);
    SaveTareas();
}

function DelTarea(textTarea){

}


