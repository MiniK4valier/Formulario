function validar() {
    var retorno_correo = validar_correo();
    var retorno_contraseña = validar_contraseña();
    var retorno_direccion = validar_direccion();
    var retorno_comuna = validar_comuna();
    var retorno_telefono = validar_telefono();
    var retorno_url = validar_url();
    var retorno_intereses = validar_intereses();
    return retorno_correo && retorno_contraseña && retorno_direccion && retorno_comuna && retorno_telefono && retorno_url && retorno_intereses;
}

//_______________________________________________________________________________________________________________________________

function validar_correo() {
    var correo = document.getElementById("input-correo").value;
    var div_error_correo = document.getElementById("error-correo");
    div_error_correo.textContent = "";
    if (!correo.includes("@") || correo.indexOf("@") === 0 || correo.indexOf("@") === correo.length - 1) {
        div_error_correo.textContent = "Por favor, ingrese un correo válido.";
        return false;
    }
    var dominio = correo.split("@")[1];
    if (!dominio || dominio.indexOf(".") === -1 || dominio.indexOf(".") === 0 || dominio.indexOf(".") === dominio.length - 1) {
        div_error_correo.textContent = "Por favor, ingrese un correo válido.";
        return false;
    }
    return true;
}

//_______________________________________________________________________________________________________________________________

function validar_contraseña() {
    var contraseña = document.getElementById("input-contraseña").value;
    var confirmacion = document.getElementById("input-confirmacion").value;
    var div_error_contraseña = document.getElementById("error-contraseña");
    var div_error_confirmacion = document.getElementById("error-confirmacion");
    div_error_contraseña.textContent = "";
    div_error_confirmacion.textContent = "";
    if (contraseña.length < 3 || contraseña.length > 6) {
        div_error_contraseña.textContent = "La contraseña debe tener entre 3 y 6 caracteres.";
        return false;
    }
    var tiene_letra = false;
    var tiene_digito = false;
    for (var i = 0; i < contraseña.length; i++) {
        var char = contraseña.charAt(i);
        if (isNaN(char)) {
            tiene_letra = true;
        } else {
            tiene_digito = true;
        }
    }
    if (!tiene_letra || !tiene_digito) {
        div_error_contraseña.textContent = "La contraseña debe contener al menos una letra y un dígito";
        return false;
    }
    if (contraseña !== confirmacion) {
        div_error_confirmacion.textContent = "Las contraseñas no coinciden.";
        return false;
    }
    return true;
}

//_______________________________________________________________________________________________________________________________

function validar_direccion() {
    var input_direccion = document.getElementById("input-direccion");
    var div_error_direccion = document.getElementById("error-direccion");
    var direccion = input_direccion.value;
    div_error_direccion.textContent = "";
    if (direccion == "") {
        div_error_direccion.textContent = "Por favor, ingrese una dirección";
        return false
    } else if (direccion.length < 3) {
        div_error_direccion.textContent = "Por favor, ingrese una dirección válida";
        return false
    } else {
        div_error_direccion.textContent = "";
        return true
    }
}

function validar_comuna() {
    var select_comuna = document.getElementById("select-comuna");
    var div_error_comuna = document.getElementById("error-comuna");
    var comuna = select_comuna.value;
    if (comuna == "comuna_invalida") {
        div_error_comuna.textContent = "Debe seleccionar una comuna";
        return false;
    } else {
        div_error_comuna.textContent = "";
        return true;
    }
}

//_______________________________________________________________________________________________________________________________

function validar_telefono() {
    var input_telefono = document.getElementById("input-telefono");
    var div_error_telefono = document.getElementById("error-telefono");
    var telefono = input_telefono.value;
    div_error_telefono.textContent = "";
    if (telefono == "") {
        div_error_telefono.textContent = "Por favor ingrese un numero de teléfono";
        return false;
    } else if (isNaN(telefono.slice(1))) {
        div_error_telefono.textContent = "Por favor ingrese un numero de telefono válido (números)";
        return false;
    } else if (!telefono.startsWith("+")) {
        div_error_telefono.textContent = "El número de telefono debe comenzar con + ";
        return false;
    } else if (telefono.length > 16 || telefono.length < 12) { 
        div_error_telefono.textContent = "El número de teléfono debe tener entre 12 y 15 dígitos, incluyendo el '+' (se cuentan espacios)";
        return false;
    } else {
        div_error_telefono.textContent = "";
        return true;
    }
}

//_______________________________________________________________________________________________________________________________

function validar_url() {
    var input_url = document.getElementById("input-url");
    var div_error_url = document.getElementById("error-url");
    var url = input_url.value;
    div_error_url.textContent = "";
    if (url == "") {
        div_error_url.textContent = "Por favor ingrese una URL";
        return false;
    } else if (!url.startsWith("http://") && !url.startsWith("https://")) {
        div_error_url.textContent = "La URL debe comenzar con http:// o https://";
        return false;
    }
    var partes = url.split("://");
    if (partes.length < 2) {
        div_error_url.textContent = "Despues del :// debe colocar al menos más de 1 carácter";
        return false;
    }
    var dominio = partes[1].split("/")[0];
    var partes_dominio = dominio.split(".");
    if (partes_dominio.length < 2) {
        div_error_url.textContent = "El dominio debe estar bien formado (debe incluir un punto y al menos mas de 1 carácter antes del punto)";
        return false;
    }
    var despues_punto = partes_dominio[partes_dominio.length - 1]; 
    if (despues_punto.length < 2) {
        div_error_url.textContent = "Despues del punto debe colocar al menos más de 1 carácter";
        return false;
    }
    div_error_url.textContent = "";
    return true;
}

//_______________________________________________________________________________________________________________________________

function validar_intereses() {
    var intereses = document.getElementById("input-intereses").value.split(",");
    var div_errorIntereses = document.getElementById("error-intereses");
    if (intereses.length < 2) {
        div_errorIntereses.textContent = "Debe ingresar al menos 2 intereses separados por comas";
        return false;
    }
    div_errorIntereses.textContent = '';
    return true;
}