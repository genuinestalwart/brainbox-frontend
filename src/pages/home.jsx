import Hero from "@/components/home/Hero";
import { Box } from "@mui/material";
import { Helmet } from "react-helmet-async";

const HomePage = () => {
	return (
		<Box component='main'>
			<Helmet>
				<title>Brainbox | Home</title>
			</Helmet>

			<Hero />
		</Box>
	);
};

export default HomePage;
