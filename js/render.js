"use strict";

/* global THREE */

function main() {
  var canvasList = new Array(8);
  const items = [
    ["#b1", "img/building/B1/buildings1.mtl", "img/building/B1/buildings1.obj"],
    ["#b2", "img/building/B2/buildings2.mtl", "img/building/B2/buildings2.obj"],
    ["#b3", "img/building/B3/buildings3.mtl", "img/building/B3/buildings3.obj"],
    ["#b4", "img/building/B4/buildings4.mtl", "img/building/B4/buildings4.obj"],
    ["#b5", "img/building/B5/buildings5.mtl", "img/building/B5/buildings5.obj"],
    ["#b6", "img/building/B6/buildings6.mtl", "img/building/B6/buildings6.obj"],
    ["#b7", "img/building/B7/buildings7.mtl", "img/building/B7/buildings7.obj"],
    ["#b8", "img/building/B8/buildings8.mtl", "img/building/B8/buildings8.obj"]
  ];

  for (var i = 0; i < canvasList.length; i++) {
    canvasList[i] = new Array(7);
    canvasList[i][0] = document.querySelector(items[i][0]);
    canvasList[i][1] = items[i][1];
    canvasList[i][2] = items[i][2];
    var canvas = canvasList[i][0];
    canvasList[i][4] = new THREE.WebGLRenderer({ canvas });
     
    var fov = 45;
    var aspect = 2; // the canvas default
    var near = 0.1;
    var far = 100;

    // carmera
    canvasList[i][5] = new THREE.PerspectiveCamera(fov, aspect, near, far);
    canvasList[i][5].position.set(0, 10, 20);

    // //control
    // canvasList[i][6] = new THREE.OrbitControls(canvasList[i][5], canvasList[i][4]);
    // canvasList[i][6].target.set(0, 5, 0);
    // canvasList[i][6].update();

    canvasList[i][3] = new THREE.Scene();
    canvasList[i][3].background = new THREE.Color("black");

    const planeSize = 4000;

    const loader = new THREE.TextureLoader();
    var texture = loader.load("../img/building/checker.png");
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.magFilter = THREE.NearestFilter;
    const repeats = planeSize / 400;
    texture.repeat.set(repeats, repeats);

    const planeGeo = new THREE.PlaneBufferGeometry(planeSize, planeSize);
    const planeMat = new THREE.MeshPhongMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });
    const mesh = new THREE.Mesh(planeGeo, planeMat);
    mesh.rotation.x = Math.PI * -0.5;
    canvasList[i][3].add(mesh);

    const skyColor = 0xb1e1ff; // light blue
    const groundColor = 0xb97a20; // brownish orange
    const intensity = 1;
    const light1 = new THREE.HemisphereLight(skyColor, groundColor, intensity);
    canvasList[i][3].add(light1);
    const color = 0xffffff;
    const light2 = new THREE.DirectionalLight(color, intensity);
    light2.position.set(5, 10, 2);
    canvasList[i][3].add(light2);
    canvasList[i][3].add(light2.target);
  }

  // {


  // }

  function frameArea(sizeToFitOnScreen, boxSize, boxCenter, camera) {
    const halfSizeToFitOnScreen = sizeToFitOnScreen * 0.5;
    const halfFovY = THREE.Math.degToRad(camera.fov * 0.5);
    const distance = halfSizeToFitOnScreen / Math.tan(halfFovY);
    // compute a unit vector that points in the direction the camera is now
    // in the xz plane from the center of the box
    const direction = new THREE.Vector3()
      .subVectors(camera.position, boxCenter)
      .multiply(new THREE.Vector3(1, 0, 1))
      .normalize();

    // move the camera to a position distance units way from the center
    // in whatever direction the camera was from the center already
    camera.position.copy(direction.multiplyScalar(distance).add(boxCenter));

    // pick some near and far values for the frustum that
    // will contain the box.
    camera.near = boxSize / 100;
    camera.far = boxSize * 100;

    camera.updateProjectionMatrix();

    // point the camera to look at the center of the box
    camera.lookAt(boxCenter.x, boxCenter.y, boxCenter.z);
  }

  {
    for (var i = 0; i < canvasList.length; i++) {
      var objPath = canvasList[i][1];
      var mtlPath = canvasList[i][2];
      var scensObj = canvasList[i][3];
      const objLoader = new THREE.OBJLoader2();
      objLoader.loadMtl(objPath, null, (materials) => {
        objLoader.setMaterials(materials);
        objLoader.load(mtlPath, (event) => {
          const root = event.detail.loaderRootNode;
          scensObj.add(root);

          // compute the box that contains all the stuff
          // from root and below
          const box = new THREE.Box3().setFromObject(root);

          const boxSize = box.getSize(new THREE.Vector3()).length();
          const boxCenter = box.getCenter(new THREE.Vector3());

          // set the camera to frame the box
          frameArea(boxSize * 1.2, boxSize, boxCenter, camera);

          // update the Trackball controls to handle the new size
          controls.maxDistance = boxSize * 10;
          controls.target.copy(boxCenter);
          controls.update();
        });
      });
    }
  }

  function resizeRendererToDisplaySize(renderer) {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  }

  function render() {
    for (var i = 0; i < canvasList.length; i++) {
    if (resizeRendererToDisplaySize(canvasList[i][4])) {
      const canvas = canvasList[i][4].domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    
      var scensObj = canvasList[i][3];
      canvasList[i][4].render(scensObj, camera);
    }

    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}

main();
