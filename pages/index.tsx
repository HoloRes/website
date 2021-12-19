import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home: NextPage = function () {
	return (
		<>
			<Head>
				<title>Hololive Resort</title>
			</Head>

			<Navbar />

			<main className="flex h-[91.5vh] text-white bg-[#67cae1]">
				<div className="w-[65%] -ml-[15%] bg-hololive-blue skew-x-[-20deg]">
					<div className="-skew-x-[-20deg] ml-64 w-[56rem] h-full -mt-20 overflow-x-hidden break-words text-center align-middle flex flex-col justify-center items-center gap-8">
						<div>
							<h1 className="text-4xl">Hololive Resort</h1>
							<h2 className="text-lg w-[32rem]">
								A fun Hololive Discord community!
								<br />
								We have concerts, arts, festivals, and more!
							</h2>
						</div>
						<a
							href="https://discord.gg/HoloRes"
							target="_blank"
							rel="noreferrer"
							className="bg-cyan-400 px-4 py-2 rounded-full hover:bg-sky-400"
						>
							JOIN!
						</a>
					</div>
				</div>

				<img
					className="w-[65%] object-cover object-[50px_center] -ml-32"
					src="/img/banner.png"
				/>
			</main>

			<Footer />
		</>
	);
};

export default Home;
