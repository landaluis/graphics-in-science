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
	// font-family: "AvertaDemo-Regular", sans-serif;
	// padding: 8px 10px;
	font-size: 1rem;
	// font-weight: 500;
	// text-decoration: none;
	// color: black;
	padding-right: 1.3rem;
	// padding: 0.8rem 1.175rem;
	font-size: 1rem;
	margin-top: 1rem;
`;
