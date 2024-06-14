import { AuthContext } from "@/providers/AuthProvider";
import { Logout, Menu } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import StyledButton from "@/components/shared/StyledButton";
import NavDrawer from "@/components/shared/NavDrawer";
const links = [
	{ path: "/", text: "Home" },
	{ path: "/courses", text: "Courses" },
	{ path: "/account", text: "Dashboard" },
	{ path: "/account/my-courses", text: "My Courses" },
	{ path: "/account/enrolled-courses", text: "Enrolled Courses" },
];

const Sidebar = () => {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const { logOut } = useContext(AuthContext);

	return (
		<Box
			component='header'
			height='100%'
			maxWidth={{ md: "30ch" }}
			width={{ xs: "100%", md: "30%" }}>
			<Box
				alignItems='center'
				display='flex'
				justifyContent='space-between'>
				<Box
					alignItems='center'
					className='h-16'
					display='flex'
					gap={2}
					justifyContent='center'>
					<img alt='logo' className='h-12 w-auto' src='/logo.png' />

					<Typography fontWeight={600} variant='h4'>
						<span className='text-accent'>Brain</span>box
					</Typography>
				</Box>

				<IconButton
					aria-label='open drawer'
					color='inherit'
					onClick={() => setSidebarOpen(!sidebarOpen)}
					sx={{ display: { md: "none" } }}>
					<Menu fontSize='large' />
				</IconButton>
			</Box>

			<Box
				component='nav'
				display={{ xs: "none", md: "flex" }}
				flexDirection='column'
				gap={2}
				mx='auto'
				width='80%'>
				{links.map((item, i) => (
					<NavLink
						className={({ isActive }) =>
							`font-semibold py-2 rounded text-center w-full ${
								isActive ? "bg-accent" : "hover:bg-secondary"
							}`
						}
						end
						key={i}
						to={item.path}>
						{item.text}
					</NavLink>
				))}

				<StyledButton
					color='error'
					endIcon={<Logout />}
					onClick={logOut}
					sx={{
						boxShadow: 0,
						color: "primary.main",
						"&:hover": { boxShadow: 0 },
					}}>
					Log Out
				</StyledButton>
			</Box>

			<NavDrawer
				navbarOpen={sidebarOpen}
				setNavbarOpen={setSidebarOpen}
			/>
		</Box>
	);
};

export default Sidebar;
