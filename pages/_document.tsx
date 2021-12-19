import Document, {
	Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta charSet="UTF-8" />
					<meta name="description" content="A fun Hololive community! We have concerts, arts, festivals, and more!" />
					<meta name="keywords" content="Hololive, Hololive Resort, Discord, Hololive Discord" />
					<meta property="og:title" content="Hololive Resort Discord" />
					<meta property="og:description" content="A fun Hololive community! We have concerts, arts, festivals, and more!" />
					<meta property="og:image" content="https://hlresort.community/img/logo.png" />
					<link href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap" rel="stylesheet" />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
