import React from "react";
import styled from "styled-components";
import Image from "next/image";
import LearnMoreLink from "../LearnMoreLink";

export default function CardExample({ imageUrl, imageUrl2, title, text }) {
	return (
		<>
			<CardContainer>
				<Card>
					<CardSectionContainer>
						<LeftSectionCard>
							<SectionWrapper>
								<ImageTitleContainer>
									{" "}
									<img
										src={imageUrl}
										alt="TitleExample"
										style={{ width: "60%", height: "auto" }}
									/>
								</ImageTitleContainer>

								<Title>{title}</Title>
								<Text>{text}</Text>
								<LearnMoreLink>Learn more</LearnMoreLink>
							</SectionWrapper>
						</LeftSectionCard>
						<RightSectionCard>
							<ImageRightContainer>
								{" "}
								<img
									src={imageUrl2}
									alt="ImageExample"
									style={{ width: "100%", height: "auto" }}
								/>
							</ImageRightContainer>
						</RightSectionCard>
					</CardSectionContainer>
				</Card>
			</CardContainer>
		</>
	);
}

const Text = styled.p`
	font-family: "Arial", sans-serif;
	width: 90%;
	// min-width: 60rem;
	font-size: 0.95rem;
	line-height: 1.3rem;
	color: var(--grey01);

	@media (max-width: 1620px) {
		min-width: 0;
	}

	@media (max-width: 1280px) {
		line-height: 0.9rem;
	}

	@media (max-width: 820px) {
		line-height: 1.2rem;
	}
`;

const Title = styled.h3`
	color: var(--black01);
	font-family: "Times Roman Regular";
	font-weight: bold;
	font-size: 2rem;
	margin: 10px 0;
	display: flex;

	@media (max-width: 820px) {
		font-size: 1.7rem;
	}
`;

const LeftSectionCard = styled.div`
	padding: 1rem 0;
	order: 1;

	@media (max-width: 820px) {
		order: 2;
	}
`;

const CardContainer = styled.div`
	grid-column-gap: 2.5rem;
	grid-row-gap: 2.5rem;
	display: flex;
	align-items: center;
	width: 75%;

	@media (max-width: 1420px) {
		width: 90%;
	}

	@media (max-width: 820px) {
		width: 85%;
	}

	@media (max-width: 402px) {
		margin: 0 1rem 0;
		width: 87%;
	}
`;

const Card = styled.div`
	border-style: solid;
	border-width: 3px;
	color: var(--grey02);
	padding: 1.5rem 2rem;
	display: flex;

	@media (max-width: 1024px) {
		padding: 1.5rem 1.5rem;
	}

	@media (max-width: 402px) {
		padding: 1.5rem 1.5rem;
	}
`;

const CardSectionContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: row;
	align-items: center;

	@media (max-width: 820px) {
		flex-direction: column;
	}
`;

const RightSectionCard = styled.div`
	align-items: center;
	order: 2;

	@media (max-width: 820px) {
		order: 1;
	}
`;

const ImageTitleContainer = styled.div`
	margin-bottom: 2rem;

	@media (max-width: 402px) {
		margin-top: 0;
		margin-bottom: 0.3rem;
	}
`;

const ImageRightContainer = styled.div`
	width: 25rem;

	@media (max-width: 820px) {
		width: 100%;
	}
`;

const SectionWrapper = styled.div``;
