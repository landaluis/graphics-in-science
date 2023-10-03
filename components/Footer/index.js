import React from "react";
import styled from "styled-components";
import AboutLink from "../AboutLink";
import ExamplesLink from "../ExamplesLink";
import HomeLink from "../HomeLink";

export default function Footer() {
	return (
		<>
			<FooterContainer>
				<InfoLine>
					<Label>© 2023 GRAPHICS IN SCIENCE - St.Nr.6020130782</Label>
					<LinksFooterWrapper>
						<HomeLink />
						<AboutLink />
						<ExamplesLink />
					</LinksFooterWrapper>
				</InfoLine>
			</FooterContainer>
		</>
	);
}

const LinksFooterWrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	grid-column-gap: 3rem;
	flex-wrap: wrap;

	@media (max-width: 402px) {
		grid-column-gap: 1rem;
	}
`;

const FooterContainer = styled.div`
	padding: 0 0rem 5rem 0;
	font-family: "CormorantGaramond", serif;
	display: flex;

	@media (max-width: 402px) {
		padding: 0 0 3rem 0;
	}
`;
const InfoLine = styled.div`
	color: var(--black01);
	line-height: 1.45;
	margin-left: auto;
	margin-right: auto;
	grid-column-gap: 3rem;
	grid-row-gap: 3rem;
	display: flex;
	flex-direction: column;
`;

const Label = styled.p`
	font-size: 0.8rem;
	font-stretch: condensed;
	line-height: 1.45;
	text-align: center;
	margin: 0;
`;
