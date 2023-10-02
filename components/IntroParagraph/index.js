import React from "react";
import styled from "styled-components";
import LetsWorkLink from "../LetsWorkLink";
import LinkedInLink from "../LinkedInLink";
import BehanceLink from "../BehanceLink";

export default function IntroParagraph() {
	return (
		<>
			<ParagraphContainer>
				<ParagraphTitle>
					Enabling effective communication and smart decisions
				</ParagraphTitle>
				<Content>
					{" "}
					<ParagraphText>
						Communicating effectively means presenting knowledge to your
						audience in a way that they can learn from it.
					</ParagraphText>
					<LetsWorkLinkContainer>
						<LetsWorkLink />
					</LetsWorkLinkContainer>
					<LinkedInBehanceContainer>
						<LinkedInLink color="var(--grey02)" />
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
	margin-top: 3rem;
	z-index: -1;

	@media (max-width: 890px) {
		margin-top: 2rem;
		margin-bottom: 0.5rem;
	}

	@media (max-width: 768px) {
		z-index: -1;
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
	font-size: 1rem;
	line-height: 1.2rem;

	@media (max-width: 1024px) {
		font-size: 0.95rem;
		line-height: 1.3rem;
	}
`;
const ParagraphTitle = styled.h1`
	font-family: "Times New Roman", serif;
	font-size: 3.25rem;
	font-weight: bold;
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
		line-height: 3rem;
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

	@media (max-width: 768px) {
	}
`;
