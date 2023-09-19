import React from "react";
import styled from "styled-components";
import Logo from "../Logo";
import Paragraph from "../Paragraph";
import Globe from "../Globe";

export default function PageWrap() {
	return (
		<PageWrapContainer>
			<ParagraphSphereSection>
				<Paragraph />
				{/* <SquareParagraph /> */}
				{/* <Logo /> */}
				{/* <GlobeContainer> */}
				<Globe />
				{/* </GlobeContainer> */}
			</ParagraphSphereSection>
		</PageWrapContainer>
	);
}

// const GlobeContainer = styled.div`
// width: 100%;
// height: 100vh;

// @media (max-width: 768px) {
// 	.container {
// 	  width: 80%;
// 	  height: 80vh;

// 	}
// 	@media (max-width: 480px) {
// 		.container {
// 		  width: 80%;
// 		  height: 60vh;
// 		}

// `;

const ParagraphSphereSection = styled.div`
	padding: 4rem;
	padding: 1.5rem 3rem 1.2rem;
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
	// margin-top: 60px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		margin-top: 10px;
		// margin-left: 20px;
		// margin-right: 20px;
		margin-bottom: 110px;
	}
`;
