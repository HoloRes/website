import Link from 'next/link'
import Head from 'next/head'
import { Grommet, Header, Box, Button, Footer, Heading} from 'grommet';

export default function JoinUs() {
    return (
        <Grommet className="myTheme" >
            <Header background={{color: 'red' }} direction="row" pad="small" justify="center">
                <Heading level="1" className="headerFont">
                    HOLOLIVE RESORT
                </Heading>
            </Header>
            
            <div className="backgroundColour">
                <Box direction="row" justify="center" >
                    <Heading>
                        Join Us!
                    </Heading>
                </Box>
                <br/>

                <Box direction="row" justify="center" >
                    <Heading level="1">
                        THE RESORT IS OPEN FOR BUSINESS!
                    </Heading>
                </Box>
                <br/>

                <Box direction="row" justify="center" >
                    <Button label="Discord Link Button" color="blue"></Button>
                </Box>
                
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