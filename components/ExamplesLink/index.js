import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function ExamplesLink({ handleClickExamples }) {
	return (
		<ExamplesLinkContainer>
			<Examples onClick={handleClickExamples}>Examples</Examples>
		</ExamplesLinkContainer>
	);
}

const Examples = styled.button`
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
const ExamplesLinkContainer = styled.div`
	// font-family: "Arial", sans-serif;
	// font-size: 1.1rem;
	padding: 8px 10px;

	// @media (max-width: 1280px) {
	// 	font-size: 1rem;
	// }
`;
