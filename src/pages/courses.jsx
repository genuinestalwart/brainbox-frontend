import CourseCard from "@/components/shared/CourseCard";
import StyledButton from "@/components/shared/StyledButton";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { Box, CircularProgress, Container } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const CoursesPage = () => {
	const axiosSecure = useAxiosSecure();
	const { data = [], isLoading } = useQuery({
		queryKey: ["courses"],
		queryFn: async () => {
			const res = await axiosSecure.get("/courses");
			return res.data;
		},
	});

	return (
		<Container component='main'>
			<Helmet>
				<title>Brainbox | Courses</title>
			</Helmet>

			{isLoading ? (
				<Box
					alignItems='center'
					className='min-h-[calc(100vh_-_4rem)]'
					display='flex'
					justifyContent='center'>
					<CircularProgress color='accent' />
				</Box>
			) : (
				<Box
					className='grid-cols-1 md:grid-cols-2'
					display='grid'
					gap={8}
					my={8}>
					{data.toReversed().map((item, i) => (
						<CourseCard
							cardActions={
								<Link to={`/courses/${item._id}`}>
									<StyledButton>Read More</StyledButton>
								</Link>
							}
							item={item}
							key={i}
						/>
					))}
				</Box>
			)}
		</Container>
	);
};

export default CoursesPage;
