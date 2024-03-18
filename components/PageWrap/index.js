import React from "react";
import styled from "styled-components";
import Services from "../Services";
import CardExamples from "../CardExamples";
import MyStory from "../MyStory";
import Contact from "../Contact";
import IntroParagraphGlobeSection from "../IntroParagraphGlobeSection";

export default function PageWrap({ ref1, ref2, ref3, handleWorkTogether }) {
	return (
		<>
			<PageWrapContainer>
				<SeparationDiv></SeparationDiv>

				{/* <IntroParagraphGlobeSection handleWorkTogether={handleWorkTogether} /> */}

				<Services ref2={ref2} handleWorkTogether={handleWorkTogether} />

				<CardExamples ref1={ref1} />

				<MyStory />

				<Contact ref3={ref3} />
			</PageWrapContainer>
		</>
	);
}

const SeparationDiv = styled.div`
	height: 2.5rem;
	@media (max-width: 1350px) {
		height: 1.5rem;
	}
	@media (max-width: 1280px) {
		height: 0.5rem;
	}

	@media (max-width: 1150px) {
		height: 0;
	}
`;

const PageWrapContainer = styled.div`
	width: 100%;
	position: relative;
	grid-column-gap: 3rem;
	grid-row-gap: 3rem;
	overflow: hidden;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	padding: 0 3rem 4rem;
	flex-direction: column;

	@media (max-width: 1024px) {
		padding: 0 2.5rem 4rem;
	}

	@media (max-width: 768px) {
		margin-bottom: 1rem;
	}

	@media (max-width: 640px) {
		padding: 0 2rem 4rem;
	}

	@media (max-width: 500px) {
		padding: 0 1rem 4rem;
	}

	@media (max-width: 402px) {
		padding: 0 0.5rem 3rem;
		margin-bottom: 0;
		grid-row-gap: 2rem;
	}
`;
