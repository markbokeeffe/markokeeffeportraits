import React from 'react';

const ContactPage = () => {
    return (
        <div>
            <h1>Contact Us</h1>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required />
                <br />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />
                <br />

                <label htmlFor="message">Message:</label>
                <textarea id="message" name="message" required></textarea>
                <br />

                <button type="submit">Submit</button>
            </form>
            <h2>Commission Inquiry</h2>
            <p>If you're interested in commissioning a portrait, please fill out the form above or contact us directly at info@markokeeffeportraits.com.</p>
        </div>
    );
};

export default ContactPage;