import React from "react";
import styled from "styled-components";

export default function Logo() {
	return (
		<>
			<LogoContainer>
				<GraphicsText>Graphics</GraphicsText>
				<Triangle>
					<InText>in</InText>
				</Triangle>
				<ScienceText>Science</ScienceText>
			</LogoContainer>
		</>
	);
}

const LogoContainer = styled.div`
	background-color: white;
	color: #7e9ba5;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: absolute;
	top: 43%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Triangle = styled.div`
	display: flex; /* Use flexbox */
	justify-content: center; /* Center horizontally */
	align-items: center; /* Center vertically */
	width: 0;
	height: 0;
	border-left: 37px solid transparent;
	border-right: 37px solid transparent;
	border-top: 40px solid #7e9ba5;
`;

const InText = styled.span`
	font-size: 26px;
	font-family: "CaviarDreams", sans-serif;
	color: white;
	position: relative;
	top: -26px;
`;

const GraphicsText = styled.p`
	font-size: 50px;
	font-family: "CaviarDreams", sans-serif;
	margin: 9px;
`;

const ScienceText = styled.p`
	font-size: 50px;
	font-family: "CaviarDreams", sans-serif;
	margin: -10px;
`;
