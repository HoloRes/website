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
	height: 2000
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

                <p>
                    Language Exchange Intro - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <br/>
                <br/>

                <img alt="Listening Image"/> 
                <img alt="Speaking Image"/>
                <img alt="Reading Image"/>
                <img alt="Writing Image"/>
                <br/>
                <br/>

                <p>Listening</p>
                <p>Speaking</p>
                <p>Reading</p>
                <p>Writing</p>
                <br/>
                <br/>

                <p>
                    Language Exchange Description - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <br/>
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