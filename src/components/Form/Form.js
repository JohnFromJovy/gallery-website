import React from 'react';
import './form.css';

const Form = () => {
	// function handleSubmit(e) {
	//   // Prevent the browser from reloading the page
	//   e.preventDefault();

	//   // Read the form data
	//   const form = e.target;
	//   const formData = new FormData(form);

	//   // You can pass formData as a fetch body directly:
	//   fetch("/some-api", { method: form.method, body: formData });

	//   // Or you can work with it as a plain object:
	//   const formJson = Object.fromEntries(formData.entries());
	//   console.log(formJson);
	// }

	return (
		<form
			action="https://formsubmit.co/7e677490c0036eb1006c8adb42107fe2"
			method="POST">
			<label>
				<input
					className="inputName"
					name="Name"
					placeholder="Please write you name here"
				/>
			</label>
			<br />
			<label>
				<input
					className="inputEmail"
					name="Email"
					placeholder="And your Email address"
				/>
			</label>
			<br />
			<label>
				<input
					className="inputMobile"
					name="Mobile"
					placeholder="Your mobile number"
				/>
			</label>
			<br />
			<label>
				<textarea
					className="inputMessage"
					name="Message"
					placeholder="Your message"
				/>
			</label>
			<br />
			<button type="submit">Submit form</button>
		</form>
	);
};

export default Form;
