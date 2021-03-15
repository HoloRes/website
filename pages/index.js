import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { Grommet, Header, Box, Button, Footer, Heading } from 'grommet';

const myTheme = {
	global: {
		colors: {
			turquoise: '#30D5C8'
		},
	},
  }
  
  const backgroundColour = {
	backgroundColor: '#30D5C8',
	padding: 100,
	height: 900
  }
  
  const headerFont = {
	fontFamily: "Arial",
	fontSize: 60,
	color: 'yellow'
  };

/*
<Button primary label="Home" justify="center" direction="row" color="#00bfff" href="./Home" onClick={() => {}}/>
<Button primary label="FirstPage" justify="center" direction="row" color="#50c878" href="./FirstPage" onClick={() => {}}/>
<Button primary label="SecondPage" justify="center" direction="row" color="white" href="./SecondPage" onClick={() => {}}/>
*/

export default function Home() {
	return (
		<Grommet theme={myTheme} >
			<Header background={{color: 'red' }} direction="row" pad="small" justify="center">
				<h1 style={headerFont}>
				HOLOLIVE RESORT
				</h1>
			</Header>
			<div style={backgroundColour}>
				<Heading>
                    Home Page
                </Heading>
				<br/>
			
				<main>
					{' '}
					<Link href="/join_us">
						<a>Join Us!</a>
					</Link>
					<br/>
					{' '}
                    <Link href="/creatives">
                        <a>Art and Creatives</a>
                    </Link>
					<br/>
					{' '}
                    <Link href="/translations">
                        <a>Translations</a>
                    </Link>
					<br/>
					{' '}
                    <Link href="/games">
                        <a>Games</a>
                    </Link>
					<br/>
					{' '}
                    <Link href="/streaming">
                        <a>Streaming</a>
                    </Link>
					<br/>
					{' '}
                    <Link href="/language-exchange">
                        <a>Language Exchange</a>
                    </Link>
					<br/>
				</main>

			</div>
			<Footer background={{color: 'black' }} direction="row" pad="small" justify="center">
				<h2>This is a footer</h2>
			</Footer>  
		</Grommet>
	);
}
