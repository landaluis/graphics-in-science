import React from "react";
import styled from "styled-components";

export default function Services({ ref2 }) {
	return (
		<>
			<ServicesContainer>
				{" "}
				<TitleServices>Services</TitleServices>
				<ParagraphServices>
					Functional and aesthetic enhancement of scientific graphics to make
					your communication more effective. This is achieved when the
					intentionality of your data is expressed through thoughtful design
					sensibilities<AnchorExample ref={ref2}>.</AnchorExample>
				</ParagraphServices>
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
	justify-content: center;
	text-align: center;
	padding: 4rem 15rem 4rem;
	color: var(--black01);
	font-size: 1.2rem;
	margin-bottom: 6rem;

	@media (max-width: 1350px) {
		padding: 3.5rem 13rem 3.5rem;
	}

	@media (max-width: 1280px) {
		padding: 2rem 12rem 2rem;
	}
	@media (max-width: 1182px) {
		padding: 2rem 9rem 2rem;
		font-size: 1.1rem;
	}
	@media (max-width: 1024px) {
		padding: 2rem 8rem 2rem;
	}

	@media (max-width: 980px) {
		padding: 2rem 4rem 2rem;
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

	@media (max-width: 768px) {
		line-height: 1.6rem;
	}
	@media (max-width: 402px) {
		line-height: 1.5rem;
	}
`;
