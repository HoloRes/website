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
				<div className="w-full lg:w-[65%] lg:-ml-[15%] bg-hololive-blue lg:skew-x-[-20deg]">
					<div className="lg:-skew-x-[-20deg] lg:w-[50vw] lg:ml-[15vw] lg:w-[56rem] bg-[url('/img/banner.png')] bg-cover bg-bottom bg-clip-border lg:bg-none h-full lg:-mt-20 overflow-x-hidden break-words text-center align-middle content-center flex flex-col justify-center items-center">
						<div className="bg-gradient-to-b from-transparent via-black/50 py-36 lg:py-0 w-full flex flex-col items-center gap-8 lg:bg-none">
							<div>
								<h1 className="text-4xl">Hololive Resort</h1>
								<h2 className="text-lg max-w-[32rem] break-words px-2">
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
				</div>

				<img
					className="w-[65%] object-cover object-[50px_center] -ml-32 hidden lg:block"
					src="/img/banner.png"
				/>
			</main>

			<Footer />
		</>
	);
};

export default Home;
