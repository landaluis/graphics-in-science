import React from "react";
import styled from "styled-components";
import Link from "next/link";

export default function LogoN() {
	return (
		<>
			<Link href={"/"}>
				<LogoContainer>
					{" "}
					<img
						src="/logo.jpg"
						alt="Logo"
						style={{ width: "149px", height: "auto" }}
					/>
				</LogoContainer>
			</Link>
		</>
	);
}

const LogoContainer = styled.div`
	// padding-left: 4.5rem;
	@media (max-width: 768px) {
		// width: 100%;
		margin: 0px;
		padding: 0px;
	}
`;
