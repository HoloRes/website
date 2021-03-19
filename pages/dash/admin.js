// * This is a panel accessible for staff, to moderate the uploaded content

import { Grommet, Header, Box, Button, Footer, Heading, Text} from 'grommet';
import Link from 'next/link';

export default function AdminPage() {
	return (
		<Grommet className="outerBackground">
			<Box justify="center" align="center">
				<Heading>
					Admin Page
				</Heading>
			</Box>
				
			<Box justify="right" gap="small" margin="large">
				<Button label="Upload" alignSelf="end"></Button>
				<Button label="Delete" alignSelf="end"></Button>
            </Box>



























			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<br/>
			<Box justify="center" align="center">
				<Text alignSelf="center" margin="large">
					Placeholder - "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				</Text>

				<Text alignSelf="center" margin="large">
					Placeholder - "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
					sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
					Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
				</Text>
			</Box>
			<Box margin="large">
				<main>
					{' '}
					<Link href="/">
						<a><strong>Home Page</strong></a>
					</Link>  
				</main>
			</Box>
			<br/>
			<br/>
			<Footer background={{color: 'black' }} direction="row" pad="small" justify="center">
                <h2>This is a footer</h2>
            </Footer>
		</Grommet>		
	)
}
