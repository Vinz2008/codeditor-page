import * as THREE from './js/threejs/three.module.js';
import { GLTFLoader } from './js/threejs/GLTFLoader.js';
var container = document.getElementById('canvas');
document.body.appendChild( container );

const scene = new THREE.Scene();
/*const fov = 75; // AKA Field of View*/
var height =window.innerHeight
var width = window.innerWidth
const aspect =  width / height
/*const near = 0.1; // the near clipping plane
const far = 1000; // the far clipping plane*/

const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 1000);
//const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer(
    {
         alpha: true,
         antialias: true, 
    }
);
renderer.physicallyCorrectLights = true;
function onResize() {
    console.log("onResize");
}

function setSize(container, camera, renderer) {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio)
}
window.addEventListener("resize", onResize);
var light = new THREE.PointLight(0xffffff);
light.position.set(-1,2,1);
scene.add(light);
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio(window.devicePixelRatio)
//document.body.appendChild( renderer.domElement );
container.appendChild( renderer.domElement );
camera.position.z = 0.32; 
camera.position.x = 1; 
camera.position.y = 0.96; 
/*const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x444444 );
hemiLight.position.set( 0, 10, 0 );
scene.add( hemiLight );

/*const dirLight = new THREE.DirectionalLight( 0xffffff );
dirLight.position.set( 0, 0, 10 );
scene.add( dirLight );*/

const loader = new GLTFLoader();
loader.load( 'models/pc.glb', function ( gltf ) {
    const model = gltf.scene;
	model.position.set( 1, 0.9, 0.1 );
	model.scale.set( 0.01, 0.01, 0.01 );
	scene.add( gltf.scene );
    window.modelGlobal = model;


}, undefined, function ( error ) {

	console.error( error );

} );
function rotate_scrolling(model) {
    window.modelGlobal.position.y = Math.pi / 2 ;
    console.log("rotate")
}
window.addEventListener('resize', () => {
    setSize(container, camera, renderer)
})
//container.onscroll = rotate_scrolling(window.modelGlobal)
animate()
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}



