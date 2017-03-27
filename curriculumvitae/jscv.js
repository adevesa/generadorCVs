var datos = {"Apellido":"Devesa",
"Nombre":"Agustín",
"Sexo":"Masculino",
"FechaDeNacimiento":"1995-01-16",
"Nacionalidad":"AR",
"Domicilio":"Venezuela 833",
"Piso":"-1",
"Dpto":"-1",
"Zona":"CABA",
"CodigoArea":"11",
"Telefono":"1567964584",
"Email":"guchix.agustin@gmail.com",
"EstadoCivil":"Soltero",
"DNI":"38707815",
"CUIL":"20387078151",
"InstitutoGraduado":"ET 25 DE 6",
"NivelGraduado":"SECUNDARIO",
"AnioEgresoGraduado":"2013",
"TituloGraduado":"Técnico Electrónico",
"InstitutoEnCurso":"UTN FRBA",
"AnioCurso":"3",
"CarreraEnCurso":"Ingenieria en Sistemas",
"FechaInicioEnCurso":"2014-03-16",
"MateriasAprobadasEnCurso":"19",
"MateriasTotalesEnCurso":"43",
"NivelCharlaIngles":"Bilingüe",
"NivelEYLIngles":"Bilingüe",
"Informatica":"Windows, Chrome, Photoshop, Caca",
"FechaInicioTrabajo1":"1995-01-16",
"FechaFinTrabajo1":"1995-01-16",
"CARGOTRABAJO1":"CARGO DE TU PRIMER TRABAJO",
"LUGARTRABAJO1":"LUGAR DE TU PRIMER TRABAJO",
"REFERENCIATRABAJO1":"PEPE: 15343321231",
"FechaInicioTrabajo2":"1995-01-16",
"FechaFinTrabajo2":"1995-01-16",
"CARGOTRABAJO2":"CARGO DE TU SEGUNDO TRABAJO",
"LUGARTRABAJO2":"LUGAR DE TU SEGUNDO TRABAJO",
"REFERENCIATRABAJO2":"PEPA: 343321231",
"FechaInicioTrabajo3":"1995-01-16",
"FechaFinTrabajo3":"1995-01-16",
"CARGOTRABAJO3":"CARGO DE TU TERCER TRABAJO",
"LUGARTRABAJO3":"LUGAR DE TU TERCER TRABAJO",
"REFERENCIATRABAJO3":"PEPO: 13442341567",
"AcercaDe":" CHAMUYA UN POCO DE VOS",
"DisponiblidadHoraria":"Part-Time",
"HorarioDesde":"8",
"HorarioHasta":"18"}

document.getElementById("Apellido").innerHTML = datos.Apellido.toUpperCase();
document.getElementById("Nombre").innerHTML = datos.Nombre;
document.getElementById("FechaDeNacimiento").innerHTML = fecha_linda(datos.FechaDeNacimiento);
document.getElementById("EdadActual").innerHTML = calcularEdad(datos.FechaDeNacimiento);
document.getElementById("Nacionalidad").innerHTML = nacionalidad_linda(datos.Nacionalidad,datos.Sexo);
document.getElementById("Domicilio").innerHTML = datos.Domicilio;
document.getElementById("Piso").innerHTML = validar_piso(datos.Piso);
document.getElementById("Dpto").innerHTML = validar_dpto(datos.Dpto);
document.getElementById("Zona").innerHTML = datos.Zona;
document.getElementById("CodigoArea").innerHTML = datos.CodigoArea;
document.getElementById("Telefono").innerHTML = datos.Telefono;
document.getElementById("Email").innerHTML = datos.Email;
document.getElementById("EstadoCivil").innerHTML = estado_civil_lindo(datos.EstadoCivil,datos.Sexo);
document.getElementById("DNI").innerHTML = dni_lindo(datos.DNI);
document.getElementById("CUIL").innerHTML = cuil_lindo(datos.CUIL);

document.getElementById("InstitutoGraduado").innerHTML = datos.InstitutoGraduado;
document.getElementById("NivelGraduado").innerHTML = datos.NivelGraduado;
document.getElementById("TituloGraduado").innerHTML = datos.TituloGraduado;
document.getElementById("AnioEgresoGraduado").innerHTML = datos.AnioEgresoGraduado;
document.getElementById("CarreraEnCurso").innerHTML = datos.CarreraEnCurso;
document.getElementById("NivelGraduado").innerHTML = datos.NivelGraduado;
document.getElementById("AnioCurso").innerHTML = datos.AnioCurso;
document.getElementById("InstitutoEnCurso").innerHTML = datos.InstitutoEnCurso;
document.getElementById("MateriasAprobadasEnCurso").innerHTML = datos.MateriasAprobadasEnCurso;
document.getElementById("MateriasTotalesEnCurso").innerHTML = datos.MateriasTotalesEnCurso;
document.getElementById("FechaInicioEnCurso").innerHTML = mes_anio(datos.FechaInicioEnCurso);
document.getElementById("NivelCharlaIngles").innerHTML = datos.NivelCharlaIngles;
document.getElementById("NivelEYLIngles").innerHTML = datos.NivelEYLIngles;
document.getElementById("Informatica").innerHTML = datos.Informatica;

document.getElementById("FechaInicioTrabajo1").innerHTML = mes_anio(datos.FechaInicioTrabajo1);
document.getElementById("FechaFinTrabajo1").innerHTML = mes_anio(datos.FechaFinTrabajo1);
document.getElementById("CARGOTRABAJO1").innerHTML = datos.CARGOTRABAJO1;
document.getElementById("LUGARTRABAJO1").innerHTML = datos.LUGARTRABAJO1;
document.getElementById("REFERENCIATRABAJO1").innerHTML = check_referencia(datos.REFERENCIATRABAJO1);
document.getElementById("FechaInicioTrabajo2").innerHTML = mes_anio(datos.FechaInicioTrabajo2);
document.getElementById("FechaFinTrabajo2").innerHTML = mes_anio(datos.FechaFinTrabajo2);
document.getElementById("CARGOTRABAJO2").innerHTML = datos.CARGOTRABAJO2;
document.getElementById("LUGARTRABAJO2").innerHTML = datos.LUGARTRABAJO2;
document.getElementById("REFERENCIATRABAJO2").innerHTML = check_referencia(datos.REFERENCIATRABAJO2);
document.getElementById("FechaInicioTrabajo3").innerHTML = mes_anio(datos.FechaInicioTrabajo3);
document.getElementById("FechaFinTrabajo3").innerHTML = mes_anio(datos.FechaFinTrabajo3);
document.getElementById("CARGOTRABAJO3").innerHTML = datos.CARGOTRABAJO3;
document.getElementById("LUGARTRABAJO3").innerHTML = datos.LUGARTRABAJO3;
document.getElementById("REFERENCIATRABAJO3").innerHTML = check_referencia(datos.REFERENCIATRABAJO3);

document.getElementById("AcercaDe").innerHTML = datos.AcercaDe;

document.getElementById("DisponiblidadHoraria").innerHTML = datos.DisponiblidadHoraria;
document.getElementById("HorarioDesde").innerHTML = datos.HorarioDesde;
document.getElementById("HorarioHasta").innerHTML = datos.HorarioHasta;





function isValidDate(day,month,year)
{
    var dteDate;
    month=month-1;
    dteDate=new Date(year,month,day);
    return ((day==dteDate.getDate()) && (month==dteDate.getMonth()) && (year==dteDate.getFullYear()));
}

function validate_fecha(fecha)
{
    var patron=new RegExp("^(19|20)+([0-9]{2})([-])([0-9]{1,2})([-])([0-9]{1,2})$");
 
    if(fecha.search(patron)==0)
    {
        var values=fecha.split("-");
        if(isValidDate(values[2],values[1],values[0]))
        {
            return true;
        }
    }
    return false;
}

function calcularEdad(fechax)
{
    var fecha= fechax
    if(validate_fecha(fecha)==true)
    {
        // Si la fecha es correcta, calculamos la edad
        var values=fecha.split("-");
        var dia = values[2];
        var mes = values[1];
        var ano = values[0];
 
        // cogemos los valores actuales
        var fecha_hoy = new Date();
        var ahora_ano = fecha_hoy.getYear();
        var ahora_mes = fecha_hoy.getMonth()+1;
        var ahora_dia = fecha_hoy.getDate();
 
        // realizamos el calculo
        var edad = (ahora_ano + 1900) - ano;
        if ( ahora_mes < mes )
        {
            edad--;
        }
        if ((mes == ahora_mes) && (ahora_dia < dia))
        {
            edad--;
        }
        if (edad > 1900)
        {
            edad -= 1900;
        }
 
        // calculamos los meses
        var meses=0;
        if(ahora_mes>mes)
            meses=ahora_mes-mes;
        if(ahora_mes<mes)
            meses=12-(mes-ahora_mes);
        if(ahora_mes==mes && dia>ahora_dia)
            meses=11;
 
        // calculamos los dias
        var dias=0;
        if(ahora_dia>dia)
            dias=ahora_dia-dia;
        if(ahora_dia<dia)
        {
            ultimoDiaMes=new Date(ahora_ano, ahora_mes, 0);
            dias=ultimoDiaMes.getDate()-(dia-ahora_dia);
        }
 
        return edad;
    }else{
       
    }
}

function fecha_linda(fecha)
{
	var array = fecha.split("-")
	return array[2] + '.' + array[1] + '.' + array[0]
}

function nacionalidad_linda(prefijo, Sexo)
{
	if(prefijo=="AR" && Sexo=="Masculino")
		return "Argentino"
	if(prefijo=="AR" && Sexo=="Femenino")
		return "Argentina"
	return prefijo
}

function estado_civil_lindo(est,Sexo)
{
	if(est=="Soltero" && Sexo=="Femenino")
		return "Soltera"
	if(est=="Casado" && Sexo=="Femenino")
		return "Casada"
	else return est
}

function dni_lindo(dni)
{
        var resultado = "";
        if(dni[0]=="-")
        {
            nuevoNumero=dni.replace(/\./g,'').substring(1);
        }else{
            nuevoNumero=dni.replace(/\./g,'');
        }
        if(dni.indexOf(",")>=0)
            nuevoNumero=nuevoNumero.substring(0,nuevoNumero.indexOf(","));
        for (var j, i = nuevoNumero.length - 1, j = 0; i >= 0; i--, j++)
            resultado = nuevoNumero.charAt(i) + ((j > 0) && (j % 3 == 0)? ".": "") + resultado;
        if(dni.indexOf(",")>=0)
            resultado+=dni.substring(dni.indexOf(","));
        if(dni[0]=="-")
        {
            return "-"+resultado;
        }else{
            return resultado;
        }
}

function cuil_lindo(cuil)
{
	var a_devolver = "";
	a_devolver += cuil[0] + cuil[1] + "-"
	for(var i = 2; i < (cuil.length - 1); i++)
	{
		a_devolver += cuil[i]
	}
	
	a_devolver += '-' + cuil[cuil.length - 1]

	return a_devolver
	
}

function validar_piso(num)
{
	if(num>0)
		return "Piso: " + num
	else return ""
}

function validar_dpto(num)
{
	if(num>0)
		return "Dpto: " + num
	else return ""
}

function mes_anio(fecha)
{
 	texto = fecha.split('-')
 	return texto[1] + '-' + texto[0]

}

function check_referencia(valor)
{
	if(valor=="-1"){
		return ""
	}

	else return "ref: " + valor
}