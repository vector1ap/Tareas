let process = require("process") 

let moduloTareas = require("./tareas")

let comando = process.argv[2];

switch(comando){
    case "listar":
        let tareas = moduloTareas.leerJSON()
        console.log("AQUI TU LISTA DE TAREAS!!!")
        for(let i=0; i < tareas.length ; i ++){
            console.log(tareas[i].titulo)
        }
        break;
    case "agregar":
        let nuevoTitulo = process.argv[3];
        let nuevoEstado = process.argv[4];
        moduloTareas.escribirJSON(nuevoTitulo, nuevoEstado);
        console.log(moduloTareas.leerJSON())
        break;
    case  "buscar":
        let titulo = process.argv[3]
        moduloTareas.buscar(titulo)
        break;

}