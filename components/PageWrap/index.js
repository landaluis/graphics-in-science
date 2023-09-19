import React from "react";
import styled from "styled-components";
import Paragraph from "../Paragraph";
import Globe from "../Globe";
import Services from "../Services";

export default function PageWrap() {
	return (
		<PageWrapContainer>
			<ParagraphSphereSection>
				<Paragraph />
				<Globe />
			</ParagraphSphereSection>

			<Services />
		</PageWrapContainer>
	);
}

const ParagraphSphereSection = styled.div`
	padding: 4rem;
	padding: 1.5rem 3rem 6rem;
	display: flex;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 768px) {
		padding: 1rem 1rem 1rem;
		flex-direction: column;
	}
`;

const PageWrapContainer = styled.div`
	overflow: hidden;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	// padding-top: 6rem;
	padding-bottom: 6rem;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		margin-top: 10px;
		margin-bottom: 110px;
	}
`;
