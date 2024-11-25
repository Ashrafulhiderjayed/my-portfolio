import { useRef, useState } from "react";
import HeadingTitle from "../../HeadingTitle/HeadingTitle";
import './Contact.css';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { FaFacebook, FaGithubAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const [isLoading, setIsLoading] = useState(false); // State for loading

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loader

        emailjs.sendForm('service_984b5f9', 'template_o5hjhxd', form.current, 'Bd5qlIbGPtDdtB9eX')
            .then((result) => {
                setIsLoading(false); // Stop loader
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your message has been sent successfully!',
                    showConfirmButton: false,
                    timer: 1500
                });
                console.log(result.text);
            }, (error) => {
                setIsLoading(false); // Stop loader
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Failed to send your message. Please try again later.',
                    text: error.text,
                    showConfirmButton: true,
                });
                console.error('Email sending error:', error.text);
            });
    };

    return (
        <>
            <HeadingTitle text="CONTACT ME" />
            <div className="contact">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="flex gap-5 input-section">
                        <input className="input input-lg input-accent" type="text" name="first_name" placeholder="First Name" />
                        <input className="input input-lg input-accent" type="text" name="last_name" placeholder="Last Name" />
                    </div>
                    <div className="flex gap-5 input-section">
                        <input className="input input-lg input-accent" type="email" name="user_email" placeholder="Enter Email" required />
                        <input className="input input-lg input-accent" type="number" placeholder="Enter Phone" />
                    </div>
                    <textarea name="message" className="textarea textarea-accent textarea-lg min-w-full" placeholder="Message" required></textarea>

                    <div className="text-center">
                        <button
                            type="submit"
                            className={`btn btn-accent btn-wide ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span className="flex items-center gap-2">
                                    <svg
                                        className="animate-spin h-5 w-5 text-white"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v8H4z"
                                        ></path>
                                    </svg>
                                    Sending...
                                </span>
                            ) : (
                                "Send"
                            )}
                        </button>
                    </div>
                </form>
            </div>
            

        </>
    );
};

export default Contact;
