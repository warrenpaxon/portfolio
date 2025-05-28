import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const StarsScene = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    container.innerHTML = '';

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    const count = 1000;
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3 + 0] = (Math.random() - 0.5) * 400; // X
      positions[i * 3 + 1] = (Math.random() - 0.5) * 400; // Y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 400; // Z
      sizes[i] = Math.random() * 2 + 1; // size from 1 to 3
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    const starMaterial = new THREE.ShaderMaterial({
      vertexShader: `
        attribute float size;
        void main() {
          gl_PointSize = size;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        void main() {
          float dist = length(gl_PointCoord - vec2(0.5));
          float alpha = 1.0 - smoothstep(0.2, 0.5, dist);
          gl_FragColor = vec4(vec3(1.0), alpha);
        }
      `,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });

    const stars = new THREE.Points(geometry, starMaterial);
    scene.add(stars);

    const animate = () => {
      const positions = geometry.attributes.position.array;
      for (let i = 0; i < count; i++) {
        const ix = i * 3;
        const iy = ix + 1;
        const iz = ix + 2;

        positions[ix] += 0.1;
        positions[iy] += 0.05;
        positions[iz] += 0.08;

        if (positions[iz] > 200) positions[iz] = -200;
        if (positions[ix] > 200) positions[ix] = -200;
        if (positions[iy] > 200) positions[iy] = -200;
      }
      geometry.attributes.position.needsUpdate = true;

      // camera set
      const time = Date.now() * 0.0001;
      // Orbit around the origin
      camera.position.x = Math.sin(time) * 50;
      camera.position.y = Math.sin(time * 0.8) * 30;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      renderer.dispose();
      renderer.forceContextLoss();
      renderer.domElement = null;
      container.innerHTML = '';
    };
  }, []);

  return <div ref={containerRef} className="fixed top-0 left-0 w-screen h-screen -z-50" />;
};

export default StarsScene;