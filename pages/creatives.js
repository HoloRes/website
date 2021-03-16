import React from 'react';
import Link from 'next/link'
import Head from 'next/head'
import { Grommet, Header, Box, Button, Footer, Heading, Image} from 'grommet';
//import logo from './images/HLLResistance_Logo.png';

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
	height: 3000
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
                    Art and Creatives
                </Heading>
                <br/>

                <img src="./images/HLLResistance_Logo.png" alt="Image logo(Broken)" style={{ display:'inline-block' }} />
                <br/>
                <br/>

                <p>
                    Creatives Intro - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <br/>

                <h4>
                    Art Description
                </h4>
                <p>
                    Art Description - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <br/>

                <img alt="Art Sample 1"/> 
                <img alt="Art Sample 2"/>
                <img alt="Art Sample 3"/>
                <br/>
                <br/>

                <p>Art Sample Name</p>
                <p>Art Sample Name</p>
                <p>Art Sample Name</p>
                <br/>
                <br/>

                <h2>
                    Popular Artists
                </h2>
                <br/>

                <img alt="Artist Pfp 1"/> 
                <img alt="Artist Pfp 2"/>
                <img alt="Artist Pfp 3"/>
                <br/>
                <br/>

                <p>Art Sample Name</p>
                <p>Art Sample Name</p>
                <p>Art Sample Name</p>
                <br/>
                <br/>

                <h4>
                    Music and Writing
                </h4>
                <p>
                    Music and Writing Description - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </p>
                <br/>

                <main>
                    {' '}
                    <Link href="/gallery">
                        <a>Go to gallery</a>
                    </Link>
                </main>
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