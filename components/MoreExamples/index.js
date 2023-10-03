import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function MoreExamples({ ref1 }) {
	return (
		<>
			<MoreExamplesContainer ref={ref1}>
				<Link
					href="https://www.behance.net/andres-alegria"
					style={{
						textDecoration: "none",
						color: "#D9DAD9",
					}}>
					More Examples
				</Link>
			</MoreExamplesContainer>
		</>
	);
}

const MoreExamplesContainer = styled.div`
	display: flex;
	position: relative;
	justify-content: center;
	align-items: center;
	padding: 0.8rem 1.175rem;
	margin: 2rem;
	font-family: "Arial", sans-serif;
	font-size: 0.9rem;

	background-color: var(--blueContact-us);

	@media (max-width: 402px) {
		margin: 1rem;
	}
`;
