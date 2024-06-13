import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle,
} from "@mui/material";
import { grey } from "@mui/material/colors";
import StyledButton from "@/components/shared/StyledButton";
import { useForm } from "react-hook-form";
import { fields } from "@/utilities/NewCourse";
import InputField from "@/components/shared/InputField";
import { useState } from "react";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import moment from "moment";
import useAuth from "@/hooks/useAuth";

const NewCourse = ({ openNew, refetch, setOpenNew }) => {
	const [loading, setLoading] = useState(false);
	const axiosSecure = useAxiosSecure();
	const { user } = useAuth();

	const {
		register,
		reset,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const onSubmit = async (data) => {
		setLoading(true);
		const timestamp = moment().unix();
		const course = {
			createdAt: timestamp,
			description: data.description,
			instructors: data.instructors,
			price: Number(data.price),
			title: data.title,
			updatedAt: timestamp,
			owner: user.uid,
		};

		await axiosSecure.post("/courses", course);
		await refetch();
		setOpenNew(false);
		setLoading(false);
		reset();
	};

	return (
		<Dialog
			className='[&_div.MuiDialog-paper]:space-y-4'
			component='form'
			open={openNew}
			onClose={() => setOpenNew(false)}
			onSubmit={handleSubmit(onSubmit)}
			sx={{ "& .MuiDialog-paper": { p: 6 } }}>
			<DialogTitle fontWeight={700} sx={{ p: 0 }}>
				Create A New Course
			</DialogTitle>

			<DialogContent>
				{fields.map((field, i) => (
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
					onClick={() => setOpenNew(false)}>
					Cancel
				</StyledButton>

				<StyledButton disabled={loading} type='submit'>
					Create
				</StyledButton>
			</DialogActions>
		</Dialog>
	);
};

export default NewCourse;
