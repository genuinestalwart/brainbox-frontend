import {
	Card,
	CardActions,
	CardContent,
	Chip,
	Typography,
} from "@mui/material";

const CourseCard = ({ cardActions, hidePrice, item }) => {
	const { description, price, title } = item;
	return (
		<Card
			sx={{
				display: "flex",
				flexDirection: "column",
				justifyContent: "space-between",
			}}>
			<CardContent>
				<Typography
					className='line-clamp-1'
					fontWeight={600}
					component='h2'
					variant='h5'>
					{title}
				</Typography>

				<hr className='mb-4 mt-2 w-full' />

				<Typography
					className='line-clamp-3'
					component='pre'
					variant='body1'>
					{description}
				</Typography>
			</CardContent>

			<CardActions
				sx={{
					justifyContent: hidePrice ? "end" : "space-between",
					mb: 2,
					px: 4,
				}}>
				{!hidePrice && (
					<Chip
						className='font-bold'
						color='accent'
						label={`Price: $${price}`}
					/>
				)}
				{cardActions}
			</CardActions>
		</Card>
	);
};

export default CourseCard;
