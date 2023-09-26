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
	background-color: var(--black01);
	width: 100%;
	height: 2.5px;
`;
const SeparationUp = styled.div`
	background-color: var(--separation-line);
	width: 100%;
	height: 1px;
`;

const LinksSection = styled.div`
	display: flex;
	flex-wrap: wrap;
`;

const EmailSection = styled.div``;

const RightSectionContact = styled.div`
	font-family: "Arial", sans-serif;
	font-size: 1.25rem;
	line-height: 1.45;
	display: flex;
	flex-direction: column;
	grid-column-gap: 1.5rem;
	grid-row-gap: 1.5rem;
`;

const LeftSectionContact = styled.div`
	margin-top: 0;
	margin-bottom: 0;
	font-family: "Times New Roman", serif;
	font-size: 2.5rem;
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
	padding: 5rem;
	position: relative;
	background-color: var(--blueContact-us);
	color: var(--background-white);
	font-family: Times Roman Regular;
	font-size: 1.25rem;
	line-height: 1.45;
`;
