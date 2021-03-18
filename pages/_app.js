import '../styles/globals.css';
import Head from 'next/head';
import { useState } from 'react';
import { Grommet, Header, Box, Button, Footer, Heading} from 'grommet';

function MyApp({ Component, pageProps }) {
	return <Component {...pageProps} />
}

export default MyApp;
