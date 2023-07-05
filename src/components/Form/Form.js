import React from "react";
import "./form.css";

const Form = () => {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    // You can pass formData as a fetch body directly:
    fetch("/some-api", { method: form.method, body: formData });

    // Or you can work with it as a plain object:
    const formJson = Object.fromEntries(formData.entries());
    console.log(formJson);
  }

  return (
    <form
      action="https://formsubmit.co/jiangli@gmail.com"
      method="post"
      onSubmit={handleSubmit}
    >
      <label>
        <input
          className="inputName"
          name="inputName"
          placeholder="Please write you name here"
        />
      </label>
      <br />
      <label>
        <input
          className="inputEmail"
          name="inputEmail"
          placeholder="And your Email address"
        />
      </label>
      <br />
      <label>
        <input
          className="inputMobile"
          name="inputMobile"
          placeholder="Your mobile number"
        />
      </label>
      <br />
      <label>
        <textarea
          className="inputMessage"
          name="inputMessage"
          placeholder="Your message"
        />
      </label>
      <br />
      <button type="submit">Submit form</button>
    </form>
  );
};

export default Form;
