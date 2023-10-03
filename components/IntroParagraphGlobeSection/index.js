import IntroParagraph from "../IntroParagraph";
import Globe from "../Globe";
import React from "react";
import styled from "styled-components";

export default function IntroParagraphGlobeSection({ handleWorkTogether }) {
	return (
		<>
			<Container>
				<IntroParagraph handleWorkTogether={handleWorkTogether} />

				<Globe />
			</Container>
		</>
	);
}

const Container = styled.div`
	width: 100%;
	position: relative;
	padding: 1.5rem 4rem 6rem;
	margin-right: 0;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
	align-items: center;

	@media (max-width: 1280px) {
		padding-top: 0rem;
		padding: 0 4rem 4rem;
	}

	@media (max-width: 1100px) {
		padding-top: 0rem;
		padding: 0 2rem 2rem;
	}
	@media (max-width: 980px) {
		padding: 0 1rem 2rem;
	}
	@media (max-width: 890px) {
		padding: 0 0.5rem 2rem;
		padding-right: 0.5rem;
	}

	@media (max-width: 820px) {
		padding: 0rem 1rem 1rem;
		flex-direction: column;
	}

	@media (max-width: 768px) {
	}

	@media (max-width: 402px) {
		padding: 0rem 0rem 1rem;
	}
`;
