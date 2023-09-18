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
	@media (max-width: 768px) {
		margin-top: 1.5rem;
		margin-bottom: 3rem;
	}
`;
const Content = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
}
`;

const ParagraphText = styled.p`
	margin-top: 0;
	font-size: 0.9rem;
	margin-bottom: 0;
	margin-right: 2rem;
	line-height: 1.2rem;
`;
const ParagraphTitle = styled.h1`
	font-size: 2.25rem;
	font-family: Times Roman Regular;
	line-height: 2.6rem;
`;

const ParagraphContainer = styled.div`
	color: #303538;
	width: calc(((100% - 16.5rem) / 12) * 5 + 6rem);
	// width: 40%;
	// padding: 20px;
	font-family: "AvertaDemo-Regular", sans-serif;
	font-size: 1rem;
	line-height: 27px;
	grid-row-gap: 2rem;
	// text-align: justify;

	@media (max-width: 768px) {
		width: 100%;
		margin-top: 20px;
	}
`;
