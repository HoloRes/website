import Document, {
	Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
	render() {
		return (
			<Html>
				<Head>
					<meta name="description" content="Hololive Resort website" />
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
