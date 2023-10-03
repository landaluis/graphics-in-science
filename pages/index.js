import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageWrap from "@/components/PageWrap";
import Contact from "@/components/Contact";

export default function Home({
	handleClick,
	ref1,
	handleClickExamples,
	ref2,
	handleWorkTogether,
	ref3,
}) {
	return (
		<main>
			<Header
				handleClick={handleClick}
				handleClickExamples={handleClickExamples}
				handleWorkTogether={handleWorkTogether}
			/>

			<PageWrap
				ref1={ref1}
				ref2={ref2}
				ref3={ref3}
				handleWorkTogether={handleWorkTogether}
			/>

			{/* <Contact />	 */}

			<Footer
				handleClickExamples={handleClickExamples}
				handleClick={handleClick}
			/>
		</main>
	);
}
