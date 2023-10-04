import React from "react";
import styled from "styled-components";

export default function LetsWorkLink({ handleWorkTogether }) {
	return (
		<Wrapper>
			<LetsContainer
				onClick={handleWorkTogether}
				style={{
					color: "#10212A",
				}}>
				Let&apos;s work together{" "}
			</LetsContainer>
		</Wrapper>
	);
}
const Wrapper = styled.div`
	align-items: center;
	justify-content: center;
	display: flex;
`;
const LetsContainer = styled.button`
	font-family: "Arial", sans-serif;
	background-color: var(--yellow01);
	color: --var(black01);
	padding: 0.5rem 1rem 0.5rem;
	cursor: pointer;
	height: 2.7rem;
	position: relative;
	font-size: 1rem;
	border: none;
	width: 172px;
	height: 50px;

	@media (max-width: 1280px) {
	}

	@media (max-width: 768px) {
		margin-right: 1rem;
		padding: 0.7rem 1rem 0.7rem;
		font-size: 1rem;
	}

	@media (max-width: 402px) {
		padding: 0.7rem 0.7rem;
		margin-right: 0.4rem;
		font-size: 0.95rem;
		width: 155px;
		height: 45px;
	}
	@media (max-width: 390px) {
		padding: 0.3rem 0.5rem;
		margin-right: 0;
	}
	@media (max-width: 359px) {
		padding: 0.3rem 0.5rem;
	}

	@media (max-width: 390px) {
		padding: 0.3rem 0.5rem;
		margin-right: 0;
	}

	@media (max-width: 300px) {
		padding: 0.3rem 0.3rem;
		margin-right: 0;
	}
`;
