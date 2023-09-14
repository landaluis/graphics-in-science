import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function ExamplesLink() {
	return (
		<ExamplesLinkContainer>
			<Link
				href={"/examples"}
				style={{
					textDecoration: "none",
					color: "black",
				}}>
				Examples
			</Link>{" "}
		</ExamplesLinkContainer>
	);
}

const ExamplesLinkContainer = styled.div`
	font-family: "AvertaDemo-Regular", sans-serif;
	padding: 8px 10px;
	font-size: 1.1rem;
	text-decoration: none;
	color: black;
`;
