import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function MoreExamples() {
	return (
		<>
			<MoreExamplesContainer>
				<Link
					href={"/about"}
					style={{
						textDecoration: "none",
						color: "white",
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
	font-size: 1rem;
	font-color: var(--background-white);
	background-color: var(--blueContact-us);
	font-family: "Arial", sans-serif;
`;
