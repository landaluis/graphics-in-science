import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import styled from "styled-components";

export default function Globe() {
	const containerRef = useRef(null);
	const canvasRef = useRef(null);

	useEffect(() => {
		const scene = new THREE.Scene();
		scene.background = new THREE.Color(0xefeeec);

		const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);

		const renderer = new THREE.WebGLRenderer({
			antialias: true,
		});

		canvasRef.current = renderer.domElement;
		containerRef.current.appendChild(canvasRef.current);

		function updateSize() {
			const container = containerRef.current;
			const aspectRatio = container.clientWidth / container.clientHeight;

			camera.aspect = aspectRatio;
			camera.updateProjectionMatrix();

			renderer.setSize(container.clientWidth, container.clientHeight);
			renderer.render(scene, camera);
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

		function animate() {
			requestAnimationFrame(animate);

			camera.position.z = 8.5;
			sphere.rotation.y += 0.001;

			renderer.render(scene, camera);
		}

		animate();

		return () => {
			window.removeEventListener("resize", updateSize);
		};
	}, []);

	return <Container ref={containerRef} />;
}

const Container = styled.div`
	position: relative;
	overflow: hidden;
	width: 55%;
	height: 60vh;

	@media (max-width: 1350px) {
		width: 50%;
	}

	@media (max-width: 1300px) {
		width: 60%;
	}

	@media (max-width: 820px) {
		width: 100%;
		// margin-left: 0.5rem;
		// margin-right: 0.5rem;
	}
	@media (max-width: 1150px) {
	}

	@media (max-width: 1024px) {
	}

	@media (max-width: 402px) {
	}
`;
