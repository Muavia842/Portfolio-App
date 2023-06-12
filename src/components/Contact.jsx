import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4"
    >
      <form
        action="https://formspree.io/f/xpzezbpg"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className=" text-gray-300 py-4">
            Submit the form below or send me an email. muavia00842@gmail.com
          </p>
        </div>
        <input
          className=" p-1 bg-[#ccd6f6]"
          type="text"
          placeholder="Enter You'r Name"
          name="name"
          autoComplete="off"
          required
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Enter You'r Email"
          name="name"
          autoComplete="off"
          required
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button
          type="submit"
          value="send"
          className="text-white border-2
         hover:bg-pink-600 hover:border-pink-600 
         px-4 py-3 my-8 mx-auto flex items-center"
        >
          Lets Collaborate
        </button>
      </form>
    </div>
  );
};

export default Contact;
