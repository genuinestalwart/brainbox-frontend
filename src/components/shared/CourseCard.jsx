import { Card, CardActions, CardContent, Typography } from "@mui/material";

const CourseCard = ({ cardActions, item }) => {
	const { description, instructors, price, title } = item;
	return (
		<Card>
			<CardContent>
				<Typography fontWeight={600} component='h2' variant='h5'>
					{title}
				</Typography>

				<Typography
					className='line-clamp-3'
					component='pre'
					variant='body1'>
					{description}
				</Typography>
			</CardContent>

			<CardActions sx={{ justifyContent: "space-between", mb: 2, px: 4 }}>
				<Typography variant='h5'>${price}</Typography>
				{cardActions}
			</CardActions>
		</Card>
	);
};

export default CourseCard;
