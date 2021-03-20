// * This is a panel accessible to artist, to upload content to our S3 bucket

import { Grommet, Box, Footer, Heading, Text, Menu } from 'grommet';
import Link from 'next/link';
import Image from 'next/image';

export default function ArtistPage() {
  return (
    <Grommet className="outerBackground">
      <Box justify="center" align="center">
        <Heading>Artist Page</Heading>
      </Box>

      <Box direction="row" justify="center">
        <Image
          src="/Sample User.webp"
          alt="Sample User Icon"
          width={200}
          height={200}
        />
      </Box>

      <Box width="xlarge" alignContent="left" margin="xlarge">
        <Box>
          <Heading>
            <strong>Artist Name</strong>
          </Heading>
          <br />
          <Text>Placeholder Info 1</Text>
          <br />
          <Text>Placeholder Info 2</Text>
          <br />

          {/* <FileInput name="file" /> */}

          <Menu
            label="Actions"
            items={[
              { label: 'Upload Image', onClick: () => {} },
              { label: 'Delete Image', onClick: () => {} },
            ]}
          />
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
        <br />
      </Box>

      <Box margin="large">
        <main>
          {' '}
          <Link href="/">
            <a>
              <strong>Home Page</strong>
            </a>
          </Link>
        </main>
      </Box>
      <br />
      <br />
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
