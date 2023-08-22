import React from "react";
import styled from "styled-components";

export default function Header() {
	return (
		<HeaderContainer>
			<Name>Andrés Alegria</Name>
			<Title>Graphics Specialist</Title>
		</HeaderContainer>
	);
}

const HeaderContainer = styled.div`
	background-color: White;
	color: #7e9ba5;
	padding: 20px;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border-bottom: 1px solid #7e9ba5;
`;

const Name = styled.h1`
	margin: 0;
	font-size: 29px;
	font-family: "CaviarDreams_Bold", sans-serif;
`;

const Title = styled.h2`
	margin: 0;
	font-size: 12px;
	font-family: "Poppins-Regular", sans-serif;
`;
