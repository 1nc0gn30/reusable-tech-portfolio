import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { useThreeScene } from '../hooks/useThreeScene.js';
import { useMouseTracking } from '../hooks/useMouseTracking.js';
import { portfolioConfig } from '@/config/portfolioConfig.js';

const Three3DScene = () => {
  const containerRef = useRef(null);
  const { scene, camera, renderer, frameIdRef } = useThreeScene(containerRef);
  const { normalizedX, normalizedY } = useMouseTracking();
  const mouseRef = useRef({ x: 0, y: 0 });
  const particlesRef = useRef(null);
  const shapesRef = useRef([]);
  const modelsRef = useRef([]);

  const {
    enabled,
    opacityClass,
    particleCountDesktop,
    particleCountMobile,
    particleSpread,
    shapeCount,
    cameraParallax,
    cameraSmoothing,
    rotationSpeed,
    models = [],
  } = portfolioConfig.three;

  useEffect(() => {
    mouseRef.current = { x: normalizedX, y: normalizedY };
  }, [normalizedX, normalizedY]);

  useEffect(() => {
    if (!enabled || !scene || !camera || !renderer) return;

    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    const particlesCount = isMobile ? particleCountMobile : particleCountDesktop;
    const posArray = new Float32Array(particlesCount * 3);

    const particlesGeometry = new THREE.BufferGeometry();
    for (let i = 0; i < particlesCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * particleSpread;
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.14,
      color: 0x1dc9c0,
      transparent: true,
      opacity: 0.5,
      blending: THREE.AdditiveBlending,
    });

    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    particlesRef.current = particlesMesh;

    const geometries = [
      new THREE.IcosahedronGeometry(1, 0),
      new THREE.TorusGeometry(1.4, 0.3, 12, 36),
      new THREE.OctahedronGeometry(1, 0),
    ];

    const material = new THREE.MeshStandardMaterial({
      color: 0x44e8de,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
      emissive: 0x0f5c58,
      emissiveIntensity: 0.7,
    });

    geometries.slice(0, shapeCount).forEach((geo) => {
      const mesh = new THREE.Mesh(geo, material);
      mesh.position.set(
        (Math.random() - 0.5) * 28,
        (Math.random() - 0.5) * 24,
        (Math.random() - 0.5) * 14 - 7
      );
      mesh.rotation.set(Math.random() * Math.PI, Math.random() * Math.PI, 0);
      scene.add(mesh);
      shapesRef.current.push(mesh);
    });

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.62);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0x4af7ef, 1.8, 48);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);
    const rimLight = new THREE.PointLight(0x38bdf8, 1.1, 55);
    rimLight.position.set(-15, 8, 14);
    scene.add(rimLight);
    const modelLoader = new GLTFLoader();
    let isDisposed = false;

    models.forEach((modelConfig, modelIndex) => {
      modelLoader.load(
        modelConfig.path,
        (gltf) => {
          if (isDisposed) return;
          const root = gltf.scene;
          root.scale.setScalar(modelConfig.scale ?? 1);
          root.position.set(...(modelConfig.position ?? [0, 0, -6]));
          root.rotation.y = modelIndex * (Math.PI / 3);

          root.traverse((child) => {
            if (!child.isMesh || !child.material) return;
            const materials = Array.isArray(child.material) ? child.material : [child.material];
            materials.forEach((mat) => {
              mat.transparent = true;
              mat.opacity = Math.min(mat.opacity ?? 1, 0.9);
              if ('emissive' in mat) {
                mat.emissive = new THREE.Color(0x0f4d49);
                mat.emissiveIntensity = 0.35;
              }
            });
          });

          scene.add(root);
          modelsRef.current.push({
            root,
            spinY: modelConfig.spinY ?? 0.0011,
          });
        },
        undefined,
        () => {}
      );
    });

    const animate = () => {
      if (particlesRef.current) {
        particlesRef.current.rotation.y += rotationSpeed.particlesY;
        particlesRef.current.rotation.x += rotationSpeed.particlesX;
      }

      shapesRef.current.forEach((shape, i) => {
        const factor = i + 1;
        shape.rotation.x += rotationSpeed.shapeX * factor;
        shape.rotation.y += rotationSpeed.shapeY * factor;
      });
      modelsRef.current.forEach((entry, i) => {
        entry.root.rotation.y += entry.spinY;
        entry.root.rotation.x += (i % 2 === 0 ? 1 : -1) * 0.00025;
      });

      const { x, y } = mouseRef.current;
      camera.position.x += (x * cameraParallax - camera.position.x) * cameraSmoothing;
      camera.position.y += (y * cameraParallax - camera.position.y) * cameraSmoothing;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
      frameIdRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (frameIdRef.current) cancelAnimationFrame(frameIdRef.current);

      if (particlesRef.current) {
        scene.remove(particlesRef.current);
        particlesRef.current = null;
      }

      shapesRef.current.forEach((shape) => {
        scene.remove(shape);
      });
      shapesRef.current = [];
      modelsRef.current.forEach((entry) => {
        entry.root.traverse((child) => {
          if (child.isMesh) {
            child.geometry?.dispose?.();
            if (Array.isArray(child.material)) {
              child.material.forEach((mat) => mat?.dispose?.());
            } else {
              child.material?.dispose?.();
            }
          }
        });
        scene.remove(entry.root);
      });
      modelsRef.current = [];
      isDisposed = true;

      scene.remove(ambientLight);
      scene.remove(pointLight);
      scene.remove(rimLight);

      particlesGeometry.dispose();
      particlesMaterial.dispose();
      geometries.forEach((g) => g.dispose());
      material.dispose();
    };
  }, [
    enabled,
    scene,
    camera,
    renderer,
    frameIdRef,
    particleCountDesktop,
    particleCountMobile,
    particleSpread,
    shapeCount,
    cameraParallax,
    cameraSmoothing,
    rotationSpeed,
    models,
  ]);

  if (!enabled) return null;

  return <div ref={containerRef} className={`fixed inset-0 z-0 pointer-events-none ${opacityClass}`} />;
};

export default Three3DScene;
