import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function AtlasLink({ href }) {
	return (
		<>
			<AtlasLinkContainer>
				<Link
					href={href}
					style={{
						textDecoration: "none",
						color: "#10212A",
					}}>
					Formato interactivo 3D
				</Link>
			</AtlasLinkContainer>
		</>
	);
}

const AtlasLinkContainer = styled.div`
	font-family: "Arial", sans-serif;
	font-size: 0.8rem;
	padding-right: 1.3rem;
	margin-top: 1rem;
`;
