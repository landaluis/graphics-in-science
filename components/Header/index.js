import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import RightNavBar from "../RightNavBar";

export default function Header({
	handleClick,
	handleClickExamples,
	handleWorkTogether,
}) {
	return (
		<HeaderContainer>
			<NavContainer>
				<Logo />
				<NavSectionContainer>
					<RightNavBar
						handleClick={handleClick}
						handleClickExamples={handleClickExamples}
						handleWorkTogether={handleWorkTogether}
					/>
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

	@media (max-width: 1024px) {
		padding: 1.5rem 2rem 1.2rem;
	}
	@media (max-width: 768px) {
		padding: 1rem;
	}
`;
const NavContainer = styled.div`
	width: 93%;
	max-width: 97.5rem;
	margin-left: auto;
	margin-right: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;

	@media (max-width: 480px) {
		width: 100%;
	}
`;
const NavSectionContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-around;
`;
