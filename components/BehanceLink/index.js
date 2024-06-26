import React from "react";
import styled from "styled-components";
import Link from "next/link";
import BehanceLinkLogo from "../../public/BehanceLinkLogo.svg";
import Image from "next/image";

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
					<Image src={BehanceLinkLogo} alt="BehanceLink" />
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
