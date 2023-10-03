import React from "react";
import styled from "styled-components";

export default function AboutLink() {
	return (
		<AboutLinkContainer>
			<About>About</About>
		</AboutLinkContainer>
	);
}

const About = styled.div``;
const AboutLinkContainer = styled.div`
	padding: 8px 10px;
	font-family: "Arial", sans-serif;
	font-size: 1.1rem;
	 
	@media (max-width: 1280px) {
		font-size: 1rem;
	}

	}
`;
