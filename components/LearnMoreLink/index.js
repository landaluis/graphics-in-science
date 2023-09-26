import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function LearnMoreLink() {
	return (
		<>
			<LearMoreLinkContainer>
				<Link
					href={"/about"}
					style={{
						textDecoration: "none",
						color: "black",
					}}>
					Learn More
				</Link>
			</LearMoreLinkContainer>
		</>
	);
}

const LearMoreLinkContainer = styled.div`
	font-family: "Arial", sans-serif;
	font-size: 1rem;
	padding-right: 1.3rem;
	margin-top: 1rem;
`;
