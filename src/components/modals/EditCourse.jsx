import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import StyledButton from "@/components/shared/StyledButton";
import { useForm } from "react-hook-form";
import InputField from "@/components/shared/InputField";
import { useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import moment from "moment";
import { fields } from "@/utilities/EditCourse";

const EditCourse = ({ item, openEdit, refetch, setOpenEdit }) => {
	const [loading, setLoading] = useState(false);
	const axiosSecure = useAxiosSecure();

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		setLoading(true);
		const timestamp = moment().unix();
		await axiosSecure.patch(`/courses/${item._id}`, {
			createdAt: item.createdAt,
			description: data.description,
			instructors: data.instructors,
			price: Number(data.price),
			title: data.title,
			updatedAt: timestamp,
			owner: item.owner,
		});
		await refetch();
		setOpenEdit(false);
		setLoading(false);
		reset();
	};

	return (
		<Dialog
			className='[&_div.MuiDialog-paper]:space-y-4'
			component='form'
			open={openEdit}
			onClose={() => setOpenEdit(false)}
			onSubmit={handleSubmit(onSubmit)}
			sx={{ "& .MuiDialog-paper": { p: 6 } }}>
			<DialogTitle fontWeight={700} sx={{ p: 0 }}>
				Edit A Course
			</DialogTitle>

			<DialogContent>
				{fields(item).map((field, i) => (
					<InputField
						disabled={loading}
						errors={errors}
						field={field}
						key={i}
						register={register}
					/>
				))}
			</DialogContent>

			<DialogActions sx={{ p: 0 }}>
				<StyledButton
					disabled={loading}
					sx={{
						bgcolor: grey[400],
						color: "secondary.main",
					}}
					onClick={() => setOpenEdit(false)}>
					Cancel
				</StyledButton>

				<StyledButton disabled={loading} type='submit'>
					Edit
				</StyledButton>
			</DialogActions>
		</Dialog>
	);
};

export default EditCourse;
