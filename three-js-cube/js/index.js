// 1) Add the scene
var scene = new THREE.Scene();

// 2) Add the camera
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );

// 3) Add a WebGL renderer
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// 4) Create the cube
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x2e8ece } );
var cube = new THREE.Mesh( geometry, material );

// 5) Add the cube to the scene
scene.add( cube );

// 6) Position the camera
camera.position.z = 5;

// 7) Render it
var render = function () {
  requestAnimationFrame( render );

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render(scene, camera);
};

render();