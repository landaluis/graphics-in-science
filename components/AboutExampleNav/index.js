import React from "react";
import styled from "styled-components";
import AboutLink from "../AboutLink";
import ExamplesLink from "../ExamplesLink";

export default function AboutExampleNav() {
	return (
		<>
			<NavContainer>
				<AboutLink />
				<ExamplesLink />
			</NavContainer>
		</>
	);
}

const NavContainer = styled.div`
	display: flex;
	align-items: center;

	@media (max-width: 768px) {
		display: none;
	}
`;
