import Sidebar from "@/components/shared/Sidebar";
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Outlet } from "react-router-dom";

const DashLayout = () => {
	return (
		<Box component='main' display={{ md: "flex" }} height={{ md: "100vh" }}>
			<Sidebar />

			<Box
				bgcolor={grey[50]}
				component='section'
				flexGrow={1}
				height={{ md: "100%" }}
				p={8}
				sx={{ overflowY: { md: "auto" } }}>
				<Outlet />
			</Box>
		</Box>
	);
};

export default DashLayout;
