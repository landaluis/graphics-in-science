import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaTwitterSquare } from "react-icons/fa";

export default function TwitterLink() {
	return (
		<>
			<LinkContainer>
				<FaTwitterSquare
					style={{
						height: "25px",
						width: "auto",
					}}
				/>
				<StyledLink
					href={"https://twitter.com/"}
					style={{
						textDecoration: "none",
						color: "black",
					}}>
					Twitter
				</StyledLink>
			</LinkContainer>
		</>
	);
}
const StyledLink = styled(Link)`
	margin-left: 10px;
`;
const LinkContainer = styled.div`
	max-width: 100%;
	display: inline-block;
`;
