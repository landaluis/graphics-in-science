import React from "react";
import styled from "styled-components";

export default function Info() {
	return (
		<>
			<InfoContainer>
				<InfoLine>
					<Label>Address</Label>
					<InfoText>Scharnhorststrasse 146, Bremen</InfoText>
				</InfoLine>
				<InfoLine>
					<Label>Phone</Label>
					<InfoText>+49 152 59062141</InfoText>
				</InfoLine>
				<InfoLine>
					<Label>Email</Label>
					<InfoText>andres@graphicsinscience.com</InfoText>
				</InfoLine>
			</InfoContainer>
		</>
	);
}

const InfoContainer = styled.div`
	font-size: 13px;
	font-family: "CaviarDreams", sans-serif;
	margin-bottom: 0px;
	padding-top: 12px;
	background-color: #7e9ba5;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 120px;
`;
const InfoLine = styled.p`
	display: flex;
	align-items: center;
	padding: 5px 20px;
	margin: 0px;
`;

const Label = styled.span`
	font-family: "CaviarDreams", sans-serif;
	margin-right: 10px;
	color: white;
	min-width: 80px;
`;

const InfoText = styled.span`
	font-family: "Poppins-Regular", sans-serif;
	color: white;
`;
