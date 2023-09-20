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
					<Label>© 2023 GRAPHICS IN SCIENCE St.Nr.6020130782</Label>
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
	grid-column-gap: 3rem;
	flex-wrap: wrap;
	justify-content: center;
`;

const FooterContainer = styled.div`
	padding-right: 3rem;
	padding-left: 3rem;
	padding-bottom: 5rem;
	padding-top: 0rem;
	font-family: "AvertaDemo-Regular", sans-serif;

	// font-size: 16px;
	// font-family: "CaviarDreams", sans-serif;
	// margin-bottom: 0px;
	// padding-bottom: 20px;
	// padding-top: 20px;
	// background-color: #7e9ba5;
	// position: fixed;
	// bottom: 0;
	// left: 0;
	// width: 100%;
	// height: 80px;
`;
const InfoLine = styled.div`
	width: calc(100vw - 6rem);
	min-width: 0;
	max-width: 97.5rem;
	color: #0e2129;

	font-size: 1.25rem;
	line-height: 1.45;
	margin-left: auto;
	margin-right: auto;
	grid-column-gap: 3rem;
	grid-row-gap: 3rem;
	flex-direction: column;
	display: flex;

	// display: flex;
	// align-items: center;
	// padding: 5px 20px;
	// margin: 0px;
`;

const Label = styled.p`
	font-size: 1rem;
	font-weight: 500;
	line-height: 1.45;
	color: #0e2129;
	text-align: center;
	margin-bottom: 0;
	margin-top: 0;

	// font-family: "CaviarDreams", sans-serif;
	// margin-right: 10px;
	// color: white;
	// min-width: 60px;
`;
