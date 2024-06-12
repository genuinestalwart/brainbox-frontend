import { TextField } from "@mui/material";

const InputField = ({
	children,
	disabled,
	errors = {},
	field,
	onChange = () => {},
	register = () => {},
}) => {
	return (
		<TextField
			autoComplete={field.autoComplete || "off"}
			color='accent'
			defaultValue={field.defaultValue}
			disabled={disabled}
			error={errors[field.id] ? true : false}
			fullWidth={field.fullWidth}
			helperText={errors[field.id] ? field.helperText : ""}
			id={field.id}
			inputProps={field.inputProps}
			label={field.label}
			margin='normal'
			onChange={(e) => onChange(e.target.value)}
			placeholder={field.placeholder}
			{...register(field.id, field.validation)}
			required
			select={field.select}
			size={"medium"}
			sx={{ bgcolor: "primary.main" }}
			type={field.type}
			variant='standard'>
			{children}
		</TextField>
	);
};

export default InputField;
