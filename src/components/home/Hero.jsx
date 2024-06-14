import { Box, Container, Typography } from "@mui/material";
import heroImage from "@/assets/hero.svg";
import StyledButton from "@/components/shared/StyledButton";
import { Link } from "react-router-dom";

const Hero = () => {
	return (
		<Container
			className='min-h-[calc(100vh_-_4rem)]'
			sx={{
				alignItems: "center",
				display: "flex",
				flexDirection: { xs: "column-reverse", md: "row" },
				py: { xs: 6, md: 0 },
			}}>
			<Box className='space-y-4' width={{ xs: "100%", md: "50%" }}>
				<Typography component='h1' fontWeight={800} variant='h3'>
					<span className='text-accent'>Creating A Course</span> Has
					Been Made Easy
				</Typography>

				<Typography variant='body1'>
					Ever felt the need of a platform for your students? Where
					you can create your own courses as much as you want and
					anyone who buys or enrolls in it has to pay you for the
					course? Look no further, we present to you the best paid
					courses platform of the planet!
				</Typography>

				<Link className='block' to='/courses'>
					<StyledButton>See All Courses</StyledButton>
				</Link>
			</Box>

			<Box width={{ xs: "100%", md: "50%" }}>
				<img alt='hero' className='h-auto w-full' src={heroImage} />
			</Box>
		</Container>
	);
};

export default Hero;
