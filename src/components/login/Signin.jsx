import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	Divider,
	Typography,
} from "@mui/material";
import { Google } from "@mui/icons-material";
import { useForm } from "react-hook-form";
import { fields } from "@/utilities/Signin";
import InputField from "@/components/shared/InputField";

const Signin = ({ authing, handleGoogle, loading, onSubmit, setLogin }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<Card
			component='form'
			onSubmit={handleSubmit(onSubmit)}
			sx={{ maxWidth: "40%", mx: "auto" }}>
			<CardContent>
				<Typography
					fontWeight={600}
					component='h1'
					textAlign='center'
					variant='h4'>
					Log In To Your Account
				</Typography>

				<Box mx='auto' width='80%'>
					{fields.map((field, i) => (
						<InputField
							disabled={authing || loading}
							errors={errors}
							field={field}
							key={i}
							register={register}
						/>
					))}
				</Box>
			</CardContent>

			<CardActions sx={{ mb: 2 }}>
				<Box
					className='space-y-4'
					mx='auto'
					textAlign='center'
					width='80%'>
					<Button
						color='accent'
						disabled={authing || loading}
						fullWidth
						sx={{ fontWeight: 600 }}
						type='submit'
						variant='contained'>
						Login
					</Button>

					<Divider>OR</Divider>

					<Button
						color='accent'
						disabled={authing || loading}
						fullWidth
						onClick={() => handleGoogle()}
						startIcon={<Google />}
						variant='outlined'>
						Login With Google
					</Button>

					<Typography variant='body2'>
						Don&apos;t have an account?{" "}
						<span
							className='cursor-pointer hover:underline underline-offset-1'
							onClick={() => setLogin(false)}>
							Create an account
						</span>
					</Typography>
				</Box>
			</CardActions>
		</Card>
	);
};

export default Signin;
