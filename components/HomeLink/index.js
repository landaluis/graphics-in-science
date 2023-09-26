import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function HomeLink() {
	return (
		<HomeLinkContainer>
			<Link
				href={"/"}
				style={{
					textDecoration: "none",
					color: "#10212A",
				}}>
				Home
			</Link>
		</HomeLinkContainer>
	);
}

const HomeLinkContainer = styled.div`
	font-family: "Arial", sans-serif;
	padding: 8px 10px;
	font-size: 1.1rem;
`;
