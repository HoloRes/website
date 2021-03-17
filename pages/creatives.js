import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head'
import { Grommet, Header, Box, Button, Footer, Heading, Text} from 'grommet';
import { Medium } from 'grommet-icons';
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
	height: "100%"
  }
  
  const headerFont = {
	fontFamily: "Arial",
	fontSize: 60,
	color: 'yellow'
  };

  /*
  var creativeIntro = {
      display: 'inline-block',
  };
  */

export default function JoinUs() {
    return (
        <Grommet theme={myTheme} >
            <Header background={{color: 'red' }} direction="row" pad="small" justify="center">
                <Heading level="1" style={headerFont}>
                HOLOLIVE RESORT
                </Heading>
            </Header>
            <div style={backgroundColour}>
                <Heading>
                    Art and Creatives
                </Heading>
                <br/>

                <Box direction="row">
                    <Box style={{display: 'inline-block', margin: 20}}>
                        <Image
                            src="/HLLResistance_Logo.png"
                            alt="Hololive Logo"
                            width={300}
                            height={400}
                        />
                    </Box>
                    <Box style={{display: 'inline-block'}}>
                        <Text>
                        Creatives Intro - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                        </Text> 
                    </Box>  
                </Box>             
                <br/>
                <br/>

                <h4>
                    Art Description
                </h4>
                <Text>
                    Art Description - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Text>
                <br/>

                <Box direction="row" justify="center">
                    <div style={{display: 'inline-block', margin: 10}}>
                        <Image
                            src="/house-art.jpg"
                            alt="Art Sample 1"
                            width={150}
                            height={200}
                        />
                    </div>
                    <div style={{display: 'inline-block', margin: 10}}>
                        <Image
                            src="/butterfly.jpg"
                            alt="Art Sample 2"
                            width={150}
                            height={200}
                        />
                    </div>
                    <div style={{display: 'inline-block', margin: 10}}>
                        <Image
                            src="/abstract.jpg"
                            alt="Art Sample 3"
                            width={150}
                            height={200}
                        />
                    </div>
                </Box>

                <Box direction="row" justify="center">
                    <Text style={{display: 'inline-block', margin: 40}}>House Art</Text>
                    <Text style={{display: 'inline-block', margin: 40}}>Butterfly Art</Text>
                    <Text style={{display: 'inline-block', margin: 40}}>Abstract Art</Text>
                </Box>                
                <br/>
                <br/>

                <Heading level="2">
                    Popular Artists
                </Heading>
                <br/>

                <Box direction="row" justify="center">
                    <Box width="large" pad="medium">
                        <Image
                            src="/house-art.jpg"
                            alt="Art Sample 1"
                            width={300}
                            height={400}
                        />
                    </Box>
                    <Box pad="medium">
                        <Text>Artist 1 - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    </Box>
                </Box>

                <Box direction="row" justify="center">
                    <Box width="large" pad="medium">
                        <Image
                            src="/house-art.jpg"
                            alt="Art Sample 1"
                            width={300}
                            height={400}
                        />
                    </Box>
                    <Box pad="medium">
                        <Text>Artist 2 - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    </Box>
                </Box>

                <Box direction="row" justify="center">
                    <Box width="large" pad="medium">
                        <Image
                            src="/house-art.jpg"
                            alt="Art Sample 1"
                            width={300}
                            height={400}
                        />
                    </Box>
                    <Box pad="medium">
                        <Text>Artist 3 - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</Text>
                    </Box>
                </Box>
                    
                
                <Heading level="3">
                    Music and Writing
                </Heading>
                <Text>
                    Music and Writing Description - "Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Text>
                <br/>
                <br/>
                <br/>
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