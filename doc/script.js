
const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderizador = new THREE.WebGLRenderer();
renderizador.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderizador.domElement);


const geometría = new THREE.PlaneGeometry(5, 5);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true }); // Cambiado a rojo
const plano = new THREE.Mesh(geometría, material);
escena.add(plano);


camara.position.z = 5;


function animacion() {
    requestAnimationFrame(animacion);
    plano.rotation.x += 0.01;
    plano.rotation.y += 0.01;
    renderizador.render(escena, camara);
}

animacion();


window.addEventListener('resize', () => {
    camara.aspect = window.innerWidth / window.innerHeight;
    camara.updateProjectionMatrix();
    renderizador.setSize(window.innerWidth, window.innerHeight);
});
