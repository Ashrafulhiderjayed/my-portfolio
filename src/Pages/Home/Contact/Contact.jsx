import { useRef, useState } from "react";
import HeadingTitle from "../../HeadingTitle/HeadingTitle";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { FaFacebook, FaGithubAlt, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm("service_984b5f9", "template_o5hjhxd", form.current, "Bd5qlIbGPtDdtB9eX")
      .then(
        (result) => {
          setIsLoading(false);
          Swal.fire({
            icon: "success",
            title: "Message sent successfully!",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          setIsLoading(false);
          Swal.fire({
            icon: "error",
            title: "Failed to send message",
            text: "Please try again later.",
            showConfirmButton: true,
          });
        }
      );
  };

  return (
    <section id="contact" className="bg-gray-900 text-white py-16 px-6">
      <HeadingTitle text="CONTACT ME" />

      <div className="container mx-auto">
        {/* Contact Form */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="w-full lg:w-1/2 bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <input
                className="input input-lg input-accent w-full"
                type="text"
                name="first_name"
                placeholder="First Name"
                required
              />
              <input
                className="input input-lg input-accent w-full"
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
              <input
                className="input input-lg input-accent w-full"
                type="email"
                name="user_email"
                placeholder="Email Address"
                required
              />
              <input
                className="input input-lg input-accent w-full"
                type="tel"
                name="user_phone"
                placeholder="Phone Number (optional)"
              />
            </div>
            <textarea
              name="message"
              className="textarea textarea-accent w-full h-32 mb-6"
              placeholder="Your Message"
              required
            ></textarea>
            <button
              type="submit"
              className={`btn btn-accent w-full ${isLoading ? "opacity-50 cursor-not-allowed" : ""}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
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
                "Send Message"
              )}
            </button>
          </form>

          {/* Right Side with Email Icon and Social Links */}
          <div className="w-full lg:w-1/2 flex flex-col items-center justify-start gap-8">
            {/* Large Email Icon */}
            <div className="flex items-center justify-center">
              <FaEnvelope className="text-6xl text-blue-500 hover:text-blue-600 transition duration-300" />
            </div>

            {/* Social Media Links */}
            <div className="text-center text-lg font-semibold">Let's Connect</div>
            <div className="flex gap-6 mt-6">
              <a
                href="https://www.facebook.com/ashraful.hider/"
                target="_blank"
                rel="noreferrer"
                className="social group flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 hover:bg-blue-700 text-white transition duration-300"
              >
                <FaFacebook className="text-2xl group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://github.com/Ashrafulhiderjayed"
                target="_blank"
                rel="noreferrer"
                className="social group flex items-center justify-center w-12 h-12 rounded-full bg-gray-800 hover:bg-gray-900 text-white transition duration-300"
              >
                <FaGithubAlt className="text-2xl group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashraful-hider-b53b5b193/"
                target="_blank"
                rel="noreferrer"
                className="social group flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 hover:bg-blue-600 text-white transition duration-300"
              >
                <FaLinkedin className="text-2xl group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
