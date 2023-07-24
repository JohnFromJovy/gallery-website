import React from 'react';
import './form.css';

const Form = () => {
	return (
		<form
			action="https://formsubmit.co/7e677490c0036eb1006c8adb42107fe2"
			method="POST">
			<input
				className="inputName"
				name="Name"
				placeholder="Please write you name here"
			/>

			<input
				className="inputEmail"
				name="Email"
				placeholder="And your Email address"
			/>

			<input
				className="inputMobile"
				name="Mobile"
				placeholder="Your mobile number"
			/>

			<textarea
				className="inputMessage"
				name="Message"
				placeholder="Your message"
			/>
			<button type="submit">Submit form</button>
		</form>
	);
};

export default Form;
