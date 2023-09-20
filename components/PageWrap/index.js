import React from "react";
import styled from "styled-components";
import Paragraph from "../Paragraph";
import Globe from "../Globe";
import Services from "../Services";
import CardExample from "../CardExample";
import MoreExamples from "../MoreExamples";
import MyStory from "../MyStory";
import Contact from "../Contact";

export default function PageWrap() {
	return (
		<PageWrapContainer>
			<ParagraphSphereSection>
				<Paragraph />
				<Globe />
			</ParagraphSphereSection>

			<Services />
			<CardExample
				imageUrl="../TitleExample1.jpg"
				title="Climate Science"
				text="Supported the developing of more than 300 figures featured the
		6th Assesment Report of the Intergovernmental Panel on Climate
		Change."
				learnMoreLink="https://example.com/page1"
				imageUrl2="../ImageExample1.jpg"
			/>
			<CardExample
				imageUrl="../TitleExample2.jpg"
				title="Environmental media"
				text="I help environmental journalist in designing data-driven graphic products
				that can effectively communicate complex information to a general audience
				who may not be experts in the field."
				learnMoreLink="https://example.com/page1"
				imageUrl2="../ImageExample2.jpg"
			/>

			<CardExample
				imageUrl="../TitleExample3.jpg"
				title="Interactive dashboards"
				text="I create interactive visualizations for scientist and wider audiences."
				learnMoreLink="https://example.com/page1"
				imageUrl2="../ImageExample3.jpg"
			/>

			<CardExample
				imageUrl="../TitleExample4.jpg"
				title="Fisheries management"
				text="In the context of coral reef conservation in the Caribbean, I have supported
				communication compaigns targeting a wide array of stakeholders demanding diverse media
				outputs."
				learnMoreLink="https://example.com/page1"
				imageUrl2="../ImageExample4.jpg"
			/>

			<MoreExamples />
			<MyStory />
			<Contact />
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
	grid-column-gap: 3rem;
	grid-row-gap: 3rem;
	overflow: hidden;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	// padding-top: 6rem;
	padding-bottom: 4rem;
	padding-right: 3rem;
	padding-left: 3rem;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		margin-top: 10px;
		margin-bottom: 110px;
	}
`;
