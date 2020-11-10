import Avatar from './avatar';

export default function Intro() {
  return (
<div>
    <div className="bg-primary text-primary md:overflow-hidden">
      <div className="px-4 py-20 md:py-4">
        <div className="md:max-w-6xl md:mx-auto">
          <div className="md:flex md:flex-wrap">
            <div className="md:w-1/2 text-center md:text-left md:pt-16">
              <Avatar author={{ name: "Ruben", avatar: { url: "/avatar.png" } }} />
              <h1 className="font-bold text-2xl text-bold md:text-5xl leading-tight mb-4" >
                Hi, I am Ruben Casas 👋
              </h1>
              <p className="md:text-xl md:pr-48">
                Software Engineer and Architect. Currently building Micro Frontends
                Frameworks At American Express. I enjoy exploring new techologies and
                sharing my expiriences with others...
              </p>
              {/* <a href="#"
                className="mt-6 mb-12 md:mb-0 md:mt-10 inline-block py-3 px-8 text-default bg-default hover:bg-inverse hover:text-secondary rounded-lg shadow"
                >About Me</a> */}
              <div className="text-4xl mt-5">
                <a href="https://twitter.com/Infoxicador" target="_blank" rel="noreferrer" className="mr-3 hover:text-link"><ion-icon name="logo-twitter"></ion-icon></a>
                <a href="https://www.linkedin.com/in/ruben-casas-17100383/" target="_blank" rel="noreferrer" className="mr-3 hover:text-link"><ion-icon name="logo-linkedin"></ion-icon></a> 
                <a href="https://www.youtube.com/c/RubenCasas" target="_blank" rel="noreferrer" className="mr-3 hover:text-link"><ion-icon name="logo-youtube"></ion-icon></a>
              </div>
            </div>
            <div className="md:w-1/2 relative">
              <div className="hidden md:block">
                <div
                  className="mt-10 w-full absolute right-0 top-0 flex rounded-lg bg-white overflow-hidden shadow-lg"
                  style={{ transform: "rotate(-8deg)", marginRight: "-250px", zIndex: 1 }}
                >
                  <div className="w-32 bg-gray-200" style={{ height: "560px" }}></div>
                  <div className="flex-1 p-6">
                    <h2 className="text-lg text-inverse font-bold mb-3">
                      Micro Frontends
                    </h2>
                    <div className="flex mb-5">
                      <div className="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                        <div className="p-1 rounded-full bg-gray-300"></div>
                      </div>
                      <div className="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                        <div className="p-1 rounded-full bg-gray-300"></div>
                      </div>
                      <div className="w-16 rounded-full bg-gray-100 py-2 px-4 mr-2">
                        <div className="p-1 rounded-full bg-gray-300"></div>
                      </div>
                      <div className="w-16 rounded-full bg-gray-100 py-2 px-4">
                        <div className="p-1 rounded-full bg-gray-300"></div>
                      </div>
                    </div>

                    <div className="flex flex-wrap -mx-4 mb-5">
                      <div className="w-1/3 px-4">
                        <div className="h-40 rounded-lg bg-white shadow-lg p-6">
                          <div
                            className="w-16 h-16 rounded-full bg-gray-200 mb-6"
                          ></div>
                          <div
                            className="h-2 w-16 bg-gray-200 mb-2 rounded-full"
                          ></div>
                          <div className="h-2 w-10 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                      <div className="w-1/3 px-4">
                        <div className="h-40 rounded-lg bg-white shadow-lg p-6">
                          <div
                            className="w-16 h-16 rounded-full bg-gray-200 mb-6"
                          ></div>
                          <div
                            className="h-2 w-16 bg-gray-200 mb-2 rounded-full"
                          ></div>
                          <div className="h-2 w-10 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                      <div className="w-1/3 px-4">
                        <div className="h-40 rounded-lg bg-white shadow-lg p-6">
                          <div
                            className="w-16 h-16 rounded-full bg-gray-200 mb-6"
                          ></div>
                          <div
                            className="h-2 w-16 bg-gray-200 mb-2 rounded-full"
                          ></div>
                          <div className="h-2 w-10 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                    </div>

                    <h2 className="text-lg text-gray-700 font-bold mb-3">
                    </h2>

                    <div
                      className="w-full flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3"
                    >
                      <div className="w-1/3">
                        <div className="flex">
                          <div className="h-8 w-8 rounded bg-gray-200 mr-4"></div>
                          <div>
                            <div
                              className="h-2 w-16 bg-gray-200 mb-1 rounded-full"
                            ></div>
                            <div
                              className="h-2 w-10 bg-gray-100 rounded-full"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div
                          className="w-16 rounded-full bg-green-100 py-2 px-4 mx-auto"
                        >
                          <div className="p-1 rounded-full bg-green-200"></div>
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div
                          className="h-2 w-10 bg-gray-100 rounded-full mx-auto"
                        ></div>
                      </div>
                    </div>

                    <div
                      className="flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3"
                    >
                      <div className="w-1/3">
                        <div className="flex">
                          <div className="h-8 w-8 rounded bg-gray-200 mr-4"></div>
                          <div>
                            <div
                              className="h-2 w-16 bg-gray-200 mb-1 rounded-full"
                            ></div>
                            <div
                              className="h-2 w-10 bg-gray-100 rounded-full"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div
                          className="w-16 rounded-full bg-orange-100 py-2 px-4 mx-auto"
                        >
                          <div className="p-1 rounded-full bg-orange-200"></div>
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div
                          className="h-2 w-16 bg-gray-100 rounded-full mx-auto"
                        ></div>
                      </div>
                    </div>

                    <div
                      className="flex flex-wrap justify-between items-center border-b-2 border-gray-100 py-3"
                    >
                      <div className="w-1/3">
                        <div className="flex">
                          <div className="h-8 w-8 rounded bg-gray-200 mr-4"></div>
                          <div>
                            <div
                              className="h-2 w-16 bg-gray-200 mb-1 rounded-full"
                            ></div>
                            <div
                              className="h-2 w-10 bg-gray-100 rounded-full"
                            ></div>
                          </div>
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div
                          className="w-16 rounded-full bg-blue-100 py-2 px-4 mx-auto"
                        >
                          <div className="p-1 rounded-full bg-blue-200"></div>
                        </div>
                      </div>
                      <div className="w-1/3">
                        <div
                          className="h-2 w-8 bg-gray-100 rounded-full mx-auto"
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
      </div>
      <svg
        className="fill-current text-inverse-soft hidden md:block"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path fillOpacity="1" d="M0,224L1440,32L1440,320L0,320Z"></path>
      </svg>
    </div>
</div>
  )
}
