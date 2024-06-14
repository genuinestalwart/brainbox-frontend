import { Link, NavLink } from "react-router-dom";
import { Box, CircularProgress } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { Logout } from "@mui/icons-material";
import StyledButton from "@/components/shared/StyledButton";
import NavDrawer from "@/components/shared/NavDrawer";

const links = [
	{ path: "/", text: "Home" },
	{ path: "/courses", text: "Courses" },
];

const dashLinks = [
	{ path: "/account", text: "Dashboard" },
	{ path: "/account/my-courses", text: "My Courses" },
	{ path: "/account/enrolled-courses", text: "Enrolled Courses" },
];

const Navbar = ({ navbarOpen, setNavbarOpen }) => {
	const { loading, logOut, user } = useContext(AuthContext);

	return (
		<Box>
			<Box
				alignItems='center'
				component='nav'
				display={{ xs: "none", md: "flex" }}
				gap={4}>
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

				{user &&
					dashLinks.map((item, i) => (
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
				) : (
					<Link className='block' to='/login'>
						<StyledButton
							sx={{
								boxShadow: 0,
								"&:hover": { boxShadow: 0 },
							}}>
							Login
						</StyledButton>
					</Link>
				)}
			</Box>

			<NavDrawer navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen} />
		</Box>
	);
};

export default Navbar;
