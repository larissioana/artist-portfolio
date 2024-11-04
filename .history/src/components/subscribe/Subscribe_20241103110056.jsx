import React, { useState } from 'react'
import emailjs from '@emailjs/browser'

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
        emailjs.send("service_hqvy5g4", "template_z4qq4c8", templateParams, "mS5uM5joLWg2-KSXY")
            .then(() => {
                setStatus("It worked");

                formRef.current.reset(); // Reset form fields
            }, (error) => {
                console.log({ error })
            });


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
