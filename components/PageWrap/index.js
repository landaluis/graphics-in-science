import React, { useRef } from "react";
import styled from "styled-components";
import Services from "../Services";
import CardExample from "../CardExample";
import MoreExamples from "../MoreExamples";
import MyStory from "../MyStory";
import Contact from "../Contact";
import IntroParagraphGlobeSection from "../IntroParagraphGlobeSection";

export default function PageWrap({ ref1, ref2, ref3, handleWorkTogether }) {
	return (
		<>
			<PageWrapContainer>
				<SeparationDiv></SeparationDiv>
				<IntroParagraphGlobeSection handleWorkTogether={handleWorkTogether} />
				<Services ref2={ref2} />

				<CardExample
					imageUrl="../TitleExample1.jpg"
					title="Climate Science"
					text="Supported the development of more than 300 figures featured the
		6th Assesment Report of the Intergovernmental Panel on Climate
		Change."
					learnMoreLink="https://www.behance.net/gallery/151953673/My-experience-with-the-IPCC
					"
					imageUrl2="../ImageExample1.jpg"
				/>
				<CardExample
					imageUrl="../TitleExample2.jpg"
					title="Environmental media"
					text="I help environmental journalist design data-driven graphic products
				that can effectively communicate complex information to a general audience
				who may not be experts in the field."
					learnMoreLink="https://www.behance.net/gallery/146417585/Maps-for-articles"
					imageUrl2="../ImageExample2.jpg"
				/>
				<CardExample
					imageUrl="../TitleExample3.jpg"
					title="Interactive dashboards"
					text="I create interactive visualizations for scientist and wider audiences."
					learnMoreLink="https://public.tableau.com/app/profile/andres.alegria/vizzes"
					imageUrl2="../ImageExample3.jpg"
				/>
				<CardExample
					imageUrl="../TitleExample4.jpg"
					title="Fisheries management"
					text="In the context of coral reef conservation in the Caribbean, I have supported
				communication compaigns targeting a wide array of stakeholders demanding diverse media
				outputs."
					learnMoreLink="https://www.behance.net/gallery/38040031/Fishermens-Magazine-3"
					imageUrl2="../ImageExample4.jpg"
				/>
				<MoreExamples ref1={ref1} />
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

	@media (max-width: 1024px) {
		padding: 0 2.5rem 4rem;
	}

	@media (max-width: 768px) {
		align-items: center;
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
