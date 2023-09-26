import React from "react";
import styled from "styled-components";
import LetsWorkLink from "../LetsWorkLink";
import LinkedInLink from "../LinkedIn";
import TwitterLink from "../Twitter";

export default function Paragraph() {
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
						audience in a way that they can learn from it
					</ParagraphText>
					<LetsWorkLinkContainer>
						<LetsWorkLink />
					</LetsWorkLinkContainer>
					<LinkedInTwitterContainer>
						<LinkedInLink />
						<TwitterLink />
					</LinkedInTwitterContainer>
				</Content>
			</ParagraphContainer>
		</>
	);
}

const LinkedInTwitterContainer = styled.div`
	margin-top: 3rem;

	@media (max-width: 768px) {
		margin-top: 1.5rem;
		margin-bottom: 3rem;
	}
`;

const LetsWorkLinkContainer = styled.div`
	margin-top: 3rem;
	z-index: -1;

	@media (max-width: 768px) {
		z-index: -1;
		margin-top: 1.5rem;
		margin-bottom: 3rem;
	}
`;
const Content = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
`;

const ParagraphText = styled.p`
	margin: 0 2rem 0 0;
	font-family: "Arial";
	font-size: 1rem;
	line-height: 1.2rem;
`;
const ParagraphTitle = styled.h1`
	font-family: "Times New Roman", serif;
	font-size: 3.25rem;
	font-weight: lighter;
	line-height: 3.6rem;
`;

const ParagraphContainer = styled.div`
	color: var(--black01);
	width: 40%;
	font-family: "Arial", sans-serif;
	font-size: 1rem;
	line-height: 27px;
	grid-row-gap: 2rem;

	@media (max-width: 768px) {
		width: 100%;
		margin-top: 20px;
	}
`;
