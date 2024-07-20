import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  const {
    isAuthenticated,
  } = useAuth0();



 

  return (
    <div className="kiki">
    <div className="bg-white">
      <div className="mobiview shadow-200xl">
        <div className="-mt-20 shadow-inner">
          <div className="bg-[#FCF8F1] bg-opacity-30 py-5 sm:py-10 lg:py-24">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-12">
                <div className="w-full sm:w-1/2 text-center sm:text-left">
                  <p className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-wider text-[#222922] uppercase">
                    WELCOME TO
                    <span className="font-bold text-[#68f0fa] text-2xl sm:text-3xl lg:text-4xl block sm:inline">
                      {" "}
                      DO4ME{" "}
                    </span>
                  </p>
                  <h1 className="mt-2 lg:mt-4 text-2xl sm:text-3xl lg:text-5xl font-bold text-black">
                    Connect with Professionals across Ghana.
                  </h1>
                  <div className="hidden sm:block">
                    <p className="mt-2 lg:mt-4 text-sm lg:text-base text-black">
                      Grow your career fast with Us.
                    </p>
                    <p className="mt-2 lg:mt-5 text-xs lg:text-sm text-gray-600">
                      Already joined us?{" "}
                    </p>
                    <span className="flex space-x-2 items-center">
                      <div

                        title=""
                        role="button"
                        className="inline-flex items-center px-4 py-2 lg:px-6 lg:py-4 mt-4 lg:mt-8 text-sm lg:text-base font-semibold text-black transition-all duration-200 bg-[#68f0fa] rounded-full hover:bg-yellow-400 focus:bg-yellow-400"
                        
                      >
                        Login
                      </div> 
                      </span>
                      {isAuthenticated && (
                        <div className="w-full">
                          <SearchBar
                            placeHolder="Search by City or Town"
                            onSubmit={handleSearchSubmit}
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 mt-4 sm:mt-0">
                  <img
                    className="w-full rounded-md"
                    src=""
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div>
              <div className="howitworks">
                <section className="py-10 bg-white sm:py-16 lg:py-24">
                  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="max-w-2xl mx-auto text-center">
                      <h2 className="text-3xl font-bold leading-tight text-[#68f0fa]  sm:text-4xl lg:text-5xl">
                        How does it work?
                      </h2>
                      <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
                        After Creating a free DO4ME account.Follow these steps :
                      </p>
                    </div>

                    <div className="relative mt-12 lg:mt-20">
                      <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                        <img
                          className="w-full"
                          src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg"
                          alt=""
                        />
                      </div>

                      <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
                        <div>
                          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                            <span className="text-xl font-semibold text-gray-700"> 1 </span>
                          </div>
                          <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                            Choose a Professional by price range , skills, and reviews.
                          </h3>
                          <p className="mt-4 text-base text-gray-600">
                            Choose a professional for your job that fits your needs!
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                            <span className="text-xl font-semibold text-gray-700"> 2 </span>
                          </div>
                          <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                            Schedule a Professional survey as early as today.
                          </h3>
                          <p className="mt-4 text-base text-gray-600">
                            Schedule a survey for a professional to physically examine
                            the job.
                          </p>
                        </div>

                        <div>
                          <div className="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                            <span className="text-xl font-semibold text-gray-700"> 3 </span>
                          </div>
                          <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                            Chat, pay, tip, and review all in one place.
                          </h3>
                          <p className="mt-4 text-base text-gray-600">
                            Easily communicate with your service provider, make payments
                            and make reviews all in one place.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <div>
                <div className="mb-7 ml-9 inline-flex items-center px-6 py-4 mt-8 font-semibold text-black transition-all duration-200 bg-[#68f0fa] rounded-full lg:mt-16">
                  <p className="font-bold  text-xl text-gray-900 dark:text-black">
                    {" "}
                    Popular Services
                  </p>
                </div>

                <div>
                  <div className="firstlane">
                    <div className="flex flex flex-wrap justify-evenly md:justify-between justify-center ">
                      <div className="notmine mb-6 w-64">
                        <div className="  w-64  bg-white  border-[#68f0fa] rounded-lg shadow dark:bg-[#68f0fa]  dark:border-gray-700">
                          <a >
                            <img
                              className="rounded-t-lg w-full h-60 object-cover"
                              src="https://i.ibb.co/1fG5dPQ/Plumbing-Help.webp"
                              alt=""
                            />
                          </a>
                          <div className="p-5">
                            <a href="#">
                              <h5 className="mb-2 text-1xl font-bold tracking-tight bg-[#68f0fa]  dark:text-black">
                                Plumbing
                              </h5>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="notmine mb-6 w-64  ">
                        <div className="  w-64 h-auto bg-white  border-[#68f0fa] rounded-lg shadow dark:bg-[#68f0fa]  dark:border-gray-700">
                          <a >
                            <img
                              className="rounded-t-lg w-full h-60 object-cover"
                              src="https://www.bls.gov/ooh/images/2880.jpg"
                              alt=""
                            />
                          </a>
                          <div className="p-5">
                            <a href="#">
                              <h5 className="mb-2 text-1xl font-bold tracking-tight bg-[#68f0fa]  dark:text-black">
                                Carpentry
                              </h5>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="notmine mb-6 w-64">
                        <div className="  w-64 h-auto bg-white  border-[#68f0fa] rounded-lg shadow dark:bg-[#68f0fa]  dark:border-gray-700">
                          <a >
                            <img
                              className="rounded-t-lg w-full h-60 object-cover"
                              src="https://vivahr.com/wp-content/uploads/2023/05/event-planner-job-description-template.jpg"
                              alt=""
                            />
                          </a>
                          <div className="p-5">
                            <a href="#">
                              <h5 className="mb-2 text-1xl font-bold tracking-tight bg-[#68f0fa]  dark:text-black">
                                Events Planning
                              </h5>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="notmine mb-6 w-64 ">
                        <div className="  w-64 h-auto bg-white  border-[#68f0fa] rounded-lg shadow dark:bg-[#68f0fa]  dark:border-gray-700">
                          <a>
                            <img
                              className="rounded-t-lg w-full h-60 object-cover"
                              src="https://s7d1.scene7.com/is/image/wbcollab/1140x500_worker_power_line_maintenance?qlt=90&fmt=webp&resMode=sharp2"
                              alt=""
                            />
                          </a>
                          <div className="p-5">
                            <a href="#">
                              <h5 className="mb-2 text-1xl font-bold tracking-tight bg-[#68f0fa]  dark:text-black">
                                Electrical Help
                              </h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="secondlane mt-10">
                    <div className="flex flex flex-wrap justify-evenly md:justify-between justify-center ">
                      <div className="notmine mb-6 w-64">
                        <div className="  w-64  bg-white  border-[#68f0fa] rounded-lg shadow dark:bg-[#68f0fa]  dark:border-gray-700">
                          <a >
                            <img
                              className="rounded-t-lg w-full h-60 object-cover"
                              src="https://media.istockphoto.com/id/1394055791/photo/portrait-of-confident-black-female-chef-at-restaurant-kitchen-looking-at-camera.jpg?s=612x612&w=0&k=20&c=vmDoulcE99YonSh-W70ZulSn6OV0MXSP_mO1PpYN5kM="
                              alt=""
                            />
                          </a>
                          <div className="p-5">
                            <a href="#">
                              <h5 className="mb-2 text-1xl font-bold tracking-tight bg-[#68f0fa]  dark:text-black">
                                Catering Services.
                              </h5>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="notmine mb-6 w-64 ">
                        <div className="  w-64 h-auto bg-white  border-[#68f0fa] rounded-lg shadow dark:bg-[#68f0fa]  dark:border-gray-700">
                          <a>
                            <img
                              className="rounded-t-lg w-full h-60 object-cover"
                              src="https://media.istockphoto.com/id/1393767125/photo/contemporary-young-black-man-in-workwear-cleaning-floor-in-openspace-office.jpg?s=612x612&w=0&k=20&c=7r6BTpJULWErpdoetO42sAbWvx6ugz5uLQGw4SDf5nY="
                              alt=""
                            />
                          </a>
                          <div className="p-5">
                            <a href="#">
                              <h5 className="mb-2 text-1xl font-bold tracking-tight bg-[#68f0fa]  dark:text-black">
                                Cleaning Services.
                              </h5>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="notmine  mb-6 w-64">
                        <div className="  w-64 h-auto bg-white  border-[#68f0fa] rounded-lg shadow dark:bg-[#68f0fa]  dark:border-gray-700">
                          <a>
                            <img
                              className="rounded-t-lg w-full h-60 object-cover"
                              src="https://www.zarla.com/images/Zarla-gardening-logos-4531x3327-2021105.jpeg?crop=2:1,smart&width=730&dpr=2"
                              alt=""
                            />
                          </a>
                          <div className="p-5">
                            <a href="#">
                              <h5 className="mb-2 text-1xl font-bold tracking-tight bg-[#68f0fa]  dark:text-black">
                                Gardening
                              </h5>
                            </a>
                          </div>
                        </div>
                      </div>

                      <div className="  ">
                        <div className="  w-64 h-auto bg-white  border-[#68f0fa] rounded-lg shadow dark:bg-[#68f0fa]  dark:border-gray-700">
                          <a >
                            <img
                              className="rounded-t-lg w-full h-60 object-cover"
                              src="https://media.istockphoto.com/id/1337259218/photo/electrician-working-home-client.jpg?s=612x612&w=0&k=20&c=NE7by1yWWBH5-vxaswwTZZ-hDcxJFja7HQOpWYGn1DY="
                              alt=""
                            />
                          </a>
                          <div className="p-5">
                            <a href="#">
                              <h5 className="mb-2 text-1xl font-bold tracking-tight bg-[#68f0fa]  dark:text-black">
                                Mounting and Installation.
                              </h5>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
