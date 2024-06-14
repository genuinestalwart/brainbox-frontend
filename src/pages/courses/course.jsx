import Payment from "@/components/account/Payment";
import StyledButton from "@/components/shared/StyledButton";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { Box, Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

const CoursePage = () => {
	const [open, setOpen] = useState(false);
	const { id } = useParams();
	const axiosSecure = useAxiosSecure();
	const { user } = useAuth();

	const { data = {}, refetch } = useQuery({
		queryKey: ["course", id],
		queryFn: async () => {
			const res = await axiosSecure.get(`/courses/${id}/${user.uid}`);
			return res.data;
		},
	});

	return (
		<Box component='main'>
			<Helmet>
				<title>Brainbox | Course</title>
			</Helmet>

			{open ? (
				<Box
					alignItems='center'
					className='min-h-[calc(100vh_-_4rem)]'
					display='flex'
					justifyContent='center'
					sx={{ my: 4 }}
					width='100%'>
					<Payment
						data={data?.course}
						refetch={refetch}
						setOpen={setOpen}
					/>
				</Box>
			) : (
				<Container
					className='grid-cols-1 md:grid-cols-4'
					sx={{ display: "grid", gap: { md: 8 } }}>
					<Box
						className='md:col-span-3 rounded-lg space-y-2'
						sx={{ boxShadow: 2, my: 4, p: 8 }}>
						<Typography
							component='h1'
							fontWeight={700}
							variant='h3'>
							{data?.course?.title}
						</Typography>

						<Typography
							fontStyle='italic'
							fontWeight={600}
							variant='h5'>
							{data?.course?.instructors}
						</Typography>

						<Typography
							component='pre'
							whiteSpace='pre-wrap'
							variant='body1'>
							{data?.course?.description}
						</Typography>
					</Box>

					<Box
						className='rounded-lg space-y-2'
						sx={{ boxShadow: 2, my: 4, p: 8 }}>
						<Typography fontWeight={600} variant='h5'>
							Price: ${data?.course?.price}
						</Typography>

						{user.uid !== data?.course?.owner && (
							<StyledButton
								disabled={data?.alreadyPaid}
								onClick={() => setOpen(true)}>
								{data?.alreadyPaid
									? "Enrolled"
									: "Enroll and Pay"}
							</StyledButton>
						)}
					</Box>
				</Container>
			)}
		</Box>
	);
};

export default CoursePage;
