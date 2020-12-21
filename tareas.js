let fs = require("fs");

module.exports = moduloTareas = {
    archivo : "./tareas.json",
    leerJSON : function leer (){
        let listaDeTareas = fs.readFileSync(this.archivo, "utf-8")
        return JSON.parse(listaDeTareas)
    },
    escribirJSON : function(titulo, estado){
        let nuevaTarea = {
            titulo : titulo,
            estado : estado,
        }

        let tareasAnteriores = this.leerJSON();

        tareasAnteriores.push(nuevaTarea);
        this.guardarJSON(tareasAnteriores)
        
    },
    guardarJSON : function(info){
        let nuevoJSON = JSON.stringify(info);
        fs.writeFileSync(this.archivo,nuevoJSON, "utf-8")
    },
    buscar: function(cosa){
        let booleano = false;
        let tareas = this.leerJSON()
        for (let i = 0; i< tareas.length; i++){
            if (tareas[i].titulo == cosa){
                booleano = true;
                if(booleano== true){
                    console.log("Esta es su tarea:")
                    console.log(tareas[i].titulo +" "+ tareas[i].estado)
                }
            }    
        }
        if(booleano == false){
            console.log("No se encuentra la tarea");
        }
       
    }

}
