import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
// jsx

    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({
        name:"",
        emial:"",
        message:""
    });

    const { name, email, message } = formState;

    function handleChange(e){
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);

        // isValid conditional statement
        if (!isValid) {
            setErrorMessage('Your email is invalid!');
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        }
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value});
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <section>
        <h1>Contact me</h1>
            <form onSubmit={handleSubmit} id="Contact-form">
            {/* name */}
                <div>
                    <label htmlFor="name">Name:</label>
                    <input onBlur={handleChange} type="text" name="name" defaultValue={name}/>
                </div>
            {/* email */}
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input onBlur={handleChange} type="text" name="email" defaultValue={email}/>
                </div>
            {/* message */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea onBlur={handleChange} name="message" row="5" defaultValue={message} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;