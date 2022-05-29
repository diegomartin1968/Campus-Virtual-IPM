document.addEventListener("DOMContentLoaded", function() {
document.getElementById("ingreso").addEventListener('submit', validacion); 
  });
  
function validacion(submit) {
    submit.preventDefault();
    var usuario=document.getElementById("usuario").value;
    if (usuario == null || usuario.length == 0 || /^\s+$/.test(usuario)) {
        alert ("ERROR Ingresar Nombre de Usuario");
        return;
    }
    var clave=document.getElementById("clave").value;
    if (clave == null || clave.length == 0 || /^\s+$/.test(clave) || clave.length<6) {
        alert (ERROR Ingresar Clave de Acceso válida);
        return;
    }
    this.submit
}