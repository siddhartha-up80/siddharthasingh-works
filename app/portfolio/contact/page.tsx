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

const Page = () => {
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
      <section className="text-gray-600 dark:text-gray-300 body-font relative">
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
        <div className="container px-5 py-24 mx-auto flex">
          <form
            className="lg:w-1/3 md:w-1/2 bg-white dark:bg-black rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md"
            onSubmit={sendEmailMessage} // Use the client-side function here
          >
            <div>
              <ul className="flex justify-between my-5 items-center flex-row flex-wrap md:gap-8 gap-2 mt-2 dark:text-white">
                {[
                  {
                    href: "https://www.instagram.com/sid_up80",
                    icon: (
                      <InstagramIcon
                        size={50}
                        className="hover:size-[100%] transition-all duration-300"
                      />
                    ),
                  },
                  {
                    href: "https://github.com/siddhartha-up80",
                    icon: (
                      <GithubIcon
                        size={50}
                        className="hover:size-[110%] transition-all duration-300"
                      />
                    ),
                  },
                  {
                    href: "https://twitter.com/siddhartha_up80",
                    icon: (
                      <TwitterIcon
                        size={50}
                        className="hover:size-[110%] transition-all duration-300"
                      />
                    ),
                  },
                  {
                    href: "https://www.linkedin.com/in/siddhartha-singh-work",
                    icon: (
                      <LinkedinIcon
                        size={50}
                        className="hover:size-[110%] transition-all duration-300"
                      />
                    ),
                  },
                ].map((link, index) => (
                  <li key={index} className="social-icons ">
                    <Link
                      href={link.href}
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour flex gap-1 flex-col items-center"
                    >
                      {link.icon}
                      {link.href.includes("instagram") ? (
                        <span className="text-sm">Instagram</span>
                      ) : link.href.includes("github") ? (
                        <span className="text-sm">Github</span>
                      ) : link.href.includes("twitter") ? (
                        <span className="text-sm">Twitter</span>
                      ) : (
                        <span className="text-sm">Linkedin</span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <h2 className="text-gray-900 dark:text-white text-lg mb-1 font-medium title-font">
              Contact Me
            </h2>
            <p className="leading-relaxed mb-5 text-gray-600 dark:text-gray-300">
              Follow me and DM me for any queries or just to say hi.
            </p>

            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600 dark:text-gray-300"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email} // Bind value to state
                onChange={(e) => setEmail(e.target.value)} // Update state
                className="w-full bg-white dark:bg-black rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600 dark:text-gray-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={message} // Bind value to state
                onChange={(e) => setMessage(e.target.value)} // Update state
                className="w-full bg-white dark:bg-black rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 dark:text-gray-300 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                required
              />
            </div>
            <button className="text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">
              {loading ? "Sending message..." : "Send Message"}
            </button>
            <p className=" text-xs text-green-500 mt-3 text-center">
              {loading && "Sending message..."}
              {sucessfullMessage}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 text-center">
              Send me your message and I will get back to you as soon as
              possible.
            </p>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Page;
