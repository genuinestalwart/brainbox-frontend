import CourseCard from "@/components/shared/CourseCard";
import StyledButton from "@/components/shared/StyledButton";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

const EnrolledCoursePage = () => {
	const { user } = useAuth();
	const axiosSecure = useAxiosSecure();

	const { data = [], isLoading } = useQuery({
		queryKey: ["courses", user?.uid],
		queryFn: async () => {
			const res = await axiosSecure.get(`/enrolled-courses/${user.uid}`);
			return res.data;
		},
	});

	return isLoading ? (
		<Box
			alignItems='center'
			className='min-h-screen'
			display='flex'
			justifyContent='center'>
			<CircularProgress color='accent' />
		</Box>
	) : (
		<Box className='min-h-screen'>
			<Box
				className='grid-cols-1 md:grid-cols-2'
				display='grid'
				gap={8}
				p={8}>
				{data.toReversed().map((item, i) => (
					<CourseCard
						cardActions={<StyledButton>Continue</StyledButton>}
						hidePrice={true}
						item={item}
						key={i}
					/>
				))}
			</Box>
		</Box>
	);
};

export default EnrolledCoursePage;
