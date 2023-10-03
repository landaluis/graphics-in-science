import GlobalStyle from "@/styles";
import Head from "next/head";
import { useRef } from "react";

export default function App({ Component, pageProps }) {
	const ref1 = useRef(null);
	const handleClick = () => {
		ref1.current?.scrollIntoView({ behavior: "smooth" });
		console.log("Yo tambien clicke about");
	};

	const ref2 = useRef(null);
	const handleClickExamples = () => {
		ref2.current?.scrollIntoView({ behavior: "smooth" });
		console.log("Yo tambien clicke examples");
	};

	const ref3 = useRef(null);
	const handleWorkTogether = () => {
		ref3.current?.scrollIntoView({ behavior: "smooth" });
		console.log("Yo tambien clicke worktogheter");
	};
	return (
		<>
			<GlobalStyle />
			<Head>
				<title>Graphics in Science</title>
			</Head>
			<Component
				{...pageProps}
				handleClick={handleClick}
				ref1={ref1}
				handleClickExamples={handleClickExamples}
				ref2={ref2}
				handleWorkTogether={handleWorkTogether}
				ref3={ref3}
			/>
		</>
	);
}
