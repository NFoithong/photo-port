import React, { useState } from 'react';

function ContactForm() {
// jsx
    const [formState, setFormState] = useState({
        name:"",
        emial:"",
        message:""
    });

    const { name, email, message } = formState;

    function handleChange(e){
        setFormState({...formState, [e.target.name]: e.target.value});
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
                    <input onChange={handleChange} type="text" name="name" defaultValue={name}/>
                </div>
            {/* email */}
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input onChange={handleChange} type="text" name="email" defaultValue={email}/>
                </div>
            {/* message */}
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea onChange={handleChange} name="message" row="5" defaultValue={message} />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;