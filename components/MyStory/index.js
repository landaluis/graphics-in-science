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
					designer. I'm also a marine ecologist and a pationate reef hugger. I
					enjoy working with graphics almost as much I like being underwater.
				</MyStoryIntroText>
				<MyStoryLinkContainer>
					<Link
						href={"/about"}
						style={{
							textDecoration: "none",
							color: "white",
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
	align-items: flex-start;
	flex-direction: column;
`;
const MyStoryLinkContainer = styled.div`
	font-family: "Arial", sans-serif;
	font-size: 1rem;
	background-color: var(--blueContact-us);
	display: flex;
	justify-content: center;
	align-items: center;
	margin-left: 10%;
	position: relative;
	padding: 0.8rem 1.175rem;
`;

const MyStoryIntroText = styled.p`
	display: flex;
	justify-content: center;
	font-family: Times Roman Regular;
	font-size: 1.9rem;
	line-height: 1.3;
	text-align: center;
	padding: 0 4rem 0;
`;