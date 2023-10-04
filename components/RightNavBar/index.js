import React from "react";
import styled from "styled-components";
import LetsWorkLink from "../LetsWorkLink";

import AboutExampleNav from "../AboutExampleNav";

export default function RightNavBar({
	handleClick,
	handleClickExamples,
	handleWorkTogether,
}) {
	return (
		<RightNavBarContainer>
			<AboutExampleNav
				handleClick={handleClick}
				handleClickExamples={handleClickExamples}
			/>
			<LetsWorkLink handleWorkTogether={handleWorkTogether} />
		</RightNavBarContainer>
	);
}

const RightNavBarContainer = styled.div`
display: flex;
align-items: center;
grid-column-gap: 3rem;
}

@media (max-width: 768px) {
	grid-column-gap: 1rem;
}

@media (max-width: 420px) {
	grid-column-gap: 0.5rem;
}
`;
