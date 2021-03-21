import Link from 'next/link';
import Image from 'next/image';
import { Grommet, Header, Box, Footer, Heading } from 'grommet';

export default function Gallery() {
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
          <Heading>Gallery</Heading>
        </Box>

        <Box direction="row" justify="center">
          <Heading>Featured Art</Heading>
        </Box>

        <Box direction="row" justify="center" gap="small">

          

          {
          /*
            <Box
            height="300px"
            width="600px"
            border={{
              color: 'border',
              size: 'medium',
              style: 'solid',
              side: 'all',
            }}
            background="#000080"
          />
          <Box
            height="300px"
            width="600px"
            border={{
              color: 'border',
              size: 'medium',
              style: 'solid',
              side: 'all',
            }}
            background="#000080"
          /> */
          }
          
        </Box>
        <br />
        <br />

        <Box>
          <Box direction="row" justify="center">
            <Heading level="2">
              Take a look at the rest of our collection!
            </Heading>
          </Box>
          <Box direction="row" justify="right" alignSelf="end" gap="small">
            <Image
              src="/Magnifying Glass.png"
              alt="Search Icon"
              width={50}
              height={50}
            />
            <Image src="/filter.png" alt="Filter Icon" width={50} height={50} />
          </Box>
        </Box>
        <br />
        <br />

        <Box direction="row" justify="center" gap="small">
          <Box
            height="300px"
            width="240px"
            border={{
              color: 'border',
              size: 'medium',
              style: 'solid',
              side: 'all',
            }}
            background="#000080"
          />
          <Box
            height="300px"
            width="240px"
            border={{
              color: 'border',
              size: 'medium',
              style: 'solid',
              side: 'all',
            }}
            background="#000080"
          />
          <Box
            height="300px"
            width="240px"
            border={{
              color: 'border',
              size: 'medium',
              style: 'solid',
              side: 'all',
            }}
            background="#000080"
          />
          <Box
            height="300px"
            width="240px"
            border={{
              color: 'border',
              size: 'medium',
              style: 'solid',
              side: 'all',
            }}
            background="#000080"
          />
          <Box
            height="300px"
            width="240px"
            border={{
              color: 'border',
              size: 'medium',
              style: 'solid',
              side: 'all',
            }}
            background="#000080"
          />
        </Box>
        <br />
        <Box direction="row" justify="center" gap="small">
          <Box
            height="300px"
            width="240px"
            border={{
              color: 'border',
              size: 'medium',
              style: 'solid',
              side: 'all',
            }}
            background="#000080"
          />
          <Box
            height="300px"
            width="240px"
            border={{
              color: 'border',
              size: 'medium',
              style: 'solid',
              side: 'all',
            }}
            background="#000080"
          />
          <Box
            height="300px"
            width="240px"
            border={{
              color: 'border',
              size: 'medium',
              style: 'solid',
              side: 'all',
            }}
            background="#000080"
          />
          <Box
            height="300px"
            width="240px"
            border={{
              color: 'border',
              size: 'medium',
              style: 'solid',
              side: 'all',
            }}
            background="#000080"
          />
          <Box
            height="300px"
            width="240px"
            border={{
              color: 'border',
              size: 'medium',
              style: 'solid',
              side: 'all',
            }}
            background="#000080"
          />
        </Box>
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
