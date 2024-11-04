import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Subscribe = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        // Prepare the template parameters
        const templateParams = {
            email: email,
        };

        // Send email using EmailJS
        emailjs.send("service_hqvy5g4", "template_z4qq4c8", templateParams, "mS5uM5joLWg2-KSXY")
            .then((response) => {
                console.log("Success!", response.status, response.text);
                setStatus("Check your email for a confirmation message.");

                // Clear the form field after submission
                setEmail("");
            })
            .catch((err) => {
                console.error("Failed...", err);
                setStatus("Something went wrong, please try again.");
            });
    }

    return (
        <div>
            <h2>Subscribe to our newsletter</h2>
            <form onSubmit={sendEmail}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Subscribe</button>
            </form>
            {
                status && <p>{status}</p>
            }
        </div>
    )
}

export default Subscribe;
