import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function LearnMoreLink({ href }) {
	return (
		<>
			<LearMoreLinkContainer>
				<Link
					href={href}
					style={{
						textDecoration: "none",
						color: "black",
					}}>
					Learn More →
				</Link>
			</LearMoreLinkContainer>
		</>
	);
}

const LearMoreLinkContainer = styled.div`
	font-family: "Arial", sans-serif;
	font-size: 0.8rem;
	padding-right: 1.3rem;
	margin-top: 1rem;
`;
