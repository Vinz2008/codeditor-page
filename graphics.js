import * as THREE from '../js/threejs/three.module.js';
import { GLTFLoader } from '/js/threejs/GLTFLoader.js';
var container = document.getElementById('canvas');
document.body.appendChild( container );
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({ alpha: true });
var light = new THREE.PointLight(0xffffff);
light.position.set(-1,2,1);
scene.add(light);
renderer.setSize( window.innerWidth, window.innerHeight );
//document.body.appendChild( renderer.domElement );
container.appendChild( renderer.domElement );
camera.position.z = 0.4; 
camera.position.x = 1; 
camera.position.y = 1; 
/*const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
hemiLight.position.set( 0, 10, 0 );
scene.add( hemiLight );

/*const dirLight = new THREE.DirectionalLight( 0xffffff );
dirLight.position.set( 0, 0, 10 );
scene.add( dirLight );*/

const loader = new GLTFLoader();
loader.load( 'models/pc.glb', function ( gltf ) {
    const model = gltf.scene;
	model.position.set( 1, 1, 0 );
	model.scale.set( 0.01, 0.01, 0.01 );
	scene.add( gltf.scene );

}, undefined, function ( error ) {

	console.error( error );

} );
function rotate_scrolling() {
    model.rotate( 0, 0, 0 );
    console.log("rotate")
}
animate()
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}



