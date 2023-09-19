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
	@media (max-width: 768px) {
		margin: 0px;
		padding: 0px;
	}
`;
