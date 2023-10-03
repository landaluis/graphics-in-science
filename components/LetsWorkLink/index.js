import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function LetsWorkLink({ handleWorkTogether }) {
	return (
		<Wrapper>
			<LetsContainer onClick={handleWorkTogether}>
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
	padding: 0.8rem 0.7rem;
	cursor: pointer;
	height: 2.7rem;
	position: relative;
	font-size: 1rem;
	border: none;

	@media (max-width: 1280px) {
	}

	@media (max-width: 768px) {
		margin-right: 1rem;
		padding: 0.7rem 1rem 0.7rem;
		font-size: 0.9rem;
	}

	@media (max-width: 402px) {
		padding: 0.7rem 0.7rem;
		margin-right: 0.4rem;
		font-size: 0.8rem;
	}
	@media (max-width: 390px) {
		padding: 0.7rem 0.5rem 0.3rem;
	}
	@media (max-width: 359px) {
		padding: 0.7rem 0.5rem 0.3rem;
	}
`;
