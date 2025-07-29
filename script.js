const FormTarea = document.getElementById("formTarea");
const TablaTareas = document.getElementById("listaTareas");
const InputTexto = document.getElementById("inputTarea");

let tareas = JSON.parse(localStorage.getItem("tareas")) || [];

function SaveTareas() {
    localStorage.setItem("tareas", JSON.stringify(tareas));
}

function AggTarea(textTarea) {
    const nuevaTarea = {
        texto: textTarea,
        completado: false
    };
    tareas.push(nuevaTarea);
    SaveTareas();
    HacerLista();
}

function CrearTarea(tarea, index) {
    const li = document.createElement("li");
    li.className = "flex justify-between items-center p-2 bg-white rounded shadow mb-2";

    const span = document.createElement("span");
    span.className = "text-gray-800";
    span.textContent = tarea.texto;

    if (tarea.completado) {
        span.classList.add("line-through", "text-green-500");
    }

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = tarea.completado;

    checkbox.addEventListener("click", () => {
        tarea.completado = checkbox.checked;
        SaveTareas();
        span.classList.toggle("line-through");
        span.classList.toggle("text-green-500");
    });

    const btnEliminar = document.createElement("button");
    btnEliminar.className = "text-red-500 hover:text-red-700";
    btnEliminar.textContent = "Eliminar";

    btnEliminar.addEventListener("click", () => {
        DelTarea(index);
    });

    li.appendChild(span);
    li.appendChild(checkbox);
    li.appendChild(btnEliminar);
    TablaTareas.appendChild(li);
}

function DelTarea(index) {
    tareas.splice(index, 1); 
    SaveTareas();
    HacerLista();
}

FormTarea.addEventListener("submit", (event) => {
    event.preventDefault();
    const text = InputTexto.value.trim();
    if (text === "") return;

    AggTarea(text);
    InputTexto.value = "";
});

function HacerLista() {
    TablaTareas.innerHTML = "";
    tareas.forEach((tarea, index) => {
        CrearTarea(tarea, index);
    });
}

HacerLista();
