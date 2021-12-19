import type { NextPage } from 'next';
import Head from 'next/head';
import Navbar from '../components/Navbar';

const Home: NextPage = function () {
	return (
		<>
			<Head>
				<title>Hololive Resort</title>
			</Head>
			<Navbar />
			<div className="flex h-[22.5rem] text-white">
				<div className="w-[55%] -ml-[10%] bg-hololive-blue skew-x-[-30deg]">
					<div className="-skew-x-[-30deg] ml-24 w-[56rem] h-[22.5rem] py-8 overflow-x-hidden break-words text-center align-middle flex flex-col justify-center items-center gap-8">
						<div>
							<h1 className="text-4xl">Hololive Resort</h1>
							<h2 className="text-lg w-[32rem]">
								A fun Hololive community!
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
					className="w-[65%] object-cover object-right-top -ml-32"
					src="/img/suisei-bg.png"
				/>
			</div>
			<div className="p-4 content-center text-center">
				Some extended server information
			</div>
		</>
	);
};

export default Home;
