import React from "react";
import styled from "styled-components";
import Link from "next/link";
// import Image from "next/image";

export default function Logo() {
	return (
		<>
			<Link href={"/"}>
				<LogoContainer>
					{" "}
					<img
						src="../Logo.jpg"
						alt="Logo"
						style={{ width: "100%", height: "auto" }}
					/>
				</LogoContainer>
			</Link>
		</>
	);
}

const LogoContainer = styled.div`
	width: 151px;
	height: auto;

	@media (max-width: 768px) {
		width: 120px;
	}

	@media (max-width: 402px) {
		width: 100px;
	}
`;
