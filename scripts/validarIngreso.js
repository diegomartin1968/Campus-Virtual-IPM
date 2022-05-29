function validacion() {
    let contador=0
    const constusuario=document.getElementById("usuario").value;
    if (constusuario.length == 0) {
       alert ("ERROR Ingresar Nombre de Usuario");}
    else {
        contador +=1; 
    } 
    const constclave=document.getElementById("clave").value;
    if (constclave.length == 0 || constclave.length<6) {
       alert ("ERROR Ingresar Clave de Acceso válida");
    }
    else {
        contador +=1; 
    } 
    if (contador == 2) {
        window.open("personal.html");}
    else {
            return;
    }
}