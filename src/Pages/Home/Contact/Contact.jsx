import { useRef } from "react";
import HeadingTitle from "../../HeadingTitle/HeadingTitle";
// import './Contact.css';
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2";
import { FaBeer, FaFacebook, FaGithub, FaGithubAlt, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_984b5f9', 'template_o5hjhxd', form.current, 'Bd5qlIbGPtDdtB9eX')
          .then((result) => {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Your message has been send',
                showConfirmButton: false,
                timer: 1500
              })
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
        };
    return (
        <>
        <HeadingTitle text="CONTACT ME" />
        <div className="mb-11 login-box text-center">
        <form ref={form} onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="user_name" /><br />
                <br />
                <label>Email</label>
                <input type="email" name="user_email" /><br />
                <br />
                <label className="mr-32">Message</label>
                <br />
            
            <textarea name="message" /><br />
            
            <input type="submit" value="Send" />
            
        </form>
        </div>
        <div className="text-cyan-50 mb-28 flex flex-wrap md:flex-nowrap pt-5 gap-4 justify-center items-center">
            <a href="https://www.facebook.com/ashraful.hider/" target="_blank"  rel="noreferrer" className=" social"><FaFacebook /></a>
            <a href="https://github.com/Ashrafulhiderjayed" target="_blank"  rel="noreferrer" className=" social"><FaGithubAlt /></a>
            <a href="https://www.linkedin.com/in/ashraful-hider-b53b5b193/" target="_blank"  rel="noreferrer" className=" social"><FaLinkedin /></a>
        </div>
        </>

    );
};

export default Contact;