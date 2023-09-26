import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import RightNavBar from "../RightNavBar";
import BurgerMenu from "../BurgerMenu";

export default function Header() {
	return (
		<HeaderContainer>
			<NavContainer>
				<Logo />
				<NavSectionContainer>
					<BurgerMenu />
					<RightNavBar />
				</NavSectionContainer>
			</NavContainer>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	z-index: 50;
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	background-color: white;
	padding: 1.5rem 3rem 1.2rem;
	position: sticky;
	top: 0;
	background-color: var(--background-white);

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;
const NavContainer = styled.div`
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;
const NavSectionContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;
