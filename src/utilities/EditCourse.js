export const fields = (item) => [
	{
		defaultValue: item.title,
		id: "title",
		label: "Titile",
	},
	{
		defaultValue: item.price,
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
		defaultValue: item.instructors,
		id: "instructors",
		label: "Instructors",
	},
	{
		defaultValue: item.description,
		id: "description",
		label: "Description",
		minRows: 5,
		multiline: true,
	},
];
