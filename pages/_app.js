import GlobalStyle from "@/styles";
import Head from "next/head";
import { useRef } from "react";

export default function App({ Component, pageProps }) {
	return (
		<>
			<GlobalStyle />
			<Head>
				<title>Graphics in Science</title>
			</Head>
			<Component {...pageProps} />
		</>
	);
}
