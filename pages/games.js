import Link from 'next/link';
import Image from 'next/image';
import { Grommet, Header, Box, Footer, Heading, Text } from 'grommet';

export default function Games() {
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
          <Heading>Games</Heading>
        </Box>
        <br />

        <Text>
          Translations Intro - "Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Text>
        <br />
        <br />

        <Box direction="row" justify="center">
          <Heading level="4">Minecraft - Hololive Construction</Heading>
        </Box>

        <Box direction="row" justify="center">
          <Image
            src="/minecraft.png"
            alt="Hololive Construction Logo"
            width={200}
            height={175}
          />
        </Box>
        <br />

        <Text>
          Minecraft Description - "Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum."
        </Text>
        <br />
        <br />

        <Box direction="row" justify="center">
          <Heading level="2">Multiplayer</Heading>
        </Box>
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
              src="/Apex Legends Logo.png"
              alt="FPS Image"
              width={100}
              height={100}
            />
            <br />
            <br />
            <Text
              style={{
                display: 'inline-block',
                textAlign: 'justify',
                paddingLeft: 33,
              }}
            >
              FPS
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
              src="/LoL Logo.png"
              alt="MOBA Image"
              width={100}
              height={100}
            />
            <br />
            <br />
            <Text
              style={{
                display: 'inline-block',
                textAlign: 'justify',
                paddingLeft: 25,
              }}
            >
              MOBA
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
              src="/Destiny 2 Logo.png"
              alt="Raiding Image"
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
              Raiding
            </Text>
          </div>
        </Box>
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
              src="/Tetris-Logo-PNG-File.png"
              alt="Tetris Image"
              width={100}
              height={100}
            />
            <br />
            <br />
            <Text
              style={{
                display: 'inline-block',
                textAlign: 'justify',
                paddingLeft: 30,
              }}
            >
              Tetris
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
              src="/Azur Lane Logo.webp"
              alt="Mobile Gaming Image"
              width={100}
              height={100}
            />
            <br />
            <br />
            <Text style={{ display: 'inline-block', textAlign: 'justify' }}>
              Mobile Gaming
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
              src="/Tick_Mark_Dark-512.webp"
              alt="Other Image"
              width={90}
              height={120}
            />
            <br />
            <Text
              style={{
                display: 'inline-block',
                textAlign: 'justify',
                paddingLeft: 20,
              }}
            >
              Other
            </Text>
          </div>
        </Box>

        <br />
        <br />

        <Text>
          Various Game Types Description - "Lorem ipsum dolor sit amet,
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
