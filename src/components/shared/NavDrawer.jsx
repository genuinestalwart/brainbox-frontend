import { NavLink } from "react-router-dom";
import { Box, Drawer } from "@mui/material";
import { useContext } from "react";
import { AuthContext } from "@/providers/AuthProvider";
import { Logout } from "@mui/icons-material";
import StyledButton from "@/components/shared/StyledButton";

const links = [
	{ path: "/", text: "Home" },
	{ path: "/courses", text: "Courses" },
];

const dashLinks = [
	{ path: "/account", text: "Dashboard" },
	{ path: "/account/my-courses", text: "My Courses" },
	{ path: "/account/enrolled-courses", text: "Enrolled Courses" },
];

const NavDrawer = ({ navbarOpen, setNavbarOpen }) => {
	const { logOut, user } = useContext(AuthContext);

	return (
		<Drawer
			classes={{ paper: "space-y-2" }}
			open={navbarOpen}
			onClose={() => setNavbarOpen(!navbarOpen)}
			sx={{
				display: { md: "none" },
				"& .MuiDrawer-paper": {
					alignItems: "center",
					display: "flex",
					flexDirection: "column",
					py: 8,
					width: "80%",
				},
			}}>
			<Box
				component='nav'
				display='flex'
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
						onClick={() => setNavbarOpen(!navbarOpen)}
						to={item.path}>
						{item.text}
					</NavLink>
				))}

				{user &&
					dashLinks.map((item, i) => (
						<NavLink
							className={({ isActive }) =>
								`font-semibold py-2 rounded text-center w-full ${
									isActive
										? "bg-accent"
										: "hover:bg-secondary"
								}`
							}
							end
							key={i}
							onClick={() => setNavbarOpen(!navbarOpen)}
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
		</Drawer>
	);
};

export default NavDrawer;
