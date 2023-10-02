import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function LinkedInLink({ color }) {
	return (
		<>
			<LinkContainer>
				<StyledLink
					href={"https://www.linkedin.com"}
					style={{
						textDecoration: "none",
						color: color,
					}}>
					<FaLinkedin
						style={{
							height: "25px",
							width: "auto",
							marginRight: "0.5rem",
						}}
					/>
					LinkedIn
				</StyledLink>
			</LinkContainer>
		</>
	);
}
const StyledLink = styled(Link)`
	display: flex;
	align-items: center;
	font-size: 0.9rem;
	font-family: "Arial", sans-serif;
`;
const LinkContainer = styled.div`
	max-width: 100%;
	grid-column-gap: 0.5rem;
	display: inline-block;
`;
