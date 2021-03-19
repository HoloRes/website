import Link from 'next/link';
import Head from 'next/head';
import { Grommet, Header, Box, Button, Footer, Heading, Text} from 'grommet';

export default function Gallery() {
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
                        Gallery
                    </Heading>
                </Box>
                    
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
    );
}