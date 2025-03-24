import React from "react";
import { Link } from "react-router";
function Home() {
  return (
    <div className="w-full bg ">
      <section class="text-gray-600 body-font h-screen flex bg-gray-900  bg-svg-constellation-gray-100 relative ">
        <div class="container mx-auto flex px-5 py-12 items-center justify-center flex-col">
          <div class="lg:w-2/3 w-full animate-fade-in-down">
            <h1 class="md:text-6xl text-3xl mb-2 font-bold text-white tracking-tight leading-tight">
              Transform Your Events
            </h1>

            <h1 class="md:text-6xl text-3xl mb-4 font-bold text-white tracking-tight leading-tight">
              With Stunning Balloon{" "}
              <span class="border-b-4 border-green-400 -mb-20"></span>Decor
            </h1>

            <p class="mt-8 mb-16 md:leading-relaxed leading-normal text-white tracking-tight text-xl">
              Elevate every occasion with breathtaking balloon arrangements and
              creative event styling.
            </p>

            <Link
              to="/contact"
              class="uppercase rounded-sm bg-red-400 font-bold text-white px-8 py-4 mx-auto mr-4 hidden md:inline"
            >
              Contact us
            </Link>
            <Link
              to="/booking"
              class="uppercase rounded-sm bg-green-400 font-bold text-white px-8 py-4 mx-auto hidden md:inline"
            >
              Book now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
