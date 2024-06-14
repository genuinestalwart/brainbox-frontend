import DeleteCourse from "@/components/modals/DeleteCourse";
import EditCourse from "@/components/modals/EditCourse";
import NewCourse from "@/components/modals/NewCourse";
import CourseCard from "@/components/shared/CourseCard";
import StyledButton from "@/components/shared/StyledButton";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { Add } from "@mui/icons-material";
import { Box, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const MyCoursesPage = () => {
	const [item, setItem] = useState(true);
	const [openNew, setOpenNew] = useState(false);
	const [openEdit, setOpenEdit] = useState(false);
	const [openDelete, setOpenDelete] = useState(false);
	const axiosSecure = useAxiosSecure();
	const { user } = useAuth();

	const {
		data = [],
		isLoading,
		refetch,
	} = useQuery({
		queryKey: ["courses", user?.uid],
		queryFn: async () => {
			const res = await axiosSecure.get(`/my-courses/${user.uid}`);
			return res.data;
		},
	});

	return (
		<Box className='space-y-8' p={8}>
			<StyledButton
				onClick={() => setOpenNew(true)}
				startIcon={<Add />}
				sx={{ display: "flex", ml: "auto" }}>
				New
			</StyledButton>

			<NewCourse
				openNew={openNew}
				refetch={refetch}
				setOpenNew={setOpenNew}
			/>

			{isLoading ? (
				<Box
					alignItems='center'
					className='min-h-[calc(100vh_-_10rem)]'
					display='flex'
					justifyContent='center'>
					<CircularProgress color='accent' />
				</Box>
			) : (
				<Box
					className='grid-cols-1 md:grid-cols-2'
					display='grid'
					gap={8}>
					{data.toReversed().map((item, i) => (
						<CourseCard
							cardActions={
								<Box className='space-x-4'>
									<StyledButton
										onClick={() => {
											setItem(item);
											setOpenEdit(true);
										}}>
										Edit
									</StyledButton>

									<StyledButton
										color='error'
										onClick={() => {
											setItem(item);
											setOpenDelete(true);
										}}
										sx={{ color: "primary.main" }}>
										Delete
									</StyledButton>
								</Box>
							}
							item={item}
							key={i}
						/>
					))}
				</Box>
			)}

			<EditCourse
				item={item}
				openEdit={openEdit}
				refetch={refetch}
				setOpenEdit={setOpenEdit}
			/>

			<DeleteCourse
				item={item}
				openDelete={openDelete}
				refetch={refetch}
				setOpenDelete={setOpenDelete}
			/>
		</Box>
	);
};

export default MyCoursesPage;
