import React from "react";
import styled from "styled-components";
import Image from "next/image";
import LearnMoreLink from "../LearnMoreLink";
import AtlasLink from "../AtlasLink";

export default function CardExample({
	image01,
	image02,
	title,
	text,
	learnMoreLink,
	atlasLink,
	ref2,
}) {
	return (
		<>
			<CardContainer ref={ref2}>
				<Card>
					<CardSectionContainer>
						<LeftSectionCard>
							<ImageTitleContainer>
								{" "}
								<Image
									src={image01 || ""}
									alt={image01 ? "TitleExample" : ""}
									style={{
										objectFit: "contain",
										width: "60%",
										position: "relative",
										height: "unset",
									}}
								/>
							</ImageTitleContainer>
							<Title>{title}</Title>
							<Text>{text}</Text>
							<LearnMoreLink href={learnMoreLink}>Learn more</LearnMoreLink>
							{atlasLink && (
								<AtlasLink href={atlasLink}>Formato Interactivo 3D</AtlasLink>
							)}
						</LeftSectionCard>
						<RightSectionCard>
							<ImageRightContainer>
								{" "}
								<Image
									src={image02}
									alt="Image Example"
									style={{
										objectFit: "contain",
										width: "100%",
										position: "relative",
										height: "unset",
									}}
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

	font-size: 0.95rem;
	line-height: 1.3rem;
	color: var(--grey02);

	@media (max-width: 1620px) {
	}

	@media (max-width: 1280px) {
		line-height: 1.2rem;
	}
`;

const Title = styled.h3`
	color: var(--blueContact-us);
	font-family: "PlayfairDisplay-Bold", serif;
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
	width: 100%;

	@media (max-width: 1024px) {
		padding: 1.5rem 1.5rem;
	}

	@media (max-width: 600px) {
		padding: 1.4rem 1.4rem;
	}

	@media (max-width: 402px) {
		padding: 1.2rem 1.1rem;
	}
`;

const CardSectionContainer = styled.div`
	display: flex;
	position: relative;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;

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
	position: unset !important;
	position: relative;
	margin-bottom: 2rem;

	@media (max-width: 402px) {
		margin-top: 0;
		margin-bottom: 0.3rem;
	}
`;

const ImageRightContainer = styled.div`
	width: 25rem;
	position: unset !important;

	@media (max-width: 820px) {
		width: 100%;
	}
`;
