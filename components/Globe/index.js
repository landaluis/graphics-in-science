import React, { useEffect, useRef } from "react";
import * as THREE from "three";

import styled from "styled-components";

// Define styled components for container and media queries
const Container = styled.div`
	overflow: hidden;
	width: 60%;
	height: 60vh;

	@media (max-width: 890px) {
		width: 45%;
		height: 45vh;
	}

	@media (max-width: 768px) {
		width: 100%;
		height: 60vh;
	}

	@media (max-width: 480px) {
		width: 60%;
		height: auto;
	}
`;

export default function Globe() {
	const containerRef = useRef(null);

	useEffect(() => {
		// Create the scene
		const scene = new THREE.Scene();
		scene.background = new THREE.Color(0xefeeec);

		// Create the camera
		const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

		// Create the renderer
		const renderer = new THREE.WebGLRenderer({
			antialias: true,
		});

		// Append the renderer to the container
		containerRef.current.appendChild(renderer.domElement);

		// Function to update camera and renderer size based on container size
		function updateSize() {
			const container = containerRef.current;
			const aspectRatio = container.clientWidth / container.clientHeight;

			// Set the camera aspect ratio
			camera.aspect = aspectRatio;
			camera.updateProjectionMatrix();

			// Set the renderer size
			renderer.setSize(container.clientWidth, container.clientHeight);
		}

		// Initialize size and listen for resize events
		updateSize();
		window.addEventListener("resize", updateSize);

		// Create the sphere
		const sphere = new THREE.Mesh(
			new THREE.SphereGeometry(5, 50, 50),
			new THREE.MeshBasicMaterial({
				map: new THREE.TextureLoader().load("../globe.jpg"),
			})
		);

		scene.add(sphere);

		// Position the camera
		camera.position.z = 8.5;

		// Animation function
		function animate() {
			requestAnimationFrame(animate);

			// Rotate the sphere (just an example)
			// sphere.rotation.x += 0.005;
			sphere.rotation.y += 0.001;

			renderer.render(scene, camera);
		}

		animate();
		console.log("Aqui estoy una vez");
	}, []);

	return <Container ref={containerRef} />;
}
