function guardar()
{
    var x = document.getElementById("formulario");
    var text = "{";
    var i;
    for (i = 0; i < x.length - 1 ;i++) {
        text += '"' + x.elements[i].id + '"' + ":" + '"' + x.elements[i].value +'"' + ',';
    }
    text += '"' + x.elements[i].id + '"' + ":" + '"' + x.elements[i].value +'"' + "}"
    
    if (typeof(Storage) !== "undefined"){
   		 window.localStorage.setItem("DATOS", text);
         document.location.href="./curriculumvitae.html"
		} 
		else{
    		document.getElementById("demo").innerHTML = "Tu navegador no soporta localStorage";
		}


}
		
