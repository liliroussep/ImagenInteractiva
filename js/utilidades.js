/*HARDCORE variable global. Solo se usa de emergencia para comunicar la escala con JQUERY UI.*/
var superescala = 0;
/* FIN HARDCORE variable global */


/*	Utilitario para escalar un carcasa a lo alto del navegador manteniendo su proporción*/
jQuery.fn.escalarContenedorH = function() {

	 var ua = window.navigator.userAgent, msie = "", scale=0;
	 msi = ua.indexOf("MSIE");
	
	
	scale =  $.getEscalaFix(this);	
	this.aplicarEscaleCSS(scale);
	this.centerH(scale);
	
	
		
	return this;	
	
}



/* Escala un contenedor de acuerdo al tamaño del navegador. Hace falta parchar el archivo jquery-ui-1.10.3.custom.min.js (tiene nombre de la versión 3, pero es la versión 4 con el parche)
carcasa: El contenedor principal que se desea autoescalar de acuerdo al tamaño del navegador.
return: La escala de ajuste. 
*/
$.getEscalaFix = function(carcasa)
{
	var scale = 0,winHeight = 0, winWidth = 0, appWidth = 0, appHeight = 0;

	 appWidth = carcasa.outerWidth();
     appHeight = carcasa.outerHeight();
	 winWidth = $(window).width(); //retrieve current window width
	 winHeight = $(window).height(); //retrieve current window height
	 

	
	//scale = ((appWidth/winWidth)<(appHeight/winHeight))?(appWidth/winWidth):(appHeight/winHeight);
	
	scale = ((winWidth/appWidth)<(winHeight/appHeight))?(winWidth/appWidth):(winHeight/appHeight);
	superescala = scale;
	
 	// alert(appWidth  + " ----> "+ appHeight + "\n" + winWidth  + " ----> "+ winHeight + "\n" + scale)
	
	return scale;
	
	
	
}




/*	Utilitario para centrar elementos solo horizontalmente en su carcasa*/
/*	parent: true = carcasa, false = windows 										*/
jQuery.fn.centerH = function(escala) {
	
	parent = window;
   
    this.css({
        "position": "absolute",
         "left": ((($(parent).width() - (this.outerWidth() * escala  )) / 2) + $(parent).scrollLeft() + "px")
    });
return this;
}


/*	Utilitario para centrar elementos verticalmente  en su carcasa*/
/*	parent: true = carcasa, false = windows 										*/
jQuery.fn.centerV = function(parent) {
    if (parent) {
        parent = this.parent();
    } else {
        parent = window;
    }
    this.css({
        "position": "absolute",
        "top": ((($(parent).height() - this.outerHeight()) / 2) + $(parent).scrollTop() + "px"),
      
    });
return this;
}


/*	Aplica una determinada escala a un carcasa*/
/*	escala:  escala en porcentajes 	*/

jQuery.fn.aplicarEscaleCSS =  function (escala)
{
	
	var valor =  "scale(" + escala +")";
	

		this.css({
		"transform" : valor,
		"-moz-transform": valor,
		"-webkit-transform": valor,
		"-ms-transform": valor,
		"-o-transform": valor,
		"transform-origin": "0% 0%",
		"-moz-transform-origin": "0% 0%",
		"-webkit-transform-origin": "0% 0%",
		"-o-transform-origin": "0% 0%",
		"-ms-transform-origin": "0% 0%"
	    });
	
	
  return this;
	
	
}


/*Busca si todos los elementos de un arreglo está en otro arreglo.
arreglo1: Arreglo a buscar. 
arreglo2: Arreglo donde se desea buscar.
return: false si alguno de los elementos no está presente, true si todos elementos están presentes.
*/
$.buscaEstaArrayenArray = function(arreglo1,arreglo2)
{
	var retorno = false, entero;

	//alert(arreglo1 + " ---->" + arreglo2)
	$.each(arreglo1, function(id, item) {
			
	entero = parseInt(item);
		
		if ($.inArray(entero, arreglo2) > -1)		
		{
			retorno = true;
			
		}
		else
		{
			retorno = false
			return false;
			
			
		}
				
		
	});
	
	
	return retorno;
}




/*	Elimina un elemento en un arreglo si es que existe
	elemento: Elemento a e eliminar.
	areglo:   Arreglo.

*/

$.eliminaElementoenArray = function(elemento,arreglo)
{
	var indice = -1;
	
	
	indice = 	$.inArray(elemento, arreglo);
	
	
	
	if (indice != -1)
	{
		arreglo.splice(indice,1);
		return true;
	}
	else 
		return false
	
		
}









/*Busca un elemento en un arreglo. Utilizar mejor el método inArray de Jquery. 
arreglo: Arreglo donde se va a buscar. 
return: false si alguno de los elementos no está presente, true si todos elementos están presentes.
*/
$.buscaenArreglo = function(elemento,arreglo, indice)
{
	var i, retorno = -1;
	if (indice == null)
	{
		i = 0;
	}
	else if (indice < arreglo.length)
	{
			i = indice;
			
	}
	else
	{
		i = arreglo.length - 1;
		
	}
	
	
	
	
	for (i; i < arreglo.length;i++)
	{
		if (arreglo[i] == elemento)
		{
			retorno = i;
			break;
			
		}
		
		
	}
	
	
	return retorno;
}

/*Funciones añadidas a la clase String*/

String.prototype.trim = function() {
	return this.replace(/^\s+|\s+$/g,"");
}

String.prototype.ltrim = function() {
	return this.replace(/^\s+/,"");
}

String.prototype.rtrim = function() {
	return this.replace(/\s+$/,"");
}

