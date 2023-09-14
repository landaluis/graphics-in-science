import Link from "next/link";
import React from "react";
import styled from "styled-components";

export default function LetsWorkLink() {
	return (
		<LetsContainer>
			<Link
				href={"/LetsWork"}
				style={{
					textDecoration: "none",
					color: "black",
				}}>
				Let's work together
			</Link>{" "}
		</LetsContainer>
	);
}

const LetsContainer = styled.div`
	font-family: "AvertaDemo-Regular", sans-serif;
	min-width: 10.5rem;
	color: #0e2129;
	background-color: #fc0;
	justify-content: center;
	align-items: center;
	padding: 1rem 0.7rem;
	display: flex;
	position: relative;

	@media (max-width: 768px) {
		margin-right: 1rem;
		padding: 0.7rem 0.7rem;
		justify-content: center;
		align-items: center;
		font-size: 0.9rem;
		min-width: 7.5rem;
	}

	@media (max-width: 402px) {
		padding: 0.7rem 0.7rem;
		margin-right: 0.3rem;
		justify-content: center;
		align-items: center;
		font-size: 0.9rem;
		min-width: 7.5rem;
	}
	@media (max-width: 390px) {
		padding: 0.7rem 0.3rem;
		margin-right: 0.3rem;
		justify-content: center;
		align-items: center;
		font-size: 0.9rem;
	}
	@media (max-width: 359px) {
		padding: 0.3rem 0.3rem;
		margin-right: 0.3rem;
		justify-content: center;
		align-items: center;
		font-size: 0.9rem;
		min-width: 1rem;
		max-width: 5rem;
	}
`;
