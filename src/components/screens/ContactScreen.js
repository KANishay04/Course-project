import React from "react";

function ContactScreen() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-indigo-200 to-purple-200 text-gray-800 p-6">
      <h1 className="text-4xl font-bold text-indigo-600 mb-4">Contact Us</h1>
      <p className="text-lg text-gray-700 mb-8 text-center">
        If you have any questions or need further information, please contact us!
      </p>

      {/* Контакт формасы мен карта "Our Location"-ды жан-жақта орналастыру */}
      <div className="flex flex-col md:flex-row w-full max-w-screen-xl gap-12">
        {/* Сол жақта форма */}
        <form className="w-full md:w-1/2 bg-white p-8 rounded-lg shadow-lg space-y-6">
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-gray-700"
              placeholder="Your name"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-gray-700"
              placeholder="Your email"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 text-gray-700"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            Send Message
          </button>
        </form>

        {/* Оң жақта карта мен мекенжай */}
        <div className="w-full md:w-1/2 space-y-12">
          {/* Карта */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">Our Location</h2>
            <div className="w-full h-64 rounded-lg overflow-hidden shadow-md">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d17561.331592315335!2d76.87000535186105!3d43.21667294479637!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3883685804a93795%3A0x38849e5598fa1531!2z0J3QsNGA0YXQvtC3!5e0!3m2!1sru!2skz!4v1732001913963!5m2!1sru!2skz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Мекенжай */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">Our Address</h2>
            <p className="text-gray-700">
              Zhandosova 55, Almaty, Kazakhstan
            </p>
            <p className="text-gray-700">Phone: +7 777 820 62 42</p>
            <p className="text-gray-700">Email: futureforge@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactScreen;
