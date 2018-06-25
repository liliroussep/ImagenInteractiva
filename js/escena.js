/***********************************************
********* IMPLEMENTACIÓN CLASE PADRE ESCENA  ***
************************************************/


function santillana_Escena(tipo,contenedor,video,botonera) {
	this.tipo = tipo;
	this.contenedor = contenedor;
	this.video = video;
	this.completado = false;
	this.botonera = botonera;
	
	

	
	
	
	/*
		Determina si la escena es una actividad
		true: Es un video
	
	*/
	
	santillana_Escena.prototype.esActividad  = function()
	{
				 
		 var $this = this;
		 
	
		 
		 if ($this.tipo =="actividad") return true;
		 else return false;
		
	}
	
	
	
	
	/* 
		Muestra el contenedor de la escena.
		callback: Puntero al método que se ejecutará cuando se termine de ocultar.
	*/
	
	santillana_Escena.prototype.mostrar  = function()
	{
				 
		 var $this = this;
	
		if (this.esVideo && $this.video != null)
		{
		 
		 
		 $this.video[0].play();
			
		}
		$this.valoresIniciales();
		
		
		$this.contenedor.fadeIn("slow");
	
	}
	
	
	
	/* 
		Oculta el contenedor de la escena.
		callback: Puntero al método que se ejecutará cuando se termine de ocultar.
	*/
	
	santillana_Escena.prototype.ocultar  = function(callback)
	{
				 
		 var $this = this;
		
		
		
		if (this.esVideo && $this.video != null)
		{
			
			 
			$this.video[0].pause();
			if($this.video[0].currentTime > 0) $this.video[0].currentTime = 0;
			
		}
		
		 $this.contenedor.fadeOut('slow', callback);
		 
		
	}
	

} /*fin clase Escena*/



