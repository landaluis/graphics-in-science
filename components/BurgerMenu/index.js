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

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth <= 768) {
				setMenuOpen(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<>
			<BurgerButton onClick={toggleMenu} menuOpen={menuOpen}>
				<div>&#9776;</div>
			</BurgerButton>

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
		</>
	);
}

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
	display: flex;
	align-items: center;
	justify-content: center;

	text-align: center;
	z-index: 26;
	position: absolute;
	top: 100%;
	left: 3rem;
	right: 3rem;
	overflow: hidden;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

	@media (max-width: 768px) {
		left: 1rem;
		right: 1rem;
	}
`;
