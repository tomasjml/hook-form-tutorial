import React from "react";
// import PropTypes from "prop-types";

import { useForm } from "react-hook-form";
import { Form, FormGroup, Button } from "reactstrap";
import "./RegisterFormStyle.css";
const RegisterForm = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ mode: "onBlur" });
	const handleRegistration = (data) => console.log(data);
	const handleError = (errors) => {};

	const registerOptions = {
		name: {
			required: "Name is required",
			type: "text",
			maxLength: {
				value: 16,
				message: "Names can have 16 characters at most",
			},
			minLength: {
				value: 3,
				message: "Password must have at least 3 characters",
			},
		},
		email: {
			required: "Email is required",
			type: "email",
			maxLength: {
				value: 32,
				message: "Emails can have 16 characters at most",
			},
			pattern: "/^S+@S+.S+$/",
		},
		password: {
			required: "Password is required",
			type: "password",
			minLength: {
				value: 6,
				message: "Password must have at least 6 characters",
			},
		},
	};

	return (
		<>
			<Form onSubmit={handleSubmit(handleRegistration, handleError)}>
				<FormGroup className="form-group">
					<label>Name</label>
					<input
						name="name"
						type="text"
						{...register("name", registerOptions.name)}
					/>
					<small className="text-danger">
						{errors.name && errors.name.message}
					</small>
				</FormGroup>
				<FormGroup className="form-group">
					<label>Email</label>
					<input
						type="email"
						name="email"
						{...register("email", registerOptions.email)}
					/>
					<small className="text-danger">
						{errors.email && errors.email.message}
					</small>
				</FormGroup>
				<FormGroup className="form-group">
					<label>Password</label>
					<input
						type="password"
						name="password"
						{...register("password", registerOptions.password)}
					/>
					<small className="text-danger">
						{errors.password && errors.password.message}
					</small>
				</FormGroup>
				<Button className="primary">Submit</Button>
			</Form>
		</>
	);
};

RegisterForm.propTypes = {};

export default RegisterForm;
