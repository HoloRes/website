import Link from 'next/link';
import React from 'react';
import ReactPlayer from 'react-player';
import { Grommet, Header, Box, Button, Footer, Heading, Text} from 'grommet';

export default function Translations() {
    return (
        <Grommet className="myTheme" >
            <Header background={{color: 'red' }} direction="row" pad="small" justify="center">
                <h1 className="headerFont">
                    HOLOLIVE RESORT
                </h1>
            </Header>
            <div className="backgroundColour">

                <Box direction="row" justify="center" >
                    <Heading>
                        Translations
                    </Heading>
                </Box>
                <br/>

                <Box direction="row" justify="center" >
                    <ReactPlayer url='https://www.youtube.com/watch?v=etWRya4VfjU&' />
                </Box>
                <br/>
                <br/>

                <Text>
                    TL Team Description - "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </Text>
                <br/>
                <br/>

                <Button label="Youtube Channel Link Button" color="red"></Button>
                <br/>
                <br/>

                <Button label="TL Team Applications Link" color="green"></Button>
                <br/>
                <br/>


                <main>
                    {' '}
                    <Link href="/">
                        <a><strong>Home Page</strong></a>
                    </Link>
                </main>

            </div>
            <Footer background={{color: 'black' }} direction="row" pad="small" justify="center">
                <h2>This is a footer</h2>
            </Footer>
        </Grommet>
    )
  }
