function guardar()
{
    var x = document.getElementById("formulario");
    var text = "{";
    var i;
    for (i = 0; i < x.length ;i++) {
        text += '"' + x.elements[i].id + '"' + ":" + '"' + x.elements[i].value +'"' + ',' + "<br>";
    }
    text += "}"
    document.getElementById("demo").innerHTML = text;

}

var datos = {"Apellido":"Ingresa tu apellido",
"Nombre":"Ingresa tu nombre",
"Sexo":"Masculino",
"FechaDeNacimiento":"1995-01-16",
"Nacionalidad":"AR",
"Residencia":"Ingresa tu domicilio, piso, dpto y zona",
"Telefono":"Ingresa tu numero telefonico",
"Email":"Ingresa tu correo electrónico",
"EstadoCivil":"SOLTERO",
"DNI":"Ingresa tu DNI",
"CUIL":"Ingresa tu CUIL",
"InstitutoGraduado":"INGRESA DONDE TE GRADUASTE",
"NivelGraduado":"SECUNDARIO",
"AnioEgresoGraduado":"2010",
"InstitutoEnCurso":"INGRESA DONDE ESTUDIAS",
"CarreraEnCurso":"INGRESA TU CARRERA",
"FechaInicioEnCurso":"1995-01-16",
"MateriasAprobadasEnCurso":"0",
"MateriasTotalesEnCurso":"0",
"NivelCharlaIngles":"BASICO",
"NivelEYLIngles":"BASICO",
"Informatica":"INGRESA COSAS QUE SEPAS DE INFORMATICA SEPARADO POR COMAS",
"FechaInicioTrabajo1":"1995-01-16",
"FechaFinTrabajo1":"1995-01-16",
"CARGOTRABAJO1":"CARGO DE TU PRIMER TRABAJO",
"LUGARTRABAJO1":"LUGAR DE TU PRIMER TRABAJO",
"FechaInicioTrabajo2":"1995-01-16",
"FechaFinTrabajo2":"1995-01-16",
"CARGOTRABAJO2":"CARGO DE TU SEGUNDO TRABAJO",
"LUGARTRABAJO2":"LUGAR DE TU SEGUNDO TRABAJO",
"FechaInicioTrabajo3":"1995-01-16",
"FechaFinTrabajo3":"1995-01-16",
"CARGOTRABAJO3":"CARGO DE TU TERCER TRABAJO",
"LUGARTRABAJO3":"LUGAR DE TU TERCER TRABAJO",
"AcercaDe":" CHAMUYA UN POCO DE VOS",
"DisponiblidadHoraria":"PART",
"HorarioDesde":"8",
"HorarioHasta":"18"}
