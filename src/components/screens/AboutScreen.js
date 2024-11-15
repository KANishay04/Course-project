import React from "react";

function AboutScreen() {
  return (
    <div className="flex flex-col items-center p-6">
      {/* Негізгі тақырып */}
      <h2 className="text-3xl font-bold text-gray-800 mb-2">Why Choose Future Forge?</h2>
      <p className="text-gray-600 text-center mb-8">
        Lorem ipsum dolor sit amet consectetur adipiscing maecenas sed sociosqu egestas.
      </p>

      {/* Карточкалар бөлімі */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Get Certificate карточкасы */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            {/* Сурет немесе иконка қосу */}
            <img src="/path-to-icon/certificate-icon.png" alt="Certificate" className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Get Certificate</h3>
          <p className="text-gray-600 text-center mt-2">
            We are providing a certificate to you after completing your course and this will help your future.
          </p>
        </div>

        {/* Get Membership карточкасы */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            {/* Сурет немесе иконка қосу */}
            <img src="/path-to-icon/membership-icon.png" alt="Membership" className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Get Membership</h3>
          <p className="text-gray-600 text-center mt-2">
            We are providing an offer that you can join our membership club and you will get some extra.
          </p>
        </div>

        {/* Become a Teacher карточкасы */}
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg">
          <div className="mb-4">
            {/* Сурет немесе иконка қосу */}
            <img src="/path-to-icon/teacher-icon.png" alt="Teacher" className="w-12 h-12" />
          </div>
          <h3 className="text-xl font-semibold text-gray-700">Become a Teacher</h3>
          <p className="text-gray-600 text-center mt-2">
            We are giving you a chance to become a teacher after completing your course and you can join freely.
          </p>
        </div>
      </div>

      {/* Жаңа секция */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full bg-gray-100 p-6 rounded-lg shadow-lg mt-8">
        {/* Сол жақ бөлігі */}
        <div className="flex flex-col items-start space-y-4">
          <h3 className="text-lg font-semibold text-gray-700">1K+ Qualified Mentor</h3>
          <div className="flex flex-col space-y-2">
            <div className="flex items-center space-x-2">
              <img src="/path-to-image/user1.jpg" alt="Ashton Agar" className="w-8 h-8 rounded-full" />
              <p>Ashton Agar</p>
              <span className="text-green-500">★★★★★</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/path-to-image/user2.jpg" alt="Ros Tylor" className="w-8 h-8 rounded-full" />
              <p>Ros Tylor</p>
              <span className="text-green-500">★★★★☆</span>
            </div>
            <div className="flex items-center space-x-2">
              <img src="/path-to-image/user3.jpg" alt="Jacob William" className="w-8 h-8 rounded-full" />
              <p>Jacob William</p>
              <span className="text-green-500">★★★★★</span>
            </div>
          </div>
          <div className="text-gray-600 text-sm">100+ Design Mentor</div>
        </div>

        {/* Оң жақ бөлігі */}
        <div className="flex flex-col items-start md:ml-8">
          <h3 className="text-2xl font-bold text-gray-800">Get Trained by the world's best Teachers</h3>
          <p className="text-gray-600 mt-2 mb-4">
            Lorem ipsum dolor sit amet consectetur adipiscing maecenas sed sociosqu egestas.
          </p>
          <ul className="list-disc list-inside text-gray-600">
            <li>Get in touch</li>
            <li>Sharing experiences</li>
          </ul>
          <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default AboutScreen;
