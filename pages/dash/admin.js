// * This is a panel accessible for staff, to moderate the uploaded content

import {
  Grommet,
  Box,
  Footer,
  Heading,
  Header,
  Tabs,
  Tab,
  Table,
  TableHeader,
  TableRow,
  TableCell,
  TableBody,
  Menu,
  Clock,
  Anchor
} from 'grommet';
import Link from 'next/link';
import { useState } from 'react';
import ArtistPage from './artist';



function handleClick(e) {
  e.preventDefault();    
  console.log('The link was clicked.');  
}

export default function AdminPage() {
  const [click, setClick] = useState('');


  return (
    <Grommet className="outerBackground">
      <Header background="black" >
        <Heading level="2" margin="small">Admin Portal</Heading>
        <Clock type="digital" margin="small"/>
      </Header>

      <Box justify="center" align="center">
        <Heading>Admin Page</Heading>
      </Box>

      {/* JSX to consider later 

      <TableCell scope="col" border="bottom">
                    Discord ID
                  </TableCell>
                  <TableCell scope="col" border="bottom">
                    Email Address
                  </TableCell>
      
              <TableCell>Artist1#0001</TableCell>
      <TableCell>artist1@gmail.com</TableCell>

              <TableCell>Artist2#0002</TableCell>
      <TableCell>artist2@gmail.com</TableCell>
      
              <TableCell>Artist3#0003</TableCell>
        <TableCell>artist3@gmail.com</TableCell>

      */}

      {/* Admin Tabs */}
      <Tabs>
        {/* Artist Table */}
        <Tab title="Artist List">
          <Box width="xlarge" alignContent="center" margin={{"horizontal":"xlarge", "vertical":"medium"}}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell scope="col" border="bottom">
                    Artist Name
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow width="xlarge" alignContent="center" margin={{"horizontal":"xlarge", "vertical":"medium"}}>
                  <Link href="/dash/artist" onClick={() => ArtistPage.setArtistIndex(artistIndex + 1)}>
                    <Anchor>
                      <TableCell scope="row">
                        <strong>Artist 1</strong>
                      </TableCell>
                    </Anchor>     
                  </Link>
                </TableRow>
                <TableRow>
                  <Link href="/dash/artist">
                    <Anchor>
                      <TableCell scope="row">
                        <strong>Artist 2</strong>
                      </TableCell>
                    </Anchor>
                  </Link>
                </TableRow>
                <TableRow>
                  <Link href="/dash/artist">
                    <Anchor>
                      <TableCell scope="row">
                        <strong>Artist 3</strong>
                      </TableCell>
                    </Anchor>
                  </Link>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Tab>

        {/* User Table */}
        <Tab title="User List">
          <Box width="xlarge" alignContent="center" margin={{"horizontal":"xlarge", "vertical":"medium"}}>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableCell scope="col" border="bottom">
                    Artist Name
                  </TableCell>
                  <TableCell scope="col" border="bottom">
                    Discord ID
                  </TableCell>
                  <TableCell scope="col" border="bottom">
                    Email Address
                  </TableCell>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell scope="row">
                    <strong>User 1</strong>
                  </TableCell>
                  <TableCell>User1#0001</TableCell>
                  <TableCell>user1@gmail.com</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <strong>User 2</strong>
                  </TableCell>
                  <TableCell>User2#0002</TableCell>
                  <TableCell>user2@gmail.com</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell scope="row">
                    <strong>User 3</strong>
                  </TableCell>
                  <TableCell>User3#0003</TableCell>
                  <TableCell>user3@gmail.com</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
        </Tab>

        {/* Image List */}
        <Tab title="Image List">
          <Box width="xlarge" alignContent="center" margin={{"horizontal":"xlarge", "vertical":"medium"}}>
            <Box justify="right" gap="small" margin={{"horizontal":"xlarge", "vertical":"medium"}}>
              {/* Remove this if not required */}
              <Heading>Image List</Heading>
              <Menu
                label="Actions"
                items={[
                  { label: 'Upload Image', onClick: () => {} },
                  { label: 'Delete Image', onClick: () => {} },
                ]}
              />
            </Box>

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
          </Box>
        </Tab>
      </Tabs>

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
