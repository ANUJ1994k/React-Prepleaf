import React, { useRef } from 'react';

import './dynamicform.css'

const DynamicForm = () => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
    };

    // Custom validation
    if (formData.name.length < 3) {
      alert('Name must be at least 3 characters long.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      alert('Enter a valid email address.');
      return;
    }
    if (formData.password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    // Custom processing (e.g., send form data to server)
    console.log('Form submitted successfully:', formData);
  };

  return (
    <div className='form-submit'>
      <form  onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            ref={nameRef}
            placeholder="Enter your name"
          />
          {/* <dl>
            <dt>Name</dt>
            <dd><input type="text" placeholder='Enter your name' ref={nameRef} /></dd>
          </dl> */}
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            ref={emailRef}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            ref={passwordRef}
            placeholder="Enter your password"
          />
        </div>

        <button type="submi">SUBMIT</button>
      </form>
    </div>
  );
};

export default DynamicForm;
