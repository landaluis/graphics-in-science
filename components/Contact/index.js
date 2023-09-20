import React from "react";
import styled from "styled-components";
import LinkedInLink from "../LinkedIn";
import TwitterLink from "../Twitter";

export default function Contact() {
	return (
		<>
			<SeparationUp></SeparationUp>

			<ContactWrapper>
				<ContactInfo>
					<LeftSectionContact>Contact us</LeftSectionContact>
					<RightSectionContact>
						<EmailSection>andres@graphicsinscience.com</EmailSection>
						<LinksSection>
							<LinkedInLink />
							<TwitterLink />
						</LinksSection>
					</RightSectionContact>
				</ContactInfo>
			</ContactWrapper>

			<SeparationDown></SeparationDown>
		</>
	);
}

const SeparationDown = styled.div`
	background-color: black;
	width: 100%;
	height: 2.5px;
`;
const SeparationUp = styled.div`
	background-color: #959c9e;
	width: 100%;
	height: 1px;
`;

const LinksSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	color: #efeeec;
	color: #efeeec;
`;

const EmailSection = styled.div`
	color: #acb1b2;
`;

const RightSectionContact = styled.div`
	color: #0e2129;
	background-color: #25363d;
	font-family: "AvertaDemo-Regular", sans-serif;
	font-size: 1.25rem;
	line-height: 1.45;
	flex-direction: column;
	display: flex;
	grid-column-gap: 1.5rem;
	grid-row-gap: 1.5rem;
`;

const LeftSectionContact = styled.div`
	color: #efeeec;
	margin-top: 0;
	margin-bottom: 0;
	font-family: Times Roman Regular;
	font-size: 2.5rem;
	font-weight: 700;
	line-height: 1.25;
`;

const ContactInfo = styled.div`
	display: flex;
	justify-content: space-between;
	grid-column-gap: 3rem;
	grid-row-gap: 3rem;
`;

const ContactWrapper = styled.div`
	width: 100%;
	// margin-left: auto;
	// margin-right: auto;
	padding: 5rem;
	position: relative;
	color: #0e2129;
	background-color: #25363d;
	font-family: Times Roman Regular;
	font-size: 1.25rem;
	line-height: 1.45;
	font-family: Times Roman Regular;
`;
