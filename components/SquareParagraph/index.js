import React from "react";
import styled from "styled-components";

export default function SquareParagraph() {
	return (
		<>
			<ParagraphContainer>
				I offer specialized services to help researchers enhance their schematic
				and data-driven graphics, making them more visually appealing and
				accessible to a wider audience. My toolbox includes various software
				such as R for data pre-processing, Tableau for intereactive
				visualization, QGIS for geographic data, and Adobe Illustrator for
				advanced customization and layout. Collaboration with clients is a
				priority for me to ensure their satisfaction with the end product.
			</ParagraphContainer>
		</>
	);
}

const ParagraphContainer = styled.div`
	color: #303538;
	width: 40%;
	padding: 20px;
	font-family: "AvertaDemo-Regular", sans-serif;
	font-size: 16px;
	line-height: 27px;
	text-align: justify;

	@media (max-width: 768px) {
		width: 100%;
		margin-top: 20px;
	}
`;
