import React from "react";
import styled from "styled-components";
import BehanceLink from "../BehanceLink";
import TableauLink from "../TableauLink";
import LetsWorkLink from "../LetsWorkLink";

export default function Services({ handleWorkTogether, ref2 }) {
	return (
		<>
			<ServicesContainer>
				{/* {" "}
				<TitleServices>Services</TitleServices> */}
				<ParagraphServices>
					{/* Functional and aesthetic enhancement of scientific graphics to make
					your communication more effective. This is achieved when the
					intentionality of your data is expressed through thoughtful design
					sensitivities<AnchorExample ref={ref2}>.</AnchorExample> */}

					<Column>
						<p>
							You have data to explore, a topic to be discussed, a story to be
							told.
						</p>
					</Column>
					<Column>
						<p>
							I have the skills to support you in conveying, displaying, and
							graphically communicating your message to your target audience
							<AnchorExample ref={ref2}>.</AnchorExample>
						</p>
					</Column>
				</ParagraphServices>
				<LetsWorkLinkContainer>
					<LetsWorkLink handleWorkTogether={handleWorkTogether} />
				</LetsWorkLinkContainer>
				<LinkedInBehanceContainer>
					<TableauLink color="var(--grey02)" />
					<BehanceLink color="var(--grey02)" />
				</LinkedInBehanceContainer>

				<DecorationContainer1>
					{" "}
					<DecorationDiv1></DecorationDiv1>
					<DecorationDiv2></DecorationDiv2>
					<DecorationDiv3></DecorationDiv3>
				</DecorationContainer1>
				<DecorationContainer2>
					{" "}
					<DecorationDiv4></DecorationDiv4>
					<DecorationDiv5></DecorationDiv5>
					<DecorationDiv6></DecorationDiv6>
				</DecorationContainer2>
			</ServicesContainer>
		</>
	);
}
const LetsWorkLinkContainer = styled.div`
	margin-top: 3rem;

	@media (max-width: 890px) {
		margin-top: 2rem;
		margin-bottom: 0.5rem;
	}

	@media (max-width: 768px) {
		margin-top: 1.5rem;
		margin-bottom: 1rem;
	}

	@media (max-width: 402px) {
		font-size: 12rem;
	}
`;

const LinkedInBehanceContainer = styled.div`
	margin-top: 3rem;
	grid-column-gap: 3rem;
	flex-wrap: wrap;
	display: flex;

	@media (max-width: 890px) {
		margin-top: 2rem;
		margin-bottom: 3rem;
	}
	@media (max-width: 768px) {
		margin-top: 1.5rem;
		margin-bottom: 2.5rem;
	}
	@media (max-width: 402px) {
		grid-column-gap: 1.5rem;
	}
`;
const AnchorExample = styled.span``;
const blueColor = "var(--blueContact-us)";

const DecorationDiv = styled.div`
	background-color: ${blueColor};
	flex: none;
	display: block;
`;

const DecorationContainer1 = styled.div`
	justify-content: center;
	position: absolute;
	height: 0;
	right: 0;
	width: 0;
	top: 0;
	align-items: center;
	display: flex;

	@media (max-width: 402px) {
		display: none;
	}
`;
const DecorationDiv1 = styled(DecorationDiv)`
	width: 0.75rem;
	height: 0.75rem;
`;
const DecorationDiv2 = styled(DecorationDiv)`
	width: 8rem;
	position: absolute;
	height: 1px;
	right: 0;
`;
const DecorationDiv3 = styled(DecorationDiv)`
	width: 1px;
	position: absolute;
	height: 6rem;
	top: 0;
`;
const DecorationContainer2 = styled.div`
	justify-content: center;
	position: absolute;
	height: 0;
	right: 0;
	width: 0;
	bottom: 0;
	align-items: center;
	display: flex;
	@media (max-width: 402px) {
		display: none;
	}
`;
const DecorationDiv4 = styled(DecorationDiv)`
	width: 0.75rem;
	height: 0.75rem;
`;
const DecorationDiv5 = styled(DecorationDiv)`
	width: 8rem;
	position: absolute;
	height: 1px;
	right: 0;
`;
const DecorationDiv6 = styled(DecorationDiv)`
	width: 1px;
	position: absolute;
	height: 6rem;
	bottom: 0;
`;

const ServicesContainer = styled.div`
	width: 90%;
	position: relative;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: left;
	// text-align: center;
	padding: 4rem 7rem 4rem;
	color: var(--black01);
	font-size: 1.2rem;
	margin-bottom: 6rem;

	@media (max-width: 1350px) {
		padding: 3.5rem 2rem 3.5rem;
	}

	@media (max-width: 1280px) {
		padding: 2rem 2rem 2rem;
	}
	@media (max-width: 1182px) {
		padding: 2rem 2rem 2rem;
		font-size: 1.1rem;
	}
	@media (max-width: 1024px) {
		padding: 2rem 2rem 2rem;
	}

	@media (max-width: 980px) {
		padding: 2rem 2rem 2rem;
	}

	@media (max-width: 768px) {
		padding: 2rem 2rem 2rem 2rem;
		font-size: 1rem;
	}

	@media (max-width: 402px) {
		width: 95%;
		padding: 0.5rem 2rem 0.5rem 1rem;
		font-size: 1rem;
		line-height: 1rem;
		margin-bottom: 0;
	}
`;

const TitleServices = styled.h2`
	font-family: "PlayfairDisplay-Bold", serif;
	font-size: 2.3rem;
	margin-bottom: 10px;

	@media (max-width: 1024px) {
		font-size: 2.2rem;
	}

	@media (max-width: 768px) {
		margin-top: 10px;
	}
`;

const ParagraphServices = styled.p`
	font-family: "Arial", sans-serif;
	line-height: 1.8rem;
	display: flex;
	justify-content: space-between;
	@media (max-width: 820px) {
		flex-direction: column;
	}

	@media (max-width: 768px) {
		line-height: 1.6rem;
	}
	@media (max-width: 402px) {
		line-height: 1.5rem;
	}
`;

const Column = styled.div`
	font-family: "PlayfairDisplay-Bold", serif;
	margin-right: 4rem;
	line-height: 2rem;
	font-size: 1.5rem;
	justify-content: left;
	flex: 1;

	&:last-child {
		margin-right: 0;
	}

	p {
		text-align: left;
		// margin: 0;
	}
`;
