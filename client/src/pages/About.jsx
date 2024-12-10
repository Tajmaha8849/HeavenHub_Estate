import React from 'react';

export default function About() {
  return (
    <div className="py-16 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-6 text-gray-800">
          About HavenHub
        </h1>
        <p className="text-center text-lg text-gray-600 mb-12">
          Your trusted partner in finding your dream home.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="https://via.placeholder.com/600x400"
              alt="About HavenHub"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="mb-6 text-gray-700 leading-relaxed">
              HavenHub is a leading real estate agency that specializes in helping
              clients buy, sell, and rent properties in the most desirable neighborhoods.
              Our team of experienced agents is dedicated to providing exceptional
              service and making the buying and selling process as smooth as possible.
            </p>
            <p className="mb-6 text-gray-700 leading-relaxed">
              Our mission is to help our clients achieve their real estate goals by
              providing expert advice, personalized service, and a deep understanding of
              the local market. Whether you are looking to buy, sell, or rent a property,
              we are here to guide you every step of the way.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With a wealth of experience and knowledge in the real estate industry, our
              team is committed to delivering the highest level of service to our
              clients. We believe that buying or selling a property should be an
              exciting and rewarding experience, and we strive to make that a reality
              for every one of our clients.
            </p>
          </div>
        </div>

        {/* Owner Section */}
        <div className="mt-16 bg-white shadow-md p-8 rounded-lg">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Meet the Owner: Shubham Prajapati
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <img
              src="https://via.placeholder.com/150"
              alt="Shubham Prajapati"
              className="w-36 h-36 rounded-full shadow-md"
            />
            <div>
              <p className="text-gray-700 leading-relaxed mb-4">
                Shubham Prajapati is the visionary behind HavenHub. With a passion for
                real estate and a commitment to excellence, Shubham founded HavenHub
                to simplify the process of buying, selling, and renting properties.
                His leadership and dedication have helped countless clients achieve
                their real estate goals with confidence.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Beyond real estate, Shubham is an innovator who believes in leveraging
                technology to enhance customer experience. Under his guidance, HavenHub
                has grown to become a trusted name in the industry, known for its
                personalized service and deep market expertise.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
