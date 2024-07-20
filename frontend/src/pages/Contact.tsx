
import Accordion from "./faqs"

const Contact = () => {
  return (
    <div>
      <div>
        <section className="py-6 bg-gray-100 sm:py-10 lg:py-16 w-100 h-100">
          <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-bold leading-tight text-[#68f0fa] sm:text-3xl lg:text-4xl">
                Contact us
              </h2>
              <p className="max-w-xl mx-auto mt-3 text-sm leading-relaxed text-gray-500">
                We're here to help and answer any question you might have. We
                look forward to hearing from you and will respond as soon as
                possible. Your feedback and inquiries are important to us.
              </p>
            </div>

            <div className="max-w-3xl mx-auto mt-8 sm:mt-12">
              <div className="grid grid-cols-1 gap-6 px-8 text-center md:px-0 md:grid-cols-3">
                <div className="overflow-hidden bg-white rounded-xl">
                  <div className="p-6">
                    <svg
                      className="flex-shrink-0 w-8 h-8 mx-auto text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                    <p className="mt-4 text-base font-medium text-gray-900">
                      +233-596-613-889
                    </p>
                    <p className="mt-1 text-base font-medium text-gray-900">
                      +233-878-345-777
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden bg-white rounded-xl">
                  <div className="p-6">
                    <svg
                      className="flex-shrink-0 w-8 h-8 mx-auto text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="mt-4 text-base font-medium  text-gray-900">
                      transact.shield@gmail.com
                    </p>
                    <p className="mt-1 text-base font-medium text-gray-900">
                      bayat@example.com
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden bg-white rounded-xl">
                  <div className="p-6">
                    <svg
                      className="flex-shrink-0 w-8 h-8 mx-auto text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <p className="mt-4 text-base font-medium leading-relaxed text-gray-900">
                      North kaneshie, Greater Accra
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 overflow-hidden bg-white rounded-xl">
                <div className="px-4 py-8 sm:p-8">
                  <h3 className="text-2xl font-semibold text-center text-gray-900">
                    Send us a message
                  </h3>

                  <form action="#" method="POST" className="mt-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                      <div>
                        <label
                          htmlFor=""
                          className="text-sm font-medium text-gray-900"
                        >
                          {" "}
                          Your name{" "}
                        </label>
                        <div className="mt-2 relative">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Enter your full name"
                            className="block w-full px-3 py-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor=""
                          className="text-sm font-medium text-gray-900"
                        >
                          {" "}
                          Email address{" "}
                        </label>
                        <div className="mt-2 relative">
                          <input
                            type="email"
                            name=""
                            id=""
                            placeholder="Enter your email address"
                            className="block w-full px-3 py-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor=""
                          className="text-sm font-medium text-gray-900"
                        >
                          Phone number
                        </label>
                        <div className="mt-2 relative">
                          <input
                            type="tel"
                            name=""
                            id=""
                            placeholder="Enter your phone number"
                            className="block w-full px-3 py-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor=""
                          className="text-sm font-medium text-gray-900"
                        >
                          Description
                        </label>
                        <div className="mt-2 relative">
                          <input
                            type="text"
                            name=""
                            id=""
                            placeholder="Describe your issue"
                            className="block w-full px-3 py-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                          />
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor=""
                          className="text-sm font-medium text-gray-900"
                        >
                          Message
                        </label>
                        <div className="mt-2 relative">
                          <textarea
                            name=""
                            id=""
                            placeholder="Enter your message"
                            className="block w-full px-3 py-3 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                          ></textarea>
                        </div>
                      </div>

                      <div className="sm:col-span-2">
                        <button
                          type="submit"
                          className="inline-flex items-center justify-center w-full px-4 py-3 mt-2 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700"
                        >
                          Send
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="p-4  bg-gray-100 rounded-lg w-100">
        <Accordion />
      </div>
    </div>
  );
};

export default Contact;
