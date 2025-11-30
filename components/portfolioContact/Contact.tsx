"use client";

import { sendEmail } from "@/services/mails";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sucessfullMessage, setSucessfullMessage] = useState("");

  const sendEmailMessage = async (event: React.FormEvent) => {
    event.preventDefault(); // Prevent page refresh

    if (!email || !message) {
      alert("Email and message are required");
      return;
    }

    try {
      setLoading(true);
      await sendEmail({
        sentByEmail: email,
        body: message,
      });
      // alert("Message sent successfully");
      setEmail("");
      setMessage("");
      setSucessfullMessage("Message sent successfully");
    } catch (error) {
      console.log("Failed to send email:", error);
      alert("Failed to send Message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <motion.section
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 3, type: "spring" }}
        className="text-gray-600 dark:text-gray-300 body-font relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Agra+(Siddhartha%20Singh)&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            style={{}}
          />
        </div>
        <motion.div
          initial={{ opacity: 0, x: +100, y: 100 }}
          animate={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 3, type: "spring" }}
          className="container px-5 py-24 mx-auto flex"
        >
          <form
            className="lg:w-1/3 md:w-1/2 bg-white dark:bg-black rounded-2xl p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-2xl border border-gray-200 dark:border-gray-800"
            onSubmit={sendEmailMessage} // Use the client-side function here
          >
            <div>
              <ul className="flex justify-between my-6 items-center flex-row flex-wrap md:gap-6 gap-3 mt-2 dark:text-white">
                {[
                  {
                    href: "https://www.instagram.com/sid_up80",
                    icon: (
                      <InstagramIcon
                        size={40}
                        className="hover:scale-110 transition-transform duration-300"
                      />
                    ),
                  },
                  {
                    href: "https://github.com/siddhartha-up80",
                    icon: (
                      <GithubIcon
                        size={40}
                        className="hover:scale-110 transition-transform duration-300"
                      />
                    ),
                  },
                  {
                    href: "https://twitter.com/siddhartha_up80",
                    icon: (
                      <TwitterIcon
                        size={40}
                        className="hover:scale-110 transition-transform duration-300"
                      />
                    ),
                  },
                  {
                    href: "https://www.linkedin.com/in/siddhartha-singh-work",
                    icon: (
                      <LinkedinIcon
                        size={40}
                        className="hover:scale-110 transition-transform duration-300"
                      />
                    ),
                  },
                ].map((link, index) => (
                  <li key={index} className="social-icons ">
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour flex gap-2 flex-col items-center opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {link.icon}
                      <span className="text-xs font-light">
                        {link.href.includes("instagram")
                          ? "Instagram"
                          : link.href.includes("github")
                          ? "Github"
                          : link.href.includes("twitter")
                          ? "Twitter"
                          : "Linkedin"}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <h2 className="text-gray-900 dark:text-white text-2xl mb-2 font-light tracking-tight">
              Contact Me
            </h2>
            <p className="leading-relaxed mb-6 text-sm text-gray-600 dark:text-gray-400 font-light">
              Follow me and DM me for any queries or just to say hi.
            </p>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-xs font-light text-gray-600 dark:text-gray-400 uppercase tracking-wider"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email} // Bind value to state
                onChange={(e) => setEmail(e.target.value)} // Update state
                className="w-full bg-white dark:bg-black rounded-lg border border-gray-300 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-sm outline-none text-gray-700 dark:text-gray-300 py-3 px-4 leading-6 transition-colors duration-200 ease-in-out font-light"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-xs font-light text-gray-600 dark:text-gray-400 uppercase tracking-wider"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message} // Bind value to state
                onChange={(e) => setMessage(e.target.value)} // Update state
                className="w-full bg-white dark:bg-black rounded-lg border border-gray-300 dark:border-gray-700 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-sm outline-none text-gray-700 dark:text-gray-300 py-3 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out font-light"
                required
              />
            </div>
            <button className="text-white bg-black dark:bg-white dark:text-black border-0 py-3 px-8 focus:outline-none hover:scale-105 transition-transform rounded-full text-sm font-light">
              {loading ? "Sending..." : "Send Message"}
            </button>
            <p className="text-xs text-green-500 mt-3 text-center font-light">
              {loading && "Sending message..."}
              {sucessfullMessage}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center font-light">
              Send me your message and I will get back to you as soon as
              possible.
            </p>
          </form>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Contact;
