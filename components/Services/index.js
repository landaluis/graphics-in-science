import React from "react";
import styled from "styled-components";

export default function Services() {
	return (
		<ServicesContainer>
			{" "}
			<TitleServices>Services</TitleServices>
			<ParagraphServices>
				Functional and aesthetic enhancement of scientific graphics to make
				their communication more effective. This is achived when the
				intentionality of the data is expressed through thoughtful design
				sensibilities.
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
	);
}

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
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	text-align: center;
	padding: 1.5rem 15rem 1.5rem;
	line-height: 2rem;
	font-size: 1.2rem;
	margin-bottom: 3rem;
	// width: calc(100% - 6rem);
	// width: calc(((100% - 16.5rem) / 12) * 6 + 7.5rem);

	@media (max-width: 768px) {
		padding: 1rem;
	}
`;

const TitleServices = styled.h2`
	font-family: Times Roman Regular;
	font-size: 2.5rem;
	margin-bottom: 10px;
`;

const ParagraphServices = styled.p`
	font-family: "Arial", sans-serif;
`;
