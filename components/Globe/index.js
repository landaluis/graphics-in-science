import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styled from "styled-components";

export default function Globe() {
	const containerRef = useRef(null);

	useEffect(() => {
		const scene = new THREE.Scene();
		scene.background = new THREE.Color(0xefeeec);

		const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

		const renderer = new THREE.WebGLRenderer({
			antialias: true,
		});

		containerRef.current.appendChild(renderer.domElement);

		function updateSize() {
			const container = containerRef.current;
			const aspectRatio = container.clientWidth / container.clientHeight;

			camera.aspect = aspectRatio;
			camera.updateProjectionMatrix();

			renderer.setSize(container.clientWidth, container.clientHeight);
		}

		updateSize();
		window.addEventListener("resize", updateSize);

		const sphere = new THREE.Mesh(
			new THREE.SphereGeometry(5, 50, 50),
			new THREE.MeshBasicMaterial({
				map: new THREE.TextureLoader().load("../globe.jpg"),
			})
		);

		scene.add(sphere);

		camera.position.z = 8.5;

		function animate() {
			requestAnimationFrame(animate);

			sphere.rotation.y += 0.001;

			renderer.render(scene, camera);
		}

		animate();
		console.log("Aqui estoy una vez");
	}, []);

	return <Container ref={containerRef} />;
}

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
