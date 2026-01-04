import * as THREE from 'three';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
scene.add( camera );


const cubeGeometry = new THREE.BoxGeometry( 1, 1, 1 );
const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );    

const cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
scene.add( cube );

const light = new THREE.DirectionalLight( 0xffffff, 1 );

scene.add( light );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );


document.body.appendChild( renderer.domElement );

function animate() {
    renderer.render( scene, camera );
    requestAnimationFrame( animate );
}