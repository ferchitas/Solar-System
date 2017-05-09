function Estrella (rutaTextura, radio, velocidadRotacionPropia, distanciaOrbita, velocidadOrbitacion){

	Astro.call(this, rutaTextura, radio, velocidadRotacionPropia, distanciaOrbita, velocidadOrbitacion);
	
	this.sphere.material.emissive.set(0xffffff);
	this.sphere.material.emissiveMap = this.texture;
	var light1 = new THREE.PointLight(0xffffff, 0.6, 0, 0);
	light1.position.set(0, 0, 0);
	this.add(light1);

	this.animate = function(){

		this.sphere.rotation.y += velocidadRotacionPropia;
		this.pivote.rotation.y += velocidadOrbitacion;
		this.pivote.add(this.sphere);
		this.add(this.pivote);
	}

	this.addPlaneta = function(planeta){

		this.add(planeta);
	}
}
Estrella.prototype = new Astro();