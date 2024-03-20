import React from "react";
import CardExample from "../CardExample";
import MoreExamples from "../MoreExamples";
import TitleExample1 from "../../public/TitleExample1.jpg";
import ImageExample1 from "../../public/ImageExample1.jpg";
import TitleExample2 from "../../public/TitleExample2.jpg";
import ImageExample2 from "../../public/ImageExample2.jpg";
import TitleExample3 from "../../public/TitleExample3.jpg";
import ImageExample3 from "../../public/ImageExample3.jpg";
import TitleExample4 from "../../public/TitleExample4.jpg";
import ImageExample4 from "../../public/ImageExample4.jpg";
import ImageExample5 from "../../public/ImageExample5.png";
import ImageExample6 from "../../public/ImageExample6.png";
import Link from "next/link";

export default function CardExamples({ ref1 }) {
	return (
		<>
			<CardExample
				image01={TitleExample1}
				title="Climate Science"
				text="Supported the development of more than 300 figures featured the
		6th Assesment Report of the Intergovernmental Panel on Climate
		Change."
				learnMoreLink="https://www.behance.net/gallery/151953673/My-experience-with-the-IPCC
					"
				atlasLink={""}
				image02={ImageExample1}
			/>
			<CardExample
				image01={TitleExample2}
				title="Environmental media"
				text="I help environmental journalist design data-driven graphic products
				that can effectively communicate complex information to a general audience
				who may not be experts in the field."
				learnMoreLink="https://www.behance.net/gallery/146417585/Maps-for-articles"
				atlasLink={""}
				image02={ImageExample2}
			/>
			<CardExample
				image01=""
				title="Interactive Geodata in 3d"
				text="Explore data, combine layers, zoom, and rotate to find the right angle from where to tell your story using."
				learnMoreLink="https://honduras.pubpub.org/pub/g3lmyjjm/release/2"
				atlasLink={"Atlas_prototype/Atlas.html"}
				image02={ImageExample6}
			/>

			<CardExample
				image01={TitleExample3}
				title="Interactive dashboards"
				text="I create interactive visualizations for scientist and wider audiences."
				learnMoreLink="https://public.tableau.com/app/profile/andres.alegria/vizzes"
				atlasLink={""}
				image02={ImageExample5}
			/>
			<CardExample
				image01={TitleExample4}
				title="Fisheries management"
				text="In the context of coral reef conservation in the Caribbean, I have supported
				communication compaigns targeting a wide array of stakeholders demanding diverse media
				outputs."
				learnMoreLink="https://www.behance.net/gallery/38040031/Fishermens-Magazine-3"
				atlasLink={""}
				image02={ImageExample4}
			/>

			<MoreExamples ref1={ref1} />
		</>
	);
}
