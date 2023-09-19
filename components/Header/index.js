import React from "react";
import styled from "styled-components";
import LogoN from "../LogoN";
import RightNavBar from "../RightNavBar";
import BurgerMenu from "../BurgerMenu";

export default function Header() {
	return (
		<HeaderContainer>
			<NavContainer>
				<LogoN />
				<NavSectionContainer>
					<BurgerMenu />
					<RightNavBar />
				</NavSectionContainer>
			</NavContainer>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	background-color: white;
	padding: 1.5rem 3rem 1.2rem;
	position: sticky;
	top: 0;
	background-color: #efeeec;

	@media (max-width: 768px) {
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
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
