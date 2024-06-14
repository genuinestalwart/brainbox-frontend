import { Menu } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import Navbar from "@/components/shared/Navbar";

const Header = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);

	return (
		<Container
			className='h-16'
			component='header'
			sx={{
				alignItems: "center",
				display: "flex",
				justifyContent: "space-between",
			}}>
			<Box alignItems='center' display='flex' gap={2} height='100%'>
				<img alt='logo' className='h-4/5 w-auto' src='/logo.png' />

				<Typography fontWeight={600} variant='h4'>
					<span className='text-accent'>Brain</span>box
				</Typography>
			</Box>

			<Navbar setNavbarOpen={setNavbarOpen} navbarOpen={navbarOpen} />

			<IconButton
				aria-label='open drawer'
				color='inherit'
				onClick={() => setNavbarOpen(!navbarOpen)}
				sx={{ display: { md: "none" } }}>
				<Menu fontSize='large' />
			</IconButton>
		</Container>
	);
};

export default Header;
