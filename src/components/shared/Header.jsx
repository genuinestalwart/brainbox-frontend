import { AuthContext } from "@/providers/AuthProvider";
import { Logout } from "@mui/icons-material";
import {
	Box,
	Button,
	CircularProgress,
	Container,
	Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
const links = [
	{ path: "/", text: "Home" },
	{ path: "/courses", text: "Courses" },
];

const Header = () => {
	const { loading, logOut, user } = useContext(AuthContext);

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

			<Box alignItems='center' display='flex' gap={4}>
				{links.map((item, i) => (
					<NavLink
						className={({ isActive }) =>
							`font-semibold ${
								isActive
									? "text-accent"
									: "hover:underline underline-offset-2"
							}`
						}
						key={i}
						to={item.path}>
						{item.text}
					</NavLink>
				))}

				{loading ? (
					<CircularProgress color='accent' />
				) : user ? (
					<Button
						color='error'
						onClick={logOut}
						sx={{
							boxShadow: 0,
							color: "primary.main",
							fontWeight: 600,
							"&:hover": { boxShadow: 0 },
						}}
						variant='contained'>
						<span className='hidden md:inline'>Log Out</span>
						<Logout sx={{ display: { md: "none" } }} />
					</Button>
				) : (
					<Link className='block' to='/login'>
						<Button
							color='accent'
							sx={{
								boxShadow: 0,
								fontWeight: 600,
								"&:hover": { boxShadow: 0 },
							}}
							variant='contained'>
							Login
						</Button>
					</Link>
				)}
			</Box>
		</Container>
	);
};

export default Header;
