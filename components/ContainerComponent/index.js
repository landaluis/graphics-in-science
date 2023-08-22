import React from "react";
import styled from "styled-components";
import SquareParagraph from "../SquareParagraph";
import Logo from "../Logo";

export default function ContainerComponent() {
	return (
		<Container>
			<Logo />
			<SquareParagraph />
		</Container>
	);
}

const Container = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: flex-start;
	margin-top: 60px;

	@media (max-width: 768px) {
		flex-direction: column;
		align-items: center;
		margin-top: 10px;
		margin-left: 20px;
		margin-right: 20px;
		margin-bottom: 140px;
	}
`;
