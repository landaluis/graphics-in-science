import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaLinkedin } from "react-icons/fa";

export default function LinkedInLink() {
	return (
		<>
			<LinkContainer>
				<FaLinkedin
					style={{
						height: "25px",
						width: "auto",
					}}
				/>
				<StyledLink
					href={"https://www.linkedin.com"}
					style={{
						textDecoration: "none",
						color: "black",
					}}>
					LinkedIn
				</StyledLink>
			</LinkContainer>
		</>
	);
}

const StyledLink = styled(Link)`
	margin-left: 10px;
	padding-bottom: 20px;
`;
const LinkContainer = styled.div`
	max-width: 100%;
	display: inline-block;
	margin-right: 35px;
`;
