import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import Paragraph from "../Paragraph";

export default function PageWrap() {
	return (
		<PageWrapContainer>
			<ParagraphSphereSection>
				<Paragraph />
				{/* <SquareParagraph /> */}

				<Logo />
			</ParagraphSphereSection>
		</PageWrapContainer>
	);
}

const ParagraphSphereSection = styled.div`
	padding: 4rem;
	padding: 1.5rem 3rem 1.2rem;
	display: flex;
	justify-content: space-between;

	@media (max-width: 768px) {
		padding: 1rem 1rem 1rem;
		flex-direction: column;
	}
`;

const PageWrapContainer = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	// align-items: flex-start;
	margin-top: 60px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		margin-top: 10px;
		// margin-left: 20px;
		// margin-right: 20px;
		margin-bottom: 110px;
	}
`;
