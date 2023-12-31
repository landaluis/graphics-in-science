import GlobalStyle from "@/styles";
import Head from "next/head";
import { useRef } from "react";

export default function App({ Component, pageProps }) {
	const ref1 = useRef(null);
	const handleClick = () => {
		ref1.current?.scrollIntoView({ behavior: "smooth" });
	};

	const ref2 = useRef(null);
	const handleClickExamples = () => {
		ref2.current?.scrollIntoView({ behavior: "smooth" });
	};

	const ref3 = useRef(null);
	const handleWorkTogether = () => {
		ref3.current?.scrollIntoView({ behavior: "smooth" });
	};
	return (
		<>
			<GlobalStyle />
			<Head>
				<meta
					name="description"
					content="Functional and aesthetic enhancement of scientific graphics to make
					your communication more effective. "
				/>
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
