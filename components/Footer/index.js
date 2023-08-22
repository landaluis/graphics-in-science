import React from "react";
import styled from "styled-components";

export default function Footer() {
	return (
		<>
			<InfoContainer>
				<InfoLine>
					<Label>Email</Label>
					<InfoText>andresalegria@live.com</InfoText>
				</InfoLine>
			</InfoContainer>
		</>
	);
}

const InfoContainer = styled.div`
	font-size: 16px;
	font-family: "CaviarDreams", sans-serif;
	margin-bottom: 0px;
	padding-bottom: 20px;
	padding-top: 20px;
	background-color: #7e9ba5;
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 80px;
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
	min-width: 60px;
`;

const InfoText = styled.span`
	font-family: "Poppins-Regular", sans-serif;
	color: white;
`;
