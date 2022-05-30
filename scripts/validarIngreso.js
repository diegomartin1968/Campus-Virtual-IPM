function validacion() {
    let contador=0
    const constusuario=document.getElementById("usuario").value;
    const constclave=document.getElementById("clave").value;
    if (constusuario.length == 0) {
        alert ("ERROR Ingresar Nombre de Usuario");}
     else {
         contador +=1; 
     } 
     if (constclave.length == 0) {
        alert ("ERROR Ingresar Clave de Acceso");}
     else {
         contador +=1; 
     } 
    
     if (contador == 2) {
        window.open("personal.html");}
    else {
            return;
    }
    }

