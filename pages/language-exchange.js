import Link from 'next/link'
import Head from 'next/head'
import { Grommet, Header, Box, Button, Footer, Heading} from 'grommet';

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

export default function JoinUs() {
    return (
        <Grommet theme={myTheme} >
            <Header background={{color: 'red' }} direction="row" pad="small" justify="center">
                <h1 style={headerFont}>
                HOLOLIVE RESORT
                </h1>
            </Header>
            <div style={backgroundColour}>
                <Heading>
                    Language Exchange
                </Heading>
                <br/>

                <main>
                    {' '}
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                    
                </main>
            </div>
            <Footer background={{color: 'black' }} direction="row" pad="small" justify="center">
                <h2>This is a footer</h2>
            </Footer>  
        </Grommet>
    )
  }