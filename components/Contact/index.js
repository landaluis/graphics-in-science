import React from "react";
import styled from "styled-components";
import LinkedInLink from "../LinkedInLink";
import BehanceLink from "../BehanceLink";

export default function Contact() {
	return (
		<>
			<SeparationUp></SeparationUp>

			<ContactWrapper>
				<ContactInfo>
					<LeftSectionContact>Contact</LeftSectionContact>
					<RightSectionContact>
						<EmailSection>andres@graphicsinscience.com</EmailSection>
						<LinksSection>
							<LinkedInLink color="var(--grey03)" />
							<BehanceLink color="var(--grey03)" />
						</LinksSection>
					</RightSectionContact>
				</ContactInfo>
			</ContactWrapper>

			<SeparationDown></SeparationDown>
		</>
	);
}

const SeparationUp = styled.div`
	background-color: var(--separation-line);
	margin-top: 1rem;
	margin-bottom: 2rem;
	width: 70%;
	height: 1.5px;

	@media (max-width: 402px) {
		width: 90%;
		height: 1px;
		margin-bottom: 0.5rem;
	}
`;

const SeparationDown = styled.div`
	background-color: var(--black01);
	margin-top: 2rem;
	width: 70%;
	height: 1.5px;

	@media (max-width: 402px) {
		width: 90%;
		height: 1px;
		margin-top: 0.9rem;
	}
`;

const LinksSection = styled.div`
	display: flex;
	flex-wrap: wrap;
	grid-column-gap: 3rem;

	@media (max-width: 640px) {
		grid-column-gap: 2rem;
	}

	@media (max-width: 560px) {
		grid-column-gap: 1rem;
	}
`;

const EmailSection = styled.div`
	font-family: "Helvetica", sans-serif;
	font-size: 1.1rem;
	color: var(--grey03);
`;

const LeftSectionContact = styled.div`
	margin-top: 0;
	margin-bottom: 0;
	font-family: "Times New Roman", serif;
	font-weight: lighter;
	font-size: 2.5rem;
	line-height: 1.25;

	@media (max-width: 402px) {
		margin: 0;
		font-size: 2rem;
	}
`;

const RightSectionContact = styled.div`
	font-family: "Arial", sans-serif;
	font-size: 1.25rem;
	line-height: 1.45;
	display: flex;
	flex-direction: column;
	grid-column-gap: 1.5rem;
	grid-row-gap: 1.5rem;
`;

const ContactInfo = styled.div`
	display: flex;
	justify-content: space-between;
	grid-column-gap: 3rem;
	grid-row-gap: 3rem;

	@media (max-width: 640px) {
		grid-column-gap: 2rem;
	}

	@media (max-width: 550px) {
		flex-direction: column;
	}

	@media (max-width: 402px) {
		// margin: 0 rem 0;
		grid-row-gap: 1.5rem;
	}
`;

const ContactWrapper = styled.div`
	position: relative;
	background-color: #3498db;
	width: 90%;
	padding: 5rem;

	position: relative;
	background-color: var(--blueContact-us);
	color: var(--background-white);
	font-family: Times Roman Regular;
	font-size: 1.25rem;
	line-height: 1.45;

	@media (max-width: 900px) {
		padding: 4rem;
		width: 95%;
	}

	@media (max-width: 820px) {
		padding: 3rem;
		width: 100vw;

		margin-left: calc(-50vw + 50%);
		margin-right: calc(-50vw + 50%);
	}

	@media (max-width: 600px) {
		padding: 2rem;
	}

	@media (max-width: 402px) {
		flex-direction: column;
		padding: 1rem;
	}
`;
