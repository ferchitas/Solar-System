function Planeta (rutaTextura, radio, velocidadRotacionPropia, distanciaOrbita, velocidadOrbitacion, satelite){

	//llamamos al constructor de la clase padre 
	Astro.call(this, rutaTextura, radio, velocidadRotacionPropia, distanciaOrbita, velocidadOrbitacion);

	
	this.addSatelite = function(satelite){

		//planeta.animate();
		this.separacionInter.add(satelite);
	}
}

Planeta.prototype = new Astro();