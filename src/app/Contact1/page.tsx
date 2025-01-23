import React from "react";

export default function page() {
  return (
    <div>
      <section className="bg-gray-50 text-gray-800">
        <div className="container mx-auto px-6 py-16 max-w-4xl">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              Contact Me
            </h1>
            <p className="text-lg text-gray-600">
              I’d love to hear from you! Whether you have a project in mind,
              want to collaborate, or just want to say hi.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow rounded-lg p-8">
            <form>
              {/* Name */}
              <div className="mb-6">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                />
              </div>

              {/* Email */}
              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                />
              </div>

              {/* Message */}
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="mt-12 text-center">
            <p className="text-lg text-gray-600">
              Or reach out to me directly:
            </p>
            <p className="text-lg font-medium text-gray-800">
              Email:{" "}
              <a
                href="mailto:your-email@example.com"
                className="text-indigo-600 hover:underline"
              >
                your-email@example.com
              </a>
            </p>
            <p className="text-lg font-medium text-gray-800">
              Phone:{" "}
              <a
                href="tel:+1234567890"
                className="text-indigo-600 hover:underline"
              >
                +123 456 7890
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
