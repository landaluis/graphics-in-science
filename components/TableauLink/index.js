import React from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import TableauLinkLogo from "../../public/TableauLinkLogo.svg";

export default function TableauLink({ color }) {
	return (
		<>
			<LinkContainer>
				<StyledLink
					href={"https://public.tableau.com/app/profile/andres.alegria/vizzes"}
					style={{
						textDecoration: "none",
						color: color,
					}}>
					<Image src={TableauLinkLogo} alt="TableauLink" />
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
