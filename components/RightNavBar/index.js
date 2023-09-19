import React from "react";
import styled from "styled-components";
import LetsWorkLink from "../LetsWorkLink";

import AboutExampleNav from "../AboutExampleNav";

export default function RightNavBar() {
	return (
		<RightNavBarContainer>
			<AboutExampleNav />
			<LetsWorkLink />
		</RightNavBarContainer>
	);
}

const RightNavBarContainer = styled.div`
display: flex;
align-items: center;
}
`;
