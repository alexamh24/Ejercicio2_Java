document .addEventListener("DOMContentLoaded", () => {
    const formu = document.getElementById("miForm");
    const result = document.getElementById("result");
    const inf = document.getElementById("inf");
    const cerrarBttn = document.getElementById("cerrar");

    formu.addEventListener("submit", (e) => {
        e.preventDefault();
        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        const edad = parseInt(document.getElementById("edad").value.trim());

        if (nombre === "" || apellidos === ""){
            alert(" 🌸Por favor, llena los campos obligatorios🌸");
            return;
        }
        if (isNaN(edad) || edad <= 0){
            alert(" 😿Debe ser mayor a 0 😿 ");
            return;
        }

        inf.innerHTML = `
        <br><strong> NOMBRE(S): </strong> ${nombre}<br><br>
        <strong> APELLIDO(S): </strong> ${apellidos}<br><br>
        <strong> EDAD: </strong> ${edad} años
        `;
        result.style.display= "block";
    });

    cerrarBttn.addEventListener("click", () => {
        result.style.display ="none";
        formu.reset();
        document.getElementById("nombre").focus();
    });
});