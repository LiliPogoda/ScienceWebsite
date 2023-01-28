import * as THREE from "three"

export const test = () => {
    const SSR = typeof window === "undefined";
    if (SSR) {
        return "";
      }
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});

    const fov = 75;
    const aspect = 2;  // the canvas default
    const near = 0.1;
    const far = 5;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    camera.position.z = 2

    const scene = new THREE.Scene()

    const boxWidth = 1;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);

    const material = new THREE.MeshBasicMaterial({color: 0x44aa88});

    const cube = new THREE.Mesh(geometry, material);

    scene.add(cube);

    renderer.render(scene, camera);

    function render(time) {
        time *= 0.001;  // convert time to seconds
       
        cube.rotation.x = time;
        cube.rotation.y = time;
       
        renderer.render(scene, camera);
       
        requestAnimationFrame(render);
      }
    requestAnimationFrame(render);

    function transform() {
      const m = new THREE.Matrix4();
      m.set(
        2,0,0,0,
        0,2,0,0,
        0,0,2,0,
        0,0,0,1
      )
      cube.applyMatrix4(m)
    }

    waitForElm("#transformButton").then((transformButton) => {
        transformButton.addEventListener("click", transform)
    })
    
}

function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}