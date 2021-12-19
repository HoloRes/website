import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';

const MyApp = function ({ Component, pageProps }: AppProps) {
	return (
		<div className="min-h-screen">
			<Head>
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</Head>
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<Component {...pageProps} />
		</div>
	);
};

export default MyApp;
