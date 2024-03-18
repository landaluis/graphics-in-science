import React from "react";
import styled from "styled-components";
import LetsWorkLink from "../LetsWorkLink";
import BehanceLink from "../BehanceLink";
import TableauLink from "../TableauLink";

export default function IntroParagraph({ handleWorkTogether }) {
	return (
		<>
			<ParagraphContainer>
				<ParagraphTitle>
					Enabling effective communication and smart decisions
				</ParagraphTitle>
				<Content>
					{" "}
					<ParagraphText>
						When utilizing data visualizations, it is crucial to convey the
						purpose of your data through careful design sensitivities to achieve
						effective communication. Whenever you share information with your
						audience, ensure that it is presented in a manner that facilitates
						learning.
					</ParagraphText>
					<LetsWorkLinkContainer>
						<LetsWorkLink handleWorkTogether={handleWorkTogether} />
					</LetsWorkLinkContainer>
					<LinkedInBehanceContainer>
						<TableauLink color="var(--grey02)" />
						<BehanceLink color="var(--grey02)" />
					</LinkedInBehanceContainer>
				</Content>
			</ParagraphContainer>
		</>
	);
}

const LinkedInBehanceContainer = styled.div`
	margin-top: 3rem;
	grid-column-gap: 3rem;
	flex-wrap: wrap;
	display: flex;

	@media (max-width: 890px) {
		margin-top: 2rem;
		margin-bottom: 3rem;
	}
	@media (max-width: 768px) {
		margin-top: 1.5rem;
		margin-bottom: 2.5rem;
	}
	@media (max-width: 402px) {
		grid-column-gap: 1.5rem;
	}
`;

const LetsWorkLinkContainer = styled.div`
	display: flex;
	margin-top: 3rem;
	justify-content: flex-start;

	@media (max-width: 890px) {
		margin-top: 2rem;
		margin-bottom: 0.5rem;
	}

	@media (max-width: 768px) {
		margin-top: 1.5rem;
		margin-bottom: 1rem;
	}

	@media (max-width: 402px) {
		font-size: 12rem;
	}
`;
const Content = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
`;

const ParagraphText = styled.p`
	max-width: 90%;
	margin: 0 2rem 0 0;
	font-family: "Arial";
	font-size: 1.1rem;
	line-height: 1.4rem;

	@media (max-width: 1024px) {
		font-size: 0.95rem;
	}
`;
const ParagraphTitle = styled.h1`
	font-family: "PlayfairDisplay-Bold", serif;
	font-size: 3.55rem;
	color: var(--blueContact-us);
	line-height: 3.6rem;

	@media (max-width: 1280px) {
		font-size: 2.9rem;
	}

	@media (max-width: 1024px) {
		font-size: 2.4rem;
		line-height: 3rem;
	}

	@media (max-width: 890px) {
		font-size: 2.2rem;
	}
`;

const ParagraphContainer = styled.div`
	color: var(--black01);
	font-family: "Arial", sans-serif;
	grid-row-gap: 2rem;
	width: 45%;

	@media (max-width: 1350px) {
	}

	@media (max-width: 1300px) {
		width: 40%;
	}
	@media (max-width: 820px) {
		width: 95%;
	}
`;
