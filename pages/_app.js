import '../styles/globals.css';
import Head from 'next/head';
import { useState } from 'react';
import { Grommet } from 'grommet';

function MyApp({ Component, pageProps }) {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<>
			<Head>
				<link
					href="https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap"
					rel="stylesheet"
				/>
				<title>Hololive Resistance Discord - Staff dashboard</title>
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
				<style>
					{`
                    * {
                        font-family: 'Noto Sans', sans-serif;
                    }
                `}
				</style>
			</Head>
			<Grommet fullthemeMode={darkMode ? 'dark' : 'light'}>
				<Component {...pageProps} darkMode={darkMode} setDarkMode={setDarkMode} />
			</Grommet>
		</>
	);
}

export default MyApp;
