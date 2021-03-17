import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
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
	height: "100%"
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
                    Games
                </Heading>
                <br/>

                <p>
                    Translations Intro - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <br/>

                <h4>
                    Minecraft - Hololive Construction
                </h4>

                <img alt="Hololive Construction Logo" />

                <p>
                    Minecraft Description - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <br/>

                <h4>
                    Multiplayer
                </h4>

                <img alt="FPS Image"/> 
                <img alt="MOBA Image"/>
                <img alt="Raiding Image"/>
                <img alt="Tetris Image"/>
                <img alt="Mobile Gaming Image"/>
                <img alt="Other Image"/>
                <br/>
                <br/>

                <p>FPS</p>
                <p>MOBA</p>
                <p>Raiding</p>
                <p>Tetris</p>
                <p>Mobile Gaming</p>
                <p>Other</p>
                <br/>
                <br/>

                <p>
                    Various Game Types Description - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
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