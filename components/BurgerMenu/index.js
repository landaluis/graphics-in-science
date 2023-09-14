import styled from "styled-components";
import { useState, useEffect } from "react";

import AboutLink from "../AboutLink";
import ExamplesLink from "../ExamplesLink";

export default function BurgerMenu() {
	const [menuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!menuOpen);
		console.log("Menu Open:", menuOpen);
	};

	// Add an event listener to track screen width changes
	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 768) {
				// Close the menu if screen width is less than or equal to 768px
				setMenuOpen(false);
			}
		};

		// Attach the event listener
		window.addEventListener("resize", handleResize);

		// Cleanup by removing the event listener when the component unmounts
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []); // Empty dependency array to run this effect only once

	return (
		<>
			<BurgerButton onClick={toggleMenu} menuOpen={menuOpen}>
				<div>&#9776;</div>
			</BurgerButton>
			{/* <MenuWrapper> */}
			{menuOpen ? (
				<>
					<SquareMenu>
						<LinksPadding>
							{" "}
							<AboutLink />
						</LinksPadding>

						<LinksPadding>
							{" "}
							<ExamplesLink />
						</LinksPadding>
					</SquareMenu>
				</>
			) : null}
			{/* </MenuWrapper> */}
		</>
	);
}

// const MenuWrapper = styled.section`
// 	position: fixed;
// 	color: red;
// 	top: 65px;
// 	left: 10px;
// 	z-index: 40;
// `;
const LinksPadding = styled.div`
	padding-top: 1rem;
	padding-bottom: 1rem;
	display: block;
`;
const BurgerButton = styled.button`
	display: none !important;

	@media (max-width: 768px) {
		background: none;
		z-index: 60;
		cursor: pointer;
		order: 2;
		display: block !important;
		line-height: 1;
		border-style: solid;
		border: 2px solid black;
		padding: 0.6rem;
	}
`;

const SquareMenu = styled.div`
	background-color: #fafafa;
	border-style: solid;
	border-width: 2px;
	flex-direction: column;
	padding-top: 1rem;
	padding-bottom: 1rem;
	padding-left: 1.5rem;
	padding-right: 1.5rem;
	// width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	text-align: center;
	z-index: 26;
	// position: relative;
	position: absolute;
	top: 100%;
	left: 3rem;
	right: 3rem;
	// margin-left: 1.5rem;
	// margin-right: 1.5rem;

	overflow: hidden;

	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	// border-radius: 17px;
	// margin: 0 auto;
	// margin-top: 30px;
	// font-size: 16px;
	// height: 480px;
	// width: 350px;
	// overflow: auto;

	@media (max-width: 768px) {
		left: 1rem;
		right: 1rem;
	}
`;
