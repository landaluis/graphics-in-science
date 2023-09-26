import React from "react";
import styled from "styled-components";
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
	font-family: "Arial", sans-serif;
	font-size: 0.7rem;
	color: var(--black01);
`;

const Title = styled.h3`
	color: var(--black01);
	font-family: Times Roman Regular;
	margin: 10px 0;
	display: flex;
`;

const LeftSectionCard = styled.div`
	flex: 1;
	padding: 1rem 0;
`;

const CardSectionContainer = styled.div`
	grid-column-gap: 2.5rem;
	grid-row-gap: 2.5rem;
	display: flex;
	align-items: center;
`;

const CardContainer = styled.div`
	transform: scale(1);
	margin: 0 6rem 0;
	position: sticky;
	font-family: Noto Sans Display, sans-serif;
	font-size: 1.25rem;
	line-height: 1.45;
`;

const Card = styled.div`
	border-style: solid;
	border-width: 3px;
	color: var(--black01);
	padding: 1.5rem 2rem;
`;
