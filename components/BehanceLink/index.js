import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaBehanceSquare } from "react-icons/fa";

export default function BehanceLink({ color }) {
	return (
		<>
			<LinkContainer>
				<StyledLink
					href={"https://www.behance.net/andres-alegria"}
					style={{
						textDecoration: "none",
						color: color,
					}}>
					<FaBehanceSquare
						style={{
							height: "25px",
							width: "auto",
							marginRight: "0.5rem",
						}}
					/>
					Behance
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
