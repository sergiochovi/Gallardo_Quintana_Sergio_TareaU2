
// Linkeo hacia las 'id' del index.html
const urlTexto = window.location.search;
const urlParametro = new URLSearchParams(urlTexto);
const parametro = urlParametro.get('id');

// Devuelve el elemento que hay pasado por parametro (querySelector)
const resultado = document.querySelector('.salir');
const enunciado = document.querySelector('.principal');
const titulo = document.querySelector('.titulo');
switch (parametro) {
    case 'calculaIMC':
        // Definiciones de variables
        let altura = 0;
        let peso = 0;
        let imc = 0;
        // Mensajes
        let mensajeAltura = 'Introduce tu altura en centímetros';
        let mensajePeso = 'Introduce tu peso en kilogramos';
        // Titulo
        titulo.innerHTML = `Tabla de índice de masa corporal`;
        // Enunciado ejercicio (contenedor azul)
        let enunciadoIMC = `<ul class="opcion"> <li class="op1"> &lt; 16.00: Infrapeso (delgadez severa)</li>
        <li class="op2"> 16.00 – 16.99: Infrapeso (delgadez moderada)</li>
        <li class="op3"> 17.00 - 18.49: Infrapeso (delgadez aceptable)</li>
        <li class="op4"> 18.50 - 24.99: Peso normal</li>
        <li class="op5"> 25.00 - 29.99: Sobrepeso</li>
        <li class="op6"> 30.00 - 34.99: Obeso (Tipo I)</li>
        <li class="op7"> 35.00 - 40.00: Obeso (Tipo II)</li>
        <li class="op8"> &gt; 40.00: Obeso (Tipo III)</li></ul>`;
        // Cojo el enunciado 'enunciadoIMC' para ponerlo dentro del contenedor azul
        enunciado.innerHTML = enunciadoIMC;
        // Opciones para el switch
        var opciones = enunciado.querySelector('.opcion');
        // Comprobaciones
        // Altura menor igual 0 y peso | Si altura no es de tipo entero ,si el peso es un numero
        while ((altura <= 0 && peso <= 0) || (!Number.isInteger(altura) || isNaN(peso))) {
            // Saco el prompt de los 2.
            altura = Number.parseInt(prompt(mensajeAltura));
            peso = Number.parseFloat(prompt(mensajePeso));
            // Comprobaciones
            switch (true) {
                // Si altura menor igual 0 | Si altura no es de tipo entero
                case (altura <= 0 || !Number.isInteger(altura)):
                    mensajeAltura = 'ERROR. Introduce un número mayor que 0.';
                    // Si el peso no es un numero
                    if (isNaN(peso)) {
                        mensajePeso = 'ERROR. Introduce un número mayor que 0.';
                    }
                    break;
                // Si peso menor igual 0, si el peso no es un numero
                case (peso <= 0 || isNaN(peso)):
                    mensajePeso = 'ERROR. Introduce un número mayor que 0.';
                    break;
                // Caso correcto.
                case (altura > 0 && peso > 0):
                    imc = peso / Math.pow((altura / 100), 2);
                    // Incluir mensaje IMC e incluirles 2 decimales
                    resultado.innerHTML = `<p>Su IMC: ${imc.toFixed(2)}</p>`;
                    break;
                default:
                    break;
            }
        }
        // Colocar bordes en div principal
        switch (true) {
            // Primer rango
            case (imc < 16.00):
                var op1 = opciones.querySelector('.op1');
                op1.classList.add('negrita');
                break;
            // Segundo rango
            case (imc >= 16.00 && imc < 16.99):
                var op2 = opciones.querySelector('.op2');
                op2.classList.add('negrita');
                break;
            // Tercer rango
            case (imc >= 17.00 && imc < 18.49):
                var op3 = opciones.querySelector('.op3');
                op3.classList.add("negrita");
                break;
            // Cuarto rango
            case (imc >= 18.50 && imc < 24.99):
                var op4 = opciones.querySelector('.op4');
                op4.classList.add('negrita');
                break;
            // Quinto rango
            case (imc >= 25.00 && imc < 29.99):
                var op5 = opciones.querySelector('.op5');
                op5.classList.add('negrita');
                break;
            // Sexto rango
            case (imc >= 30.00 && imc < 34.99):
                var op6 = opciones.querySelector('.op6');
                op6.classList.add('negrita');
                break;
            // Septimo rango
            case (imc >= 35.00 && imc <= 40.00):
                var op7 = opciones.querySelector('.op7');
                op7.classList.add('negrita');
                break;
            // Octavo rango
            case (imc > 40.00):
                var op8 = opciones.querySelector('.op8');
                op8.classList.add('negrita');
                break;
            default:
                break;
        }
        break;
    case 'calculaFMC':
        // Variables
        let edad = 0;
        let sexo = '';
        let fmc = 0;
        let frecuCardiaca = 0;
        let fmcCalculo = 0;
        // Mensajes
        let mensajeEdad = 'Introduce tu edad.';
        let mensajeSexo = 'Introduce tu sexo Hombre (h) o Mujer (m)';
        let mensajeFC = 'Introduce tu frecuencia cardiaca.';
        // Titulo
        titulo.innerHTML = `Tabla de frecuencia cardiaca máxima`;
        // Enunciado Ejemplo
        let calculaFMC = `  <ul class="opcion"> 
        <li class="op1"> Zona de reposo (&lt;60%)</li>
        <li class="op2"> Zona de recuperación (60%-70%)</li>
        <li class="op3"> Zona aeróbica (70%-80%)</li>
        <li class="op4"> Zona anaeróbica (80%-90%)</li>
        <li class="op5"> Línea roja (>90%)</li></ul>`;
        // Sacar enunciado
        enunciado.innerHTML = calculaFMC;
        // Opciones para el switch
        var opcion = enunciado.querySelector('.opcion');
        // Comprobaciones
        // Variable para comprobar casos
        var existe = false;
        // Si existe
        while (!existe) {
            // Valores por prompt
            edad = Number.parseInt(prompt(mensajeEdad));
            sexo = prompt(mensajeSexo);
            // Comprobacion de errores en minuscula
            if (sexo == null) {
                mensajeSexo = 'ERROR. Introduce tu sexo solo "h" o "m"';
                // Que te lo vuelva a sacar en minusculas para comprobaciones
            } else {
                sexo.toLowerCase();
            }
            // Prompt para frecuencia cardiaca
            frecuCardiaca = Number.parseInt(prompt(mensajeFC));
            // Variable para calcular frecuencia cardiaca - edad
            fmcCalculo = frecuCardiaca - edad;
            // Comprobaciones para frecuencias cardiacas
            switch (true) {
                // Comprobacion error: Si edad menor que 0 y no es entero
                case (edad <= 0 || !Number.isInteger(edad)):
                    mensajeEdad = 'ERROR. Introduce una edad válida.';
                    // Comprobacion error: Si frecuenciaCardiaca menor 0 y no es entero
                    if (frecuCardiaca <= 0 || !Number.isInteger(frecuCardiaca)) {
                        mensajeFC = 'ERROR. Introduce una frecuencia válida.';
                    }
                    break;
                // Caso hombre 
                case sexo == 'h':
                    // Variable que cree por si existe
                    existe = true;
                    // Formula variable estandar
                    fmc = 220 - edad;
                    // Caso del 60%
                    if (fmcCalculo < (fmc * 0.6)) {
                        var op1 = opcion.querySelector('.op1');
                        // Añadir id del css al js.
                        op1.classList.add('negrita');
                        // Caso del 60% y el 70%
                    } else if (fmcCalculo >= (fmc * 0.6) && fmcCalculo < (fmc * 0.7)) {
                        //Opcion del li
                        var op2 = opcion.querySelector('.op2');
                        // Añadir id del css al js.
                        op2.classList.add('negrita');
                        // Casos del 70% y 80%
                    } else if (fmcCalculo >= (fmc * 0.7) && fmcCalculo < (fmc * 0.8)) {
                        //Opcion del li
                        var op3 = opcion.querySelector('.op3');
                        // Añadir id del css al js.
                        op3.classList.add('negrita');
                        // Caso del 80% y 90%
                    } else if (fmcCalculo >= (fmc * 0.8) && fmcCalculo < (fmc * 0.9)) {
                        //Opcion del li
                        var op4 = opcion.querySelector('.op4');
                        // Añadir id del css al js.
                        op4.classList.add('negrita');
                        // Casos mayores del 90%
                    } else if (fmcCalculo >= (fmc * 0.9)) {
                        //Opcion del li
                        var op5 = opcion.querySelector('.op5');
                        // Añadir id del css al js.
                        op5.classList.add('negrita');

                    }
                    break;
                // Caso mujer
                case sexo == 'm':
                    // Caso true
                    existe = true;
                    // Variable estandar
                    fmc = 225 - edad;
                    // Caso 60%
                    if (fmcCalculo < (fmc * 0.6)) {
                        // Opcion del li
                        var op1 = opcion.querySelector('.op1');
                        // Añadir id del css al js.
                        op1.classList.add('negrita');
                        // Caso 60% y 70%
                    } else if (fmcCalculo >= (fmc * 0.6) && fmcCalculo < (fmc * 0.7)) {
                        // Opcion del li
                        var op2 = opcion.querySelector('.op2');
                        // Añadir id del css al js.
                        op2.classList.add('negrita');
                        // Caso 70% y 80%
                    } else if (fmcCalculo >= (fmc * 0.7) && fmcCalculo < (fmc * 0.8)) {
                        // Opcion del li
                        var op3 = opcion.querySelector('.op3');
                        // Añadir id del css al js.
                        op3.classList.add('negrita');
                        // Caso del 80% y 90%
                    } else if (fmcCalculo >= (fmc * 0.8) && fmcCalculo < (fmc * 0.9)) {
                        // Opcion del li
                        var op4 = opcion.querySelector('.op4');
                        // Añadir id del css al js.
                        op4.classList.add('negrita');
                        // Casos mayores 90%
                    } else if (fmcCalculo >= (fmc * 0.9)) {
                        // Opcion del li
                        var op5 = opcion.querySelector('.op5');
                        // Añadir id del css al js.
                        op5.classList.add('negrita');
                    }
                    break;
                // Caso error
                default:
                    // Si no son ni 'h' ni 'm' + mensaje de error.
                    if ((sexo != 'h' || sexo != 'm')) {
                        mensajeSexo = 'ERROR. Introduce tu sexo solo "h" o "m"';
                    }
                    break;
            }
        }
        // Mostrar resultado  contenedor verde.
        resultado.innerHTML = `<p>Su FMC: ${fmcCalculo}</p>`;
        break;
    // Caso Calcular la categoría
    case 'calculaCategoria':

        // Variables
        let nacimiento = 0;
        let mensajeNacimiento = 'Introduce tu año de nacimiento';
        // Devuelve el año de la fecha especificada según la hora local.
        let actual = new Date().getFullYear();
        let edadActual = 0;
        // Enunciado
        titulo.innerHTML = `Tabla de Categoría`;
        let enunciadoCategoria = `<ul class="opciones"> <li class="op1"> Prebenjamín. Hasta 7 años.</li>
        <li class="op2"> Benjamín. 8-9 años.</li>
        <li class="op3"> Alevín. 10-11 años.</li>
        <li class="op4"> Infantil. 12-13 años.</li>
        <li class="op5"> Cadete. 14-15 años</li>
        <li class="op6"> Junior. 16-19 años.</li>
        <li class="op7">Senior. Más de 19 años.</li></ul>`;
        // Mostrar enunciado div contenedor azul
        enunciado.innerHTML = enunciadoCategoria;
        // Variable para las opciones
        var opcion = document.querySelector('.opciones');
        // Comprobaciones
        // Mientras nacimiento
        while (nacimiento < (actual - 100) || !Number.isInteger(nacimiento)) {
            nacimiento = Number.parseInt(prompt(mensajeNacimiento));
            edadActual = actual - nacimiento;
            switch (true) {
                // CASOS DE CATEGORIAS
                // Comprobar que no tiene mas de 100 años o el nacimiento no sea entero
                case (nacimiento < (actual - 100) || !Number.isInteger(nacimiento)):
                    mensajeNacimiento = 'ERROR. Introduce un año válido.';
                    break;
                // Si la edad actual es menor o igual a 7
                case (edadActual <= 7):
                    resultado.innerHTML = `SU CATEGORIA ES: PREBENJAMIN`;
                    // Opción del li
                    var op1 = opcion.querySelector('.op1');
                    // Añadir id del css al js.
                    op1.classList.add('negrita');
                    break;
                // Si la edad actual menor de 7 años y menor o igual a 9
                case (edadActual > 7 && edadActual <= 9):
                    resultado.innerHTML = `SU CATEGORIA ES: BENJAMIN`;
                    // Opción del li
                    var op2 = opcion.querySelector('.op2');
                    // Añadir id del css al js(poner el cuadro de color)
                    op2.classList.add('negrita');
                    break;
                // Si la edad mayor de 9 y menor o igual a 11
                case (edadActual > 9 && edadActual <= 11):
                    resultado.innerHTML = `SU CATEGORIA ES: ALEVIN`;
                    // Opción li
                    var op3 = opcion.querySelector('.op3');
                    // Añadir cuadro , coger id del css y pasar al js
                    op3.classList.add('negrita');
                    break;
                // Si es mayor de 11 y menor o igual a 13
                case (edadActual > 11 && edadActual <= 13):
                    resultado.innerHTML = `SU CATEGORIA ES: INFANTIL`;
                    // Opción del li
                    var op4 = opcion.querySelector('.op4');
                    // Añadir cuadro , coger id del css y pasar al js
                    op4.classList.add('negrita');
                    break;
                    // Si la edad actual mayor a 13 y menor o igual a 15
                case (edadActual > 13 && edadActual <= 15):
                    resultado.innerHTML = `SU CATEGORIA ES: CADETE`;
                    // Opción del li
                    var op5 = opcion.querySelector('.op5');
                    // Añadir cuadro , coger id del css y pasar al js
                    op5.classList.add('negrita');
                    break;
                    // Si la edad actual mayor de 13 y menor igual a 19
                case (edadActual > 15 && edadActual <= 19):
                    resultado.innerHTML = `SU CATEGORIA ES: JUNIOR`;
                    // Opción del li
                    var op6 = opcion.querySelector('.op6');
                    // Añadir cuadro , coger id del css y pasar al js
                    op6.classList.add('negrita');
                    break;
                    // Si la edad actual es mayor a 19
                case (edadActual > 19):
                    resultado.innerHTML = `SU CATEGORIA ES: SENIOR`;
                    // Opción del li
                    var op7 = opcion.querySelector('.op7');
                    // Añadir cuadro , coger id del css y pasar al js
                    op7.classList.add('negrita');
                    break;
                default:
                    break;
            }
        }
        break;
    case 'mostrarHorario':

        break;

    default:
        break;
}