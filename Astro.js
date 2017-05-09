
// parametros: rutaTextura, radio, velocidadRotacionPropia, distanciaOrbita, velocidadOrbitacion
function Astro (rutaTextura, radio, velocidadRotacionPropia, distanciaOrbita, velocidadOrbitacion){

	THREE.Object3D.call (this);

	this.texture = new THREE.TextureLoader().load(rutaTextura);
	var sphereMaterial = new THREE.MeshLambertMaterial({ map: this.texture, overdraw: 0.5 });
	var sphereGeometry = new THREE.SphereGeometry(radio, 30, 30);
	this.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
	this.sphere.castShadow = true;

	this.separacionInter = new THREE.Object3D();
	this.pivote = new THREE.Object3D();

	this.animate = function(){

		this.sphere.rotation.y += velocidadRotacionPropia;
		this.separacionInter.position.x = distanciaOrbita;
		this.separacionInter.add(this.sphere);
		this.pivote.rotation.y += velocidadOrbitacion;
		this.pivote.add(this.separacionInter);
		this.add(this.pivote);
	}

	this.addAstro = function(planeta){

		planeta.animate();
		this.add(planeta);
	}
}

Astro.prototype = new THREE.Object3D();