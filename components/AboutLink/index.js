import React from "react";
import styled from "styled-components";

export default function AboutLink({ handleClick }) {
	return (
		<AboutLinkContainer>
			<About onClick={handleClick}>About</About>
		</AboutLinkContainer>
	);
}

const About = styled.button`
	background-color: transparent;
	border: none;
	padding: 0;
	margin: 0;
	cursor: pointer;
	font-family: "Arial", sans-serif;
	font-size: 1.1rem;

	@media (max-width: 1280px) {
		font-size: 1rem;
	}
`;

const AboutLinkContainer = styled.div`
	padding: 8px 10px;
	// font-family: "Arial", sans-serif;
	// font-size: 1.1rem;


	}
`;
