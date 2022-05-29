function validacion() {
    let contador=0
    const constapellido=document.getElementById("apellido").value;
    if (constapellido.length == 0) {
       alert ("ERROR Ingresar Apellido");}
    else {
        contador +=1; 
    } 
    const constnombre=document.getElementById("nombre").value;
    if (constnombre.length == 0 || constnombre.length<6) {
       alert ("ERROR Ingresar Nombre");
    }
    else {
        contador +=1; 
    } 
    const constconsulta=document.getElementById("consulta").value;
    if (constconsulta.length == 0) {
       alert ("ERROR Ingresar Consulta");
    }
    else {
        contador +=1; 
    } 
    
    if (contador == 3) {
        window.open("consulta.html");}
    else {
            return;
    }
}