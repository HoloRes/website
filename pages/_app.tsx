import '../styles/globals.css';
import type { AppProps } from 'next/app';

const MyApp = function ({ Component, pageProps }: AppProps) {
	return (
		<div className="min-h-screen">
			{/* eslint-disable-next-line react/jsx-props-no-spreading */}
			<Component {...pageProps} />
		</div>
	);
};

export default MyApp;
