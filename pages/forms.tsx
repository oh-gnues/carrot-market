import React, {useState} from "react";

// Less code
// Better validation
// Better Errors (set, clear, display)
// Have control over inputs
// Don't deal with events
// Easier Inputs

export default function Forms() {
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [formErrors, setFormErrors] = useState("");
	const [emailErrors, setEmailErrors] = useState("");

	const onUsernameChange = (event:React.SyntheticEvent<HTMLInputElement>) => {
		const {
			currentTarget: { value },
		} = event;
		setUsername(value);
	};
	const onEmailChange = (event:React.SyntheticEvent<HTMLInputElement>) => {
		const {
			currentTarget: { value },
		} = event;
		setEmailErrors("");
		setEmail(value);
	};
	const onPasswordChange = (event:React.SyntheticEvent<HTMLInputElement>) => {
		const {
			currentTarget: { value },
		} = event;
		setPassword(value);
	};
	const onSubmit = (event:React.SyntheticEvent<HTMLFormElement>) => {
		event.preventDefault();
		if (username === "" || email === "" || password === "") {
			setFormErrors("All fields are required");
		}
		if (!email.includes("@")) {
			setEmailErrors("email is required");
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				value={username}
				onChange={onUsernameChange}
				type={"text"}
				placeholder={"Username"}
				required
				minLength={5}
			/>
			<input
				value={email}
				onChange={onEmailChange}
				type={"email"}
				placeholder={"Email"}
				required
			/>
			{emailErrors}
			<input
				value={password}
				onChange={onPasswordChange}
				type={"password"}
				placeholder={"Password"}
				required
			/>
			<input type={"submit"} value={"Create Account"} />
		</form>
	);
}