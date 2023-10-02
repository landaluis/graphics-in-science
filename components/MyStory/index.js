import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function MyStory() {
	return (
		<>
			<MyStoryIntroContainer>
				{" "}
				<MyStoryIntroText>
					Hi, my name is Andrés Alegria. Graphics in Science is my freelancing
					front page to offer my services as data scientist and graphic
					designer. I&apos;m also a marine ecologist and a pationate reef
					hugger. I enjoy working with graphics almost as much I like being
					underwater.
				</MyStoryIntroText>
				<MyStoryLinkContainer>
					<Link
						href={"/about"}
						style={{
							textDecoration: "none",
							color: "#D9DAD9",
						}}>
						My story
					</Link>
				</MyStoryLinkContainer>
			</MyStoryIntroContainer>
		</>
	);
}

const MyStoryIntroContainer = styled.div`
	grid-column-gap: 2rem;
	grid-row-gap: 2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	width: 100%;

	@media (max-width: 402px) {
		margin-top: 2rem;
	}
`;
const MyStoryLinkContainer = styled.div`
	font-family: "Arial", sans-serif;
	font-size: 1rem;
	background-color: var(--blueContact-us);
	display: flex;
	align-items: center;
	margin-left: calc(-55%);
	position: relative;
	padding: 0.8rem 1.175rem;

	@media (max-width: 402px) {
		margin-top: 0.5rem;
		margin-left: calc(-50%);
	}
`;

const MyStoryIntroText = styled.p`
	width: 60%;
	display: flex;
	justify-content: center;
	font-family: "Times Roman Regular", serif;
	font-size: 1.9rem;
	line-height: 1.3;
	text-align: justified;
	padding: 0 4rem 0;
	color: var(--black01);

	@media (max-width: 1280px) {
		width: 70%;
	}

	@media (max-width: 1100px) {
		width: 80%;
	}

	@media (max-width: 900px) {
		width: 85%;
	}

	@media (max-width: 800px) {
		width: 95%;
	}

	@media (max-width: 768px) {
		font-size: 1.7rem;
		padding: 0 3rem 0;
	}

	@media (max-width: 630px) {
		font-size: 1.6rem;
		padding: 0 2rem 0;
	}

	@media (max-width: 590px) {
		font-size: 1.5rem;
		padding: 0 1rem 0;
	}

	@media (max-width: 402px) {
		width: 77%;
		padding: 0;
		text-align: left;
		font-size: 1.6rem;
		margin: 0;
	}
`;
