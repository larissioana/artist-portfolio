import React, { useState } from 'react'
import emailjs from 'emailjs/browser'
import { p } from 'framer-motion/client'

const Subscribe = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")
    const [status, setStatus] = useState("")

    const sendEmail = (e) => {
        e.preventDefault();

        const template = {
            name: name,
            email: email,
            message: message,
        };
        emailjs.send("service_hqvy5g4", "template_z4qq4c8", template, "mS5uM5joLWg2-KSXY")
            .then((response) => {
                console.log("Success!", response.status, response.text);
                setStatus("Check your email for a confirmation message")
            }, (err) => {
                console.error("Failed...", err);
                setStatus("Something went wrong, please try again.")
            })

    }
    return (
        <div>
            <h2>Subscribe to our newsletter</h2>
            <form onSubmit={sendEmail}>
                <input type="text" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <button type="submit">Subscribe</button>
            </form>
            {
                status &&
                <p>{status}</p>
            }
        </div>
    )
}

export default Subscribe
