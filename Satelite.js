function Satelite (rutaTextura, radio, velocidadRotacionPropia, distanciaOrbita, velocidadOrbitacion){

	 Astro.call(this, rutaTextura, radio, velocidadRotacionPropia, distanciaOrbita, velocidadOrbitacion);
	 
}

Satelite.prototype = new Astro();