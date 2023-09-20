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
const DecorationDiv1 = styled.div`
	background-color: #25363d;
	flex: none;
	width: 0.75rem;
	height: 0.75rem;
	display: block;
`;
const DecorationDiv2 = styled.div`
	width: 8rem;
	background-color: #25363d;
	position: absolute;
	height: 1px;
	flex: none;
	right: 0;
	display: block;
`;
const DecorationDiv3 = styled.div`
	width: 1px;
	background-color: #25363d;
	position: absolute;
	height: 6rem;
	flex: none;
	top: 0;
	display: block;
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
const DecorationDiv4 = styled.div`
	background-color: #25363d;
	flex: none;
	width: 0.75rem;
	height: 0.75rem;
	display: block;
`;
const DecorationDiv5 = styled.div`
	width: 8rem;
	background-color: #25363d;
	position: absolute;
	height: 1px;
	flex: none;
	right: 0;
	display: block;
`;
const DecorationDiv6 = styled.div`
	width: 1px;
	background-color: #25363d;
	position: absolute;
	height: 6rem;
	flex: none;
	bottom: 0;
	display: block;
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
		padding-left: 1rem;
		padding-right: 1rem;
		padding-top: 1rem;
		padding-bottom: 1rem;
	}
`;

const TitleServices = styled.h2`
	font-family: Times Roman Regular;
	font-size: 2.5rem;
	margin-bottom: 10px;
`;

const ParagraphServices = styled.p`
	font-family: "AvertaDemo-Regular", sans-serif;
`;
