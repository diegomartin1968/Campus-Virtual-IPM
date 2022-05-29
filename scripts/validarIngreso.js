function validacion() {
    const usuario=document.getElementById("usuario").value;
    if (usuario.length == 0) {
       alert ("ERROR Ingresar Nombre de Usuario");
       return;
     }
     
    const clave=document.getElementById("clave").value;
     if (clave.length == 0 || clave.length<6) {
       alert ("ERROR Ingresar Clave de Acceso válida");
       return;
    }
    alert ("Hola")
    window.open("personal.html")};
