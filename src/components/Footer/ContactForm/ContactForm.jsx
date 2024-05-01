import React, { useState } from 'react';
import { StyledButton, StyledContent, StyledForm, StyledInputEmail, StyledInputName } from './ContactFormStyled';

export const ContactForm = () => {
  const [formVal, setFormVal] = useState({
    user_name: '',
    user_email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormVal((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://mail.google.com/mail/u/0/#inbox', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formVal),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      console.log('Form submitted successfully');

      setFormVal({
        user_name: '',
        user_email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInputName
          type="text"
          placeholder="Your Name"
          value={formVal.user_name}
          onChange={handleChange}
          name="user_name"
        />
        <StyledInputEmail
          type="email"
          placeholder="Your Email"
          value={formVal.user_email}
          onChange={handleChange}
          name="user_email"
        />
        <StyledContent
          placeholder="Your Message"
          value={formVal.message}
          onChange={handleChange}
          name="message"
        ></StyledContent>
        <StyledButton>Send</StyledButton>
      </StyledForm>
    </>
  );
};
