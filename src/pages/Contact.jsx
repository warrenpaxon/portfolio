import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen pt-20 flex flex-col items-center justify-center bg-transparent text-blue-900 dark:text-white">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <form
        className="w-full max-w-md bg-white/40 dark:bg-gray-800/40 p-8 rounded-lg shadow-md backdrop-blur-md"
        action="mailto:tanakabrandon91@gmail.com"
        method="POST"
        encType="text/plain"
      >
        <div className="mb-4">
          <label className="block mb-2" htmlFor="name">Name</label>
          <input
            className="w-full p-2 border rounded-md text-black"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="email">Email</label>
          <input
            className="w-full p-2 border rounded-md text-black"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2" htmlFor="message">Message</label>
          <textarea
            className="w-full p-2 border rounded-md text-black"
            id="message"
            name="message"
            rows="5"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;