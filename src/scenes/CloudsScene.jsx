import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const CloudsScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    
    container.innerHTML = '';

    const cloudFile = '/assets/cloud1.png';
    const cloudCount = 5;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 20;

    const vFOV = THREE.MathUtils.degToRad(camera.fov); // convert degrees to radians
    const height = 2 * Math.tan(vFOV / 2) * camera.position.z;
    const screenWidth = height * camera.aspect;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const loader = new THREE.TextureLoader();
    const clouds = [];

    loader.load(
      cloudFile,
      (texture) => onTextureLoad(texture),
      undefined,
      (err) => console.error(`Failed to load ${cloudFile}:`, err)
    );

    const onTextureLoad = (texture) => {

      for(var i = 0; i < cloudCount; i++){
        const material = new THREE.MeshBasicMaterial({
          map: texture,
          transparent: true
        });

        var cloudH = Math.floor(Math.random() * 5) + 5;
        var cloudW = 2 * cloudH;
        const geometry = new THREE.PlaneGeometry(cloudW, cloudH);

        const cloud = new THREE.Mesh(geometry, material);

        cloud.position.set(-60 + i * 20, Math.floor(Math.random() *  5) + 5, 0);
        scene.add(cloud);
        clouds.push(cloud);
      }     

      animate();
    };

    const animate = () => {
      clouds.forEach((cloud, index) => {

        cloud.position.x += 0.03;
        var cloudWidth = cloud.geometry.parameters.width;
        if (cloud.position.x > cloudWidth + screenWidth / 2)
        {
          var nextIndex = (index + 1) % cloudCount;
          var nextX = clouds[nextIndex].position.x;
          cloud.position.x = nextX - 20;
          cloud.position.y = Math.floor(Math.random() *  5) + 5;
        }

      });

      // const time = Date.now() * 0.0001;
      // camera.position.x = Math.sin(time) * 50;
      // camera.position.y = Math.sin(time * 0.8) * 30;
      // camera.lookAt(0, 0, 0);
      
      renderer.render(scene, camera);
      requestAnimationFrame(animate);

    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      if (renderer) {
        renderer.dispose();
        renderer.forceContextLoss();
        renderer.domElement = null;
      }
      container.innerHTML = '';
    };

  }, []);

  return <div ref={containerRef} className="fixed top-0 left-0 w-screen h-screen -z-50" />;
};

export default CloudsScene;