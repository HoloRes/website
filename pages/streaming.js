import Link from 'next/link';
import Image from 'next/image';
import { Grommet, Header, Box, Footer, Heading, Text } from 'grommet';

export default function Streaming() {
  return (
    <Grommet className="myTheme">
      <Header
        background={{ color: 'red' }}
        direction="row"
        pad="small"
        justify="center"
      >
        <Heading level="1" className="headerFont">
          HOLOLIVE RESORT
        </Heading>
      </Header>

      <div className="backgroundColour">
        <Heading>Streaming</Heading>
        <br />

        <Text>
          Streaming Intro - "Lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."
        </Text>
        <br />
        <br />

        <Box direction="row" justify="center">
          <Box width="large" pad="medium">
            <Image
              src="/Number 1.png"
              alt="Streamer 1"
              width={200}
              height={200}
            />
          </Box>
          <Box pad="medium">
            <Text>
              <strong>Streamer 1 -</strong> "Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum."
            </Text>
          </Box>
        </Box>

        <Box direction="row" justify="center">
          <Box width="large" pad="medium">
            <Image
              src="/Number 2.png"
              alt="Streamer 2"
              width={200}
              height={200}
            />
          </Box>
          <Box pad="medium">
            <Text>
              <strong>Streamer 2 -</strong> "Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum."
            </Text>
          </Box>
        </Box>

        <Box direction="row" justify="center">
          <Box width="large" pad="medium">
            <Image
              src="/Number 3.png"
              alt="Streamer 3"
              width={200}
              height={200}
            />
          </Box>
          <Box pad="medium">
            <Text>
              <strong>Streamer 3 -</strong> "Lorem ipsum dolor sit amet,
              consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
              labore et dolore magna aliqua. Ut enim ad minim veniam, quis
              nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
              occaecat cupidatat non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum."
            </Text>
          </Box>
        </Box>
        <br />
        <br />

        <Text>
          Streamer Description - "Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Text>
        <br />
        <br />

        <main>
          {' '}
          <Link href="/">
            <a>
              <strong>Home Page</strong>
            </a>
          </Link>
        </main>
      </div>
      <Footer
        background={{ color: 'black' }}
        direction="row"
        pad="small"
        justify="center"
      >
        <h2>This is a footer</h2>
      </Footer>
    </Grommet>
  );
}
