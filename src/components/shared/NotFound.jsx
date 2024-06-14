import { Box } from "@mui/material";
import error404 from "@/assets/not-found.svg";
import { Home } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import StyledButton from "@/components/shared/StyledButton";

const NotFound = () => {
	return (
		<Box
			className='space-y-4'
			display='flex'
			height='100vh'
			flexDirection='column'
			justifyContent='center'
			maxHeight={{ "2xl": "810px" }}>
			<Helmet>
				<title>Brainbox</title>
			</Helmet>

			<img
				alt='page not found'
				className='mx-auto sm:w-1/2 md:w-1/3'
				src={error404}
			/>

			<Link className='block' to='/'>
				<StyledButton
					endIcon={<Home />}
					sx={{ display: "flex", mx: "auto" }}>
					Back To Home
				</StyledButton>
			</Link>
		</Box>
	);
};

export default NotFound;
