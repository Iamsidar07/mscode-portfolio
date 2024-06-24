"use client";
import { email, feather } from "@/assets";
import Image from "next/image";
import React, { FormEvent, useEffect, useState } from "react";
import Lottie from "react-lottie";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";
import Button from "./Button";

const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: email,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};

const emailjsConfig = {
  serviceID: String(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID),
  templateID: String(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID),
  PUBLIC_KEY: String(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY),
};
const Contact = () => {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (
      (!emailData.email.includes("@") || !emailData.email.includes(".")) &&
      emailData.email != ""
    ) {
      setErrorMessage("Please enter a valid email address.");
    } else {
      setErrorMessage("");
    }
  }, [emailData.email]);

  const handleEmailDataChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setEmailData({
      ...emailData,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!emailData.name || !emailData.email || !emailData.message) {
      toast.error("Please fill all the fields!");
      return;
    }
    toast.promise(
      (async () => {
        try {
          const emailContent = {
            from_name: emailData.name,
            to_name: "Manoj kumar",
            from_email: emailData.email,
            to_email: "ms8460149@gmail.com",
            message: `Name: ${emailData.name},
Email: ${emailData.email},
${emailData.message}`,
          };
          await emailjs.send(
            emailjsConfig.serviceID,
            emailjsConfig.templateID,
            emailContent,
            emailjsConfig.PUBLIC_KEY,
          );
          setEmailData({
            email: "",
            name: "",
            message: "",
          });
        } catch (error) {
          toast.error("Something went wrong! Please try again later.");
        }
      })(),
      {
        loading: "Sending Email...",
        error: (error) => error.message,
        success: "Thank you.I will get back to you as soon as possible.",
      },
    );
  };

  return (
    <section id="contact" className="relative w-full py-24 z-20 ">
      <div className="absolute -top-16 lg:-top-24 -left-6 w-24 lg:w-36 h-24 lg:h-36 z-[999]">
        <Image src={feather} alt="feather" fill className="object-contain " />
      </div>
      <div className="absolute bottom-0 right-0 w-72 h-72 blur-[12rem] bg-teal-900 rounded-full" />
      <div className="flex flex-col lg:flex-row justify-center w-full h-full max-w-[1440px] mx-auto">
        <Lottie
          options={defaultOptions}
          height={300}
          width={180}
          style={{ width: "100%", height: "100%" }}
        />
        <form
          onSubmit={sendEmail}
          className="flex flex-col items-start gap-4 p-6 w-full h-full  lg:max-w-lg "
        >
          <h2 className="text-lg md:text-3xl font-semibold">
            Connect with me 🤙
          </h2>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              name="name"
              placeholder="Manoj Kumar"
              value={emailData.name}
              onChange={handleEmailDataChange}
              className="px-7 py-4 pl-4 rounded-lg bg-transparent ring-[1px] ring-gray-800 outline-none focus-within:ring-teal-900"
            />
          </div>
          <div className="flex flex-col w-full gap-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              placeholder="example@gmail.com"
              value={emailData.email}
              onChange={handleEmailDataChange}
              className="px-7 py-4 pl-4 rounded-lg bg-transparent ring-[1px] ring-gray-800 outline-none focus-within:ring-teal-900"
            />
            <p className="text-sm text-gray-500 h-1">{errorMessage}</p>
          </div>
          <div className="flex flex-col w-full gap-2 mb-6">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message here..."
              value={emailData.message}
              onChange={handleEmailDataChange}
              className="px-7 py-4 pl-4 min-h-[250px] rounded-lg bg-transparent ring-[1px] ring-gray-800 outline-none focus-within:ring-teal-900"
            />
          </div>
          <Button
            disabled={Boolean(
              errorMessage ||
                !emailData.name ||
                !emailData.email ||
                !emailData.message,
            )}
            title="Send Email"
            type="submit"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
