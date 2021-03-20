import Link from 'next/link';
import Image from 'next/image';
import { Grommet, Header, Box, Footer, Heading, Text } from 'grommet';

export default function LanguageExchange() {
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
        <Box direction="row" justify="center">
          <Heading>Language Exchange</Heading>
        </Box>
        <br />

        <Text>
          Language Exchange Intro - "Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Text>
        <br />
        <br />
        <br />

        <Box direction="row" justify="center">
          <div
            style={{
              display: 'inline-block',
              marginLeft: 45,
              marginRight: 45,
              marginBottom: 20,
            }}
          >
            <Image
              src="/Ear Icon.png"
              alt="Listening Image"
              width={100}
              height={100}
            />
            <br />
            <br />
            <Text
              style={{
                display: 'inline-block',
                textAlign: 'justify',
                paddingLeft: 10,
              }}
            >
              Listening
            </Text>
          </div>
          <div
            style={{
              display: 'inline-block',
              marginLeft: 45,
              marginRight: 45,
              marginBottom: 20,
            }}
          >
            <Image
              src="/Speaking Icon.png"
              alt="Speaking Image"
              width={100}
              height={100}
            />
            <br />
            <br />
            <Text
              style={{
                display: 'inline-block',
                textAlign: 'justify',
                paddingLeft: 10,
              }}
            >
              Speaking
            </Text>
          </div>
          <div
            style={{
              display: 'inline-block',
              marginLeft: 45,
              marginRight: 45,
              marginBottom: 20,
            }}
          >
            <Image
              src="/Reading Icon.png"
              alt="Reading Image"
              width={100}
              height={100}
            />
            <br />
            <br />
            <Text
              style={{
                display: 'inline-block',
                textAlign: 'justify',
                paddingLeft: 20,
              }}
            >
              Reading
            </Text>
          </div>
          <div
            style={{
              display: 'inline-block',
              marginLeft: 45,
              marginRight: 45,
              marginBottom: 20,
            }}
          >
            <Image
              src="/Writing Icon.webp"
              alt="Writing Image"
              width={100}
              height={100}
            />
            <br />
            <br />
            <Text
              style={{
                display: 'inline-block',
                textAlign: 'justify',
                paddingLeft: 15,
              }}
            >
              Writing
            </Text>
          </div>
        </Box>
        <br />
        <br />

        <Text>
          Language Exchange Description - "Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
          exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
          proident, sunt in culpa qui officia deserunt mollit anim id est
          laborum."
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
