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
	font-family: "Arial", sans-serif;
	font-size: 1.1rem;
	padding: 8px 10px;
`;
