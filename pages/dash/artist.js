// * This is a panel accessible to artist, to upload content to our S3 bucket

import { Grommet, Box, Footer, Heading, Text, Menu, Header, Clock, Anchor } from 'grommet';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

let artistName = ["Artist 0", "Artist 1", "Artist 2"];

let artistEmail = ["Artist 0", "artist1@gmail.com", "artist2@gmail.com"];

let artistTwitter = ["@Artist0", "@Artist1","@Artist2"];

export default function ArtistPage() {

  const [ artistIndex, setArtistIndex ] = useState(0);

  return (
    <Grommet className="outerBackground">
      <Header background="black" >
        <Heading level="2" margin="small">Admin Portal</Heading>
        <Clock type="digital" margin="small"/>
      </Header>

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

      <Box width="xlarge" alignContent="left" margin={{"horizontal":"xlarge", "vertical":"xsmall"}}>
        <Box>
          <Heading>
            <strong>{artistName[artistIndex]}</strong>
          </Heading>
          <br />
          <Text>Email: {artistEmail[artistIndex]}</Text>
          <br />
          <Text>Twitter: {artistTwitter[artistIndex]}</Text>
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
          <Link href="/dash/admin">
            <Anchor>
              <strong>Admin Page</strong>
            </Anchor>
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
