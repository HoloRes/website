import Link from 'next/link';
import { Grommet, Header, Box, Footer, Heading } from 'grommet';

export default function Home() {
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
          <Heading>Home Page</Heading>
        </Box>

        <br />

        <main>
          {' '}
          <Link href="/creatives">
            <a>Art and Creatives</a>
          </Link>
          <br />{' '}
          <Link href="/translations">
            <a>Translations</a>
          </Link>
          <br />{' '}
          <Link href="/games">
            <a>Games</a>
          </Link>
          <br />{' '}
          <Link href="/streaming">
            <a>Streaming</a>
          </Link>
          <br />{' '}
          <Link href="/language-exchange">
            <a>Language Exchange</a>
          </Link>
          <br />
          <Heading level="3">Admin Pages</Heading>{' '}
          <Link href="/dash/admin">
            <a>Admin Page</a>
          </Link>
          <br />{' '}
          <Link href="/dash/artist">
            <a>Artist Page</a>
          </Link>
          <br />
          <br />
          <br />
          <br />
          <br />{' '}
          <Link href="/join_us">
            <a>
              <strong>Join Us!</strong>
            </a>
          </Link>
          <br />
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
