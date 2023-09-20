import React from "react";
import styled from "styled-components";
import LearnMoreLink from "../LearnMoreLink";
import Paragraph from "../Paragraph";

export default function CardExample({
	imageUrl,
	imageUrl2,
	title,
	text,
	learnMoreLink,
}) {
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
										style={{ width: "80%", height: "auto" }}
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

const ImageRightContainer = styled.div``;
const ImageTitleContainer = styled.div``;
const SectionWrapper = styled.div``;

const RightSectionCard = styled.div`
	flex: 1;
	align-items: center;
`;

const Text = styled.p`
	font-family: "AvertaDemo-Regular", sans-serif;
	font-size: 0.7rem;
	color: black;
`;

const Title = styled.h3`
	color: black;
	font-family: Times Roman Regular;
	// font-size: 18px;
	margin: 10px 0;
	display: flex;
`;
// const Image = styled.img`
// 	max-width: 100%;
// 	height: auto;
// `;
const LeftSectionCard = styled.div`
	flex: 1;
	padding-right: 0;
	padding-bottom: 0;
	padding-left: 0;
	padding: 1rem;
`;

const CardSectionContainer = styled.div`
	grid-column-gap: 2.5rem;
	grid-row-gap: 2.5rem;
	display: flex;
	align-items: center;
`;

const CardContainer = styled.div`
	transform: scale(1);
	margin: 0rem 6rem 0rem;
	position: sticky;
	transform-origin: 50% 0;
	font-family: Noto Sans Display, sans-serif;
	font-size: 1.25rem;
	line-height: 1.45;
`;

const Card = styled.div`
	border-style: solid;
	border-width: 3px;
	color: #687377;
	padding-right: 2rem;
	padding-left: 2rem;
	padding-top: 1.5rem;
	padding-bottom: 1.5rem;
`;
