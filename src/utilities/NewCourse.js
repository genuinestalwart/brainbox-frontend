export const fields = [
	{
		id: "title",
		label: "Titile",
	},
	{
		id: "price",
		inputProps: { step: "1" },
		label: "Price",
		type: "number",
		validation: {
			min: 1,
			validate: (num) => (isNaN(Number(num)) ? false : true),
		},
	},
	{
		id: "instructors",
		label: "Instructors",
	},
	{
		id: "description",
		label: "Description",
		minRows: 5,
		multiline: true,
	},
];
